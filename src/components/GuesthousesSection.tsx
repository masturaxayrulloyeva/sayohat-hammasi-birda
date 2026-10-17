import React, { useState } from 'react';
import { GUESTHOUSES_DATA } from '../data/guesthousesData';
import { formatPrice } from '../utils/formatters';
import { 
  MapPin, 
  Star, 
  Droplet, 
  Wifi, 
  Car, 
  Utensils, 
  Mountain, 
  ShieldCheck
} from 'lucide-react';

interface GuesthousesSectionProps {
  onDirectBooking: (guesthouseName: string, location: string, price: number) => void;
}

export const GuesthousesSection: React.FC<GuesthousesSectionProps> = ({ onDirectBooking }) => {
  const [filterAmenity, setFilterAmenity] = useState<string>('all');

  const filtered = GUESTHOUSES_DATA.filter((gh) => {
    if (filterAmenity === 'hotWater') return gh.amenities.hotWater;
    if (filterAmenity === 'parking') return gh.amenities.parking;
    if (filterAmenity === 'mountain') return gh.amenities.mountainView;
    return true;
  });

  return (
    <section id="guesthouses" className="py-12 sm:py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tekshirilgan Oilaviy Mehmonxonalar</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Haqiqiy sharoitlar, haqqoniy rasmlar
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-xl">
              Viloyatlardagi har bir guesthouse mutaxassislarimiz tomonidan tekshirilgan: 
              doimiy issiq suv, toza o‘rin-to‘shak va mehmondo‘st oilalar.
            </p>
          </div>

          {/* Quick filter pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setFilterAmenity('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filterAmenity === 'all'
                  ? 'bg-[#0F52BA] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Barchasi ({GUESTHOUSES_DATA.length})
            </button>
            <button
              onClick={() => setFilterAmenity('hotWater')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                filterAmenity === 'hotWater'
                  ? 'bg-[#0F52BA] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Droplet className="w-3.5 h-3.5 text-blue-500" />
              <span>Doimiy issiq suv</span>
            </button>
            <button
              onClick={() => setFilterAmenity('parking')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                filterAmenity === 'parking'
                  ? 'bg-[#0F52BA] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-emerald-500" />
              <span>Avtoturargoh</span>
            </button>
            <button
              onClick={() => setFilterAmenity('mountain')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                filterAmenity === 'mountain'
                  ? 'bg-[#0F52BA] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Mountain className="w-3.5 h-3.5 text-amber-500" />
              <span>Tog‘ manzarasi</span>
            </button>
          </div>
        </div>

        {/* Guesthouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((gh) => (
            <div
              key={gh.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={gh.imageUrl}
                  alt={gh.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>{gh.rating}</span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-lg text-white">
                  <span className="text-[11px] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                    <span className="truncate">{gh.location}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0F52BA] transition line-clamp-1">
                    {gh.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {gh.description}
                  </p>

                  {/* Conditions checklist */}
                  <div className="mt-3 pt-2.5 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-1.5">
                      Kafolatlangan sharoitlar:
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-gray-600">
                      {gh.amenities.hotWater && (
                        <span className="flex items-center gap-1 text-blue-600">
                          <Droplet className="w-3 h-3" /> Issiq suv bor
                        </span>
                      )}
                      {gh.amenities.wifi && (
                        <span className="flex items-center gap-1 text-teal-600">
                          <Wifi className="w-3 h-3" /> Wi-Fi internet
                        </span>
                      )}
                      {gh.amenities.parking && (
                        <span className="flex items-center gap-1 text-emerald-600">
                          <Car className="w-3 h-3" /> Avtoturargoh
                        </span>
                      )}
                      {gh.amenities.homeMeal && (
                        <span className="flex items-center gap-1 text-orange-600">
                          <Utensils className="w-3 h-3" /> Nonushta
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Host info and booking */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">1 kecha uchun:</span>
                    <span className="text-sm font-black text-[#0F52BA]">
                      {formatPrice(gh.pricePerNight)}
                    </span>
                  </div>

                  <button
                    onClick={() => onDirectBooking(gh.name, gh.location, gh.pricePerNight)}
                    className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-[#0F52BA] text-[#0F52BA] hover:text-white text-xs font-bold transition active:scale-95"
                  >
                    Band qilish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
