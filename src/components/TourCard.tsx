import React from 'react';
import type { TourPackage } from '../types';
import { formatPrice } from '../utils/formatters';
import { 
  Star, 
  Clock, 
  MapPin, 
  Train, 
  Hotel, 
  Utensils, 
  Compass, 
  Heart, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface TourCardProps {
  tour: TourPackage;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
  isSaved?: boolean;
  onToggleSave?: (tourId: string) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onSelectTour,
  onBookTour,
  isSaved = false,
  onToggleSave
}) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Top Image area */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="bg-[#0F52BA] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {tour.durationDays} kun {tour.durationNights > 0 ? `/ ${tour.durationNights} kecha` : ''}
            </span>
            {tour.featured && (
              <span className="bg-[#FF6B35] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                Ommabop tanlov
              </span>
            )}
          </div>

          {/* Heart favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave?.(tour.id);
            }}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition active:scale-90"
            aria-label="Saqlash"
          >
            <Heart 
              className={`w-4 h-4 transition ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Bottom image overlay: Region & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-1 text-xs font-medium drop-shadow-md">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>{tour.destination}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-xs font-bold text-amber-300">
            <Star className="w-3 h-3 fill-amber-300" />
            <span>{tour.rating}</span>
            <span className="text-gray-300 font-normal">({tour.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 
            onClick={() => onSelectTour(tour)}
            className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0F52BA] transition cursor-pointer line-clamp-1"
          >
            {tour.title}
          </h3>

          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {tour.subtitle}
          </p>

          {/* "Barchasi ichida" (All-in-one) package inclusions grid */}
          <div className="mt-3.5 pt-3 border-t border-gray-100">
            <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#00A896]" />
              Paket ichida nimalar bor:
            </p>

            <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-700">
              <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-lg">
                <Train className="w-3.5 h-3.5 text-[#0F52BA] shrink-0" />
                <span className="truncate font-medium text-[11px]">Transport kiritilgan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-lg">
                <Hotel className="w-3.5 h-3.5 text-[#00A896] shrink-0" />
                <span className="truncate font-medium text-[11px]">
                  {tour.included.hotel ? 'Turar joy mavjud' : '1 kunlik tur'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-lg">
                <Utensils className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                <span className="truncate font-medium text-[11px]">Milliy taomlar</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-lg">
                <Compass className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate font-medium text-[11px]">Gid va biletlar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and Action row */}
        <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold block">
              1 kishi uchun to‘liq narx:
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-[#0F52BA]">
                {formatPrice(tour.pricePerPerson)}
              </span>
              {tour.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(tour.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectTour(tour)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              Batafsil
            </button>
            <button
              onClick={() => onBookTour(tour)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#e85a26] shadow-md shadow-orange-500/20 transition flex items-center gap-1 active:scale-95"
            >
              <span>Bron qilish</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
