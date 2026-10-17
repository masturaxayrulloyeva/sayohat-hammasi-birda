import React from 'react';
import type { TourPackage } from '../types';
import { formatPrice } from '../utils/formatters';
import { X, Heart, Trash2, MapPin } from 'lucide-react';

interface SavedToursModalProps {
  savedTours: TourPackage[];
  onClose: () => void;
  onSelectTour: (tour: TourPackage) => void;
  onRemoveSaved: (tourId: string) => void;
  onBookTour: (tour: TourPackage) => void;
}

export const SavedToursModal: React.FC<SavedToursModalProps> = ({
  savedTours,
  onClose,
  onSelectTour,
  onRemoveSaved,
  onBookTour
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900">
                Saqlangan turlar
              </h3>
              <p className="text-xs text-gray-500">
                Keyinroq ko‘rish uchun belgilab qo‘yilgan sayohatlar
              </p>
            </div>
          </div>

          {savedTours.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xs text-gray-500">
                Hozircha saqlangan turlar mavjud emas. Tur kartochkalaridagi yurakcha belgisini bosib saqlab qo‘yishingiz mumkin.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {savedTours.map((t) => (
                <div 
                  key={t.id} 
                  className="p-3 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-3 justify-between"
                >
                  <img
                    src={t.imageUrl}
                    alt={t.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 
                      onClick={() => {
                        onClose();
                        onSelectTour(t);
                      }}
                      className="text-xs font-bold text-gray-900 truncate hover:text-[#0F52BA] cursor-pointer"
                    >
                      {t.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      <span className="truncate">{t.destination}</span>
                    </p>
                    <span className="text-xs font-black text-[#0F52BA] block mt-1">
                      {formatPrice(t.pricePerPerson)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onBookTour(t);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FF6B35] text-white text-[11px] font-bold hover:bg-[#e85a26] transition"
                    >
                      Bron
                    </button>
                    <button
                      onClick={() => onRemoveSaved(t.id)}
                      className="p-1 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition self-center"
                      title="O'chirish"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
