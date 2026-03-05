import { redirect } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default function GraciasRedirect({ params }: { params: { lang: Locale } }) {
  if (params.lang === 'en') {
    redirect('/en/thank-you')
  }
  redirect('/es/thank-you')
}
