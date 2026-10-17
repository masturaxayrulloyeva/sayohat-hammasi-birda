import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, ShieldCheck, Sparkles, Train, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (destination: string, date: string, count: number) => void;
  onExploreConstructor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExploreConstructor
}) => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('Dam olish kunlari (Shanba-Yakshanba)');
  const [travelersCount, setTravelersCount] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination, travelDate, travelersCount);
  };

  const popularDestinations = [
    { name: 'Samarqand & Buxoro', badge: 'Top Tarixiy' },
    { name: 'Zomin tog‘lari', badge: 'Toza havo' },
    { name: 'Amirsoy & Chorvoq', badge: '1 kunlik' },
    { name: 'Xiva — Ichan Qalʼa', badge: 'Afsonaviy' }
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-[#F8F9FA] pt-8 pb-12 sm:pt-14 sm:pb-20">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#0F52BA] text-xs font-bold mb-4 tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span>O‘zbekiston ichki turizmi uchun yagona raqamli platforma</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
            Sayohatni rejalashtirish endi <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F52BA] via-[#00A896] to-[#FF6B35]">
              barchasi birda va oson!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Vaqt va mablag‘ingizni tejang. Chipta qidirish, mehmonxona sarsonligi va yashirin xarajatlarga nuqta qo‘ying. 
            Transport, turar joy, 3 mahal taom va gid — <strong>bitta shaffof narxda!</strong>
          </p>
        </div>

        {/* Central Search Card */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl shadow-blue-900/5 border border-gray-100 ring-1 ring-black/5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Destination selector */}
              <div className="bg-gray-50/80 hover:bg-gray-50 transition p-3 rounded-xl border border-gray-100">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0F52BA]" />
                  Qayerga sayohat?
                </label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full mt-1 bg-transparent font-semibold text-gray-800 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="">Barcha yo‘nalishlar (O‘zbekiston)</option>
                  <option value="Samarqand">Samarqand va Buxoro</option>
                  <option value="Zomin">Zomin tog‘lari</option>
                  <option value="Chorvoq">Chorvoq & Amirsoy</option>
                  <option value="Xiva">Xiva (Ichan Qalʼa)</option>
                  <option value="Boysun">Boysun va Surxondaryo</option>
                  <option value="Qo‘qon">Farg‘ona vodiysi (Rishton/Qo‘qon)</option>
                </select>
              </div>

              {/* Date selector */}
              <div className="bg-gray-50/80 hover:bg-gray-50 transition p-3 rounded-xl border border-gray-100">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00A896]" />
                  Qachon bormoqchisiz?
                </label>
                <select 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full mt-1 bg-transparent font-semibold text-gray-800 text-sm focus:outline-none cursor-pointer"
                >
                  <option value="Dam olish kunlari (Shanba-Yakshanba)">Yaqin dam olish kunlari</option>
                  <option value="24-26 Oktabr">24 — 26 Oktabr</option>
                  <option value="31 Oktabr - 2 Noyabr">31 Oktabr — 2 Noyabr</option>
                  <option value="Noyabr bayramlari">Noyabr maktab taʼtili</option>
                  <option value="Har qanday kun">Menga farqi yo‘q (istalgan sana)</option>
                </select>
              </div>

              {/* Travelers count */}
              <div className="bg-gray-50/80 hover:bg-gray-50 transition p-3 rounded-xl border border-gray-100">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#FF6B35]" />
                  Sayohatdagilar soni
                </label>
                <select 
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(Number(e.target.value))}
                  className="w-full mt-1 bg-transparent font-semibold text-gray-800 text-sm focus:outline-none cursor-pointer"
                >
                  <option value={1}>1 kishi (Yakkaxon)</option>
                  <option value={2}>2 kishi (Er-xotin / Do‘stlar)</option>
                  <option value={3}>3 kishi (Kichik oila)</option>
                  <option value={4}>4 kishi (10% Chegirma!)</option>
                  <option value={5}>5 kishi (Oila / Chegirma)</option>
                  <option value={6}>6+ kishi (Katta guruh)</option>
                </select>
              </div>
            </div>

            {/* Submit & Secondary action bar */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Popular quick tags */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-1">
                <span className="text-xs font-medium text-gray-400 whitespace-nowrap">Ommabop:</span>
                {popularDestinations.map((dest) => (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => {
                      setDestination(dest.name.split(' ')[0]);
                      onSearch(dest.name.split(' ')[0], travelDate, travelersCount);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-blue-50 hover:text-[#0F52BA] text-gray-700 whitespace-nowrap transition"
                  >
                    <span>{dest.name}</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#0F52BA] hover:bg-[#0A3C8A] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-600/25 transition active:scale-95"
                >
                  <Search className="w-4 h-4" />
                  <span>Paketlarni qidirish</span>
                </button>
              </div>
            </div>
          </form>

          {/* Quick interactive constructor callout banner */}
          <div className="mt-4 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-teal-500/10 border border-orange-200/60 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Train className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-gray-900">
                  O‘zingiz istagan shartlarda tur yig‘moqchimisiz?
                </h4>
                <p className="text-xs text-gray-600">
                  "All-in-One" konstruktorda transport, guesthouse va taomlarni o‘zingiz belgilang — narxi darhol hisoblanadi.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onExploreConstructor}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] hover:text-[#e85a26] bg-white px-3.5 py-2 rounded-xl shadow-xs border border-orange-200 hover:border-orange-300 transition whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>Konstruktorni ochish</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Pillars of Guarantee for Uzbek travelers */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0F52BA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">100% Shaffof narx</h4>
              <p className="text-xs text-gray-500 mt-0.5">Yashirin to‘lovlar yo‘q. Smetada nima yozilgan bo‘lsa, faqat shu to‘lanadi.</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center shrink-0">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Chipta kafolati</h4>
              <p className="text-xs text-gray-500 mt-0.5">Afrosiyob va poyezd chiptalari oldindan band qilinadi va kafolatlanadi.</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#FF6B35] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Oilaviy chegirmalar</h4>
              <p className="text-xs text-gray-500 mt-0.5">4 va undan ortiq kishiga avtomatik 10% guruh chegirmasi qo‘llanadi.</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Tekshirilgan uylar</h4>
              <p className="text-xs text-gray-500 mt-0.5">Issiq suv, qulay to‘shak va mehmondo‘st oilalar real fotosuratlari bilan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
