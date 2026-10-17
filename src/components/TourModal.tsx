import React, { useState } from 'react';
import type { TourPackage } from '../types';
import { formatPrice } from '../utils/formatters';
import { 
  X, 
  Star, 
  Clock, 
  MapPin, 
  Train, 
  Hotel, 
  Utensils, 
  Compass, 
  Check, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onBook: (tour: TourPackage, adults: number, children: number) => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, onBook }) => {
  if (!tour) return null;

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Price calculation
  const totalPeople = adults + children;
  const adultsTotal = adults * tour.pricePerPerson;
  const childrenTotal = children * (tour.pricePerPerson * 0.7);
  const subtotal = adultsTotal + childrenTotal;
  const discountPercent = totalPeople >= 4 ? 10 : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalPrice = subtotal - discountAmount;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky top close bar */}
        <div className="sticky top-0 right-0 z-20 flex justify-end p-3 bg-gradient-to-b from-white/90 via-white/80 to-transparent pointer-events-none">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md flex items-center justify-center pointer-events-auto transition hover:scale-105 active:scale-95"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 -mt-16 bg-gray-100 overflow-hidden">
          <img
            src={tour.imageUrl}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="bg-[#0F52BA] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {tour.durationDays} kun {tour.durationNights > 0 ? `/ ${tour.durationNights} kecha` : ''}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                {tour.destination}
              </span>
              <span className="bg-amber-400 text-gray-950 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-gray-950" />
                {tour.rating} ({tour.reviewsCount} ta sharh)
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              {tour.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 line-clamp-1">
              {tour.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Highlights pill list */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F52BA] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Sayohatning asosiy diqqatga sazovor joylari:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Day-by-Day Itinerary */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0F52BA]" />
              Kunlik aniq dastur (Marshrut)
            </h3>

            <div className="space-y-4">
              {tour.itinerary.map((dayPlan) => (
                <div 
                  key={dayPlan.day} 
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-4 relative pl-6 before:content-[''] before:absolute before:left-2.5 before:top-6 before:bottom-4 before:w-0.5 before:bg-blue-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#0F52BA] text-white text-xs font-bold flex items-center justify-center -ml-5 shadow-xs">
                      {dayPlan.day}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900">{dayPlan.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-2.5 pl-3">{dayPlan.description}</p>
                  
                  <div className="pl-3 flex flex-wrap gap-1.5">
                    {dayPlan.activities.map((act, idx) => (
                      <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                        • {act}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Accommodation condition check */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Exactly what is included */}
            <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Paket ichida kafolatlangan:
              </h4>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#0F52BA]" />
                  <span>{tour.included.transportType}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-[#00A896]" />
                  <span>{tour.included.hotelType}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#FF6B35]" />
                  <span>{tour.included.mealsCount}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  <span>Malakali gid va barcha muzey kirish chiptalari</span>
                </li>
              </ul>
            </div>

            {/* Accommodation verified conditions */}
            <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                <Hotel className="w-4 h-4 text-[#00A896]" />
                Turar joy sharoitlari:
              </h4>
              <p className="text-xs font-bold text-gray-800 mb-2">
                {tour.accommodationDetails.name} ({tour.accommodationDetails.type})
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tour.accommodationDetails.amenities.map((amenity, i) => (
                  <span key={i} className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                    ✓ {amenity}
                  </span>
                ))}
              </div>

              <div className="mt-3 pt-2 border-t border-gray-200 text-[11px] text-gray-500">
                <strong>Yaqin jo‘nash sanalari:</strong> {tour.departureDates.join(', ')}
              </div>
            </div>
          </div>

          {/* Real-time Calculation & Booking Box */}
          <div className="bg-gradient-to-r from-blue-900 to-[#0F52BA] text-white rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-blue-200 uppercase font-semibold">
                Sayohatdagilar sonini belgilang:
              </span>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl">
                  <span className="text-xs font-medium">Kattalar:</span>
                  <button 
                    disabled={adults <= 1}
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-white font-bold"
                  >
                    -
                  </button>
                  <span className="w-4 text-center font-bold text-sm">{adults}</span>
                  <button 
                    onClick={() => setAdults(adults + 1)}
                    className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-white font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl">
                  <span className="text-xs font-medium">Bolalar (-30%):</span>
                  <button 
                    disabled={children <= 0}
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-white font-bold"
                  >
                    -
                  </button>
                  <span className="w-4 text-center font-bold text-sm">{children}</span>
                  <button 
                    onClick={() => setChildren(children + 1)}
                    className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-white font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {discountAmount > 0 && (
                <p className="text-xs text-emerald-300 font-semibold mt-2">
                  🎉 4+ kishi bo‘lgani uchun 10% guruh chegirmasi qo‘llandi (-{formatPrice(discountAmount)})
                </p>
              )}
            </div>

            <div className="text-center sm:text-right shrink-0 w-full sm:w-auto">
              <span className="text-xs text-blue-200 block">Jami to‘lov summasi:</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">
                {formatPrice(finalPrice)}
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBook(tour, adults, children);
                }}
                className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e85a26] text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition active:scale-95 text-sm"
              >
                <span>Hozir bron qilish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
