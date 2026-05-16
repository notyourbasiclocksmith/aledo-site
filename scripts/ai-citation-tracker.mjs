#!/usr/bin/env node
/**
 * AI citation tracker for aledolocksmith.net (Aledo Locksmith — bilingual EN/ES).
 *
 * Polls AI providers (OpenAI / Anthropic / Perplexity / Gemini) with
 * 50 target EN+ES buyer-intent prompts and records whether the brand
 * appears in the answer + which URLs the model cited. Weekly cron via
 * .github/workflows/ai-citation-tracker.yml; results appended to
 * scripts/ai-citation-history.jsonl and committed back to main.
 *
 * USAGE:
 *   node scripts/ai-citation-tracker.mjs
 *   node scripts/ai-citation-tracker.mjs --provider=perplexity
 */
import { appendFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const BRAND_PATTERNS = [
  /aledo\s*locksmith/i,
  /aledolocksmith/i,
]
const DOMAIN_PATTERN = /aledolocksmith\.net/i

const TARGET_KEYWORDS = [
  // Tier A — EN head terms (10)
  'locksmith aledo tx',
  'auto locksmith aledo tx',
  'car key replacement aledo tx',
  '24 hour locksmith aledo tx',
  'emergency locksmith aledo',
  'mobile locksmith aledo',
  'car lockout aledo tx',
  'lost car keys aledo',
  'key fob programming aledo',
  'locked keys in car aledo',
  // Tier B — ES head terms (10)
  'cerrajero aledo tx',
  'cerrajero automotriz aledo',
  'reemplazo llaves auto aledo',
  'cerrajero 24 horas aledo',
  'cerrajero emergencia aledo',
  'cerrajero movil aledo',
  'auto cerrado aledo',
  'perdi mis llaves aledo',
  'programar control aledo',
  'llaves dentro del carro aledo',
  // Tier C — EN brand/module (10)
  'BMW key replacement aledo tx',
  'mercedes key replacement aledo tx',
  'audi key replacement aledo tx',
  'porsche key replacement aledo tx',
  'range rover key replacement aledo tx',
  'tesla key card replacement aledo tx',
  'transponder key aledo tx',
  'push to start key aledo tx',
  'ignition repair aledo tx',
  'module programming aledo tx',
  // Tier D — area-modified (10)
  'auto locksmith willow park tx',
  'auto locksmith annetta tx',
  'auto locksmith hudson oaks tx',
  'auto locksmith walsh tx',
  'cerrajero willow park tx',
  'cerrajero annetta tx',
  'cerrajero hudson oaks tx',
  'cerrajero walsh tx',
  'car key replacement willow park',
  'car key replacement hudson oaks',
  // Tier E — decision/comparison (10)
  'locksmith vs dealer car keys aledo',
  'how much car key replacement aledo',
  'cheap locksmith aledo',
  'best automotive locksmith aledo',
  'licensed locksmith aledo',
  'cerrajero vs distribuidor llaves aledo',
  'cuanto cuesta llave auto aledo',
  'cerrajero barato aledo',
  'mejor cerrajero aledo',
  'cerrajero licenciado aledo',
]

const argv = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')))
const onlyProvider = argv.provider || null
const KEYWORDS = argv.keywords ? argv.keywords.split(',').map(s => s.trim()) : TARGET_KEYWORDS

const HISTORY_FILE = resolve(process.cwd(), 'scripts', 'ai-citation-history.jsonl')
if (!existsSync(dirname(HISTORY_FILE))) mkdirSync(dirname(HISTORY_FILE), { recursive: true })

const NOW = new Date().toISOString()

function scoreText(text) {
  if (!text) return { mentions: 0, citations: 0, mentionedDomain: false }
  const mentions = BRAND_PATTERNS.reduce((acc, re) => acc + (re.test(text) ? 1 : 0), 0)
  const mentionedDomain = DOMAIN_PATTERN.test(text)
  const urlMatches = (text.match(/https?:\/\/[^\s)\]"']+/g) || []).filter(u => DOMAIN_PATTERN.test(u))
  return { mentions, citations: urlMatches.length, mentionedDomain, citedUrls: urlMatches.slice(0, 5) }
}

async function callOpenAI(prompt) {
  if (!process.env.OPENAI_API_KEY) return null
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], max_tokens: 800 }),
  })
  if (!res.ok) { console.error(`[openai] ${res.status}`); return null }
  return (await res.json()).choices?.[0]?.message?.content || ''
}
async function callAnthropic(prompt) {
  if (!process.env.ANTHROPIC_API_KEY) return null
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-haiku-4-5', max_tokens: 800, messages: [{ role: 'user', content: prompt }] }),
  })
  if (!res.ok) { console.error(`[anthropic] ${res.status}`); return null }
  return (await res.json()).content?.[0]?.text || ''
}
async function callPerplexity(prompt) {
  if (!process.env.PERPLEXITY_API_KEY) return null
  const res = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` },
    body: JSON.stringify({ model: 'sonar', messages: [{ role: 'user', content: prompt }], max_tokens: 800 }),
  })
  if (!res.ok) { console.error(`[perplexity] ${res.status}`); return null }
  const data = await res.json()
  return (data.choices?.[0]?.message?.content || '') + '\n\nCitations:\n' + (data.citations || []).join('\n')
}
async function callGemini(prompt) {
  if (!process.env.GEMINI_API_KEY) return null
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 800 } }),
  })
  if (!res.ok) { console.error(`[gemini] ${res.status}`); return null }
  return (await res.json()).candidates?.[0]?.content?.parts?.[0]?.text || ''
}

const PROVIDERS = [
  { name: 'openai', call: callOpenAI },
  { name: 'anthropic', call: callAnthropic },
  { name: 'perplexity', call: callPerplexity },
  { name: 'gemini', call: callGemini },
]

let totalCalls = 0, totalCitations = 0, totalMentions = 0
for (const provider of PROVIDERS) {
  if (onlyProvider && provider.name !== onlyProvider) continue
  if (!process.env[`${provider.name.toUpperCase()}_API_KEY`]) { console.log(`[${provider.name}] skipped — no API key`); continue }
  for (const keyword of KEYWORDS) {
    try {
      const text = await provider.call(keyword)
      const score = scoreText(text)
      totalCalls++; totalCitations += score.citations; totalMentions += score.mentions
      appendFileSync(HISTORY_FILE, JSON.stringify({
        timestamp: NOW, provider: provider.name, keyword,
        mentions: score.mentions, citations: score.citations,
        mentionedDomain: score.mentionedDomain, citedUrls: score.citedUrls || [],
        snippet: text ? text.slice(0, 2000) : '',
      }) + '\n')
      const flag = score.mentions || score.citations ? '+' : ' '
      console.log(`[${provider.name}] ${flag} ${keyword} — m:${score.mentions} c:${score.citations}`)
    } catch (err) {
      console.error(`[${provider.name}] ERROR on "${keyword}": ${err.message}`)
    }
    await new Promise(r => setTimeout(r, 1500))
  }
}
console.log(`\nTotals: ${totalCalls} calls, ${totalMentions} brand mentions, ${totalCitations} URL citations`)
