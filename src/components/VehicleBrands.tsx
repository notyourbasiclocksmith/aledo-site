import Link from 'next/link';
import { vehicleBrands } from '@/data/vehicles';

export default function VehicleBrands() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">All Makes & Models</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-900 mt-3 mb-4">
            Vehicle Brands We Service in Aledo
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From domestic trucks to European luxury vehicles, our mobile locksmith team handles key replacement and programming for every major brand.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {vehicleBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}-key-replacement-aledo`}
              className="group bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-gold-400/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-400/10 transition-colors">
                <span className="text-xl font-black text-primary-500 group-hover:text-gold-500 transition-colors">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-dark-900 group-hover:text-primary-500 transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{brand.country}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
