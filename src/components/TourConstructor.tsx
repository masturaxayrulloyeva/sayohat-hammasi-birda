import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Train, 
  Hotel, 
  Utensils, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';

interface TourConstructorProps {
  onCustomBook: (summary: {
    destination: string;
    days: number;
    transport: string;
    hotel: string;
    meals: string;
    guide: boolean;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
    pricePerPerson: number;
  }) => void;
}

export const TourConstructor: React.FC<TourConstructorProps> = ({ onCustomBook }) => {
  // Constructor state
  const [destination, setDestination] = useState('Samarqand — Buxoro');
  const [days, setDays] = useState(2);
  const [transportType, setTransportType] = useState<'afrosiyob' | 'minibus' | 'train' | 'car'>('afrosiyob');
  const [hotelType, setHotelType] = useState<'guesthouse' | 'hotel' | 'ecolodge' | 'none'>('guesthouse');
  const [mealPlan, setMealPlan] = useState<'full' | 'half' | 'breakfast'>('full');
  const [guideIncluded, setGuideIncluded] = useState(true);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  // Nights count depends on days
  const nights = Math.max(0, days - 1);

  // Price calculations based on real Uzbekistan domestic tourism averages
  const calculation = useMemo(() => {
    // 1. Transport cost per person (round trip)
    const transportRates = {
      afrosiyob: 240000,
      minibus: 150000,
      train: 130000,
      car: 380000
    };
    const transportPerPerson = transportRates[transportType];

    // 2. Hotel cost per room/person per night
    const hotelRates = {
      guesthouse: 220000, // per person per night
      hotel: 380000,
      ecolodge: 320000,
      none: 0
    };
    const effectiveHotelType = days === 1 ? 'none' : hotelType;
    const hotelPerPerson = hotelRates[effectiveHotelType] * nights;

    // 3. Meals cost per person per day
    const mealRates = {
      full: 160000, // 3 meals
      half: 100000, // 2 meals
      breakfast: 40000 // breakfast only
    };
    const mealsPerPerson = mealRates[mealPlan] * days;

    // 4. Guide & Entry Tickets
    const guidePerPerson = guideIncluded ? 120000 * Math.min(days, 2) : 0;

    const transportTotal = (adults * transportPerPerson) + (children * (transportPerPerson * 0.7));
    const hotelTotal = (adults * hotelPerPerson) + (children * (hotelPerPerson * 0.7));
    const mealsTotal = (adults * mealsPerPerson) + (children * (mealsPerPerson * 0.7));
    const guideTotal = (adults * guidePerPerson) + (children * (guidePerPerson * 0.7));

    const subtotal = transportTotal + hotelTotal + mealsTotal + guideTotal;

    // Group / Family discount (10% if 4 or more people)
    const totalPeople = adults + children;
    const isFamilyDiscountApplicable = totalPeople >= 4;
    const discountPercent = isFamilyDiscountApplicable ? 10 : 0;
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const finalTotal = subtotal - discountAmount;
    const finalPerPerson = totalPeople > 0 ? Math.round(finalTotal / totalPeople) : 0;

    return {
      transportTotal,
      hotelTotal,
      mealsTotal,
      guideTotal,
      subtotal,
      isFamilyDiscountApplicable,
      discountPercent,
      discountAmount,
      finalTotal,
      finalPerPerson,
      totalPeople
    };
  }, [destination, days, nights, transportType, hotelType, mealPlan, guideIncluded, adults, children]);

  const handleBookingClick = () => {
    const transportNames = {
      afrosiyob: 'Afrosiyob tezyurar poyezdi',
      minibus: 'Konditsionerli mikroavtobus',
      train: 'Standart poyezd (Kupe)',
      car: 'Shaxsiy transfer avtomobili'
    };

    const hotelNames = {
      guesthouse: 'Milliy tekshirilgan guesthouse',
      hotel: 'Zamonaviy 3* mehmonxona',
      ecolodge: 'Tog‘ ekologik kotteji',
      none: '1 kunlik (turar joy talab etilmaydi)'
    };

    const mealNames = {
      full: '3 mahal to‘liq milliy taomlar',
      half: '2 mahal taom (nonushta + tushlik)',
      breakfast: 'Faqat nonushta'
    };

    onCustomBook({
      destination,
      days,
      transport: transportNames[transportType],
      hotel: days === 1 ? '1 kunlik tur' : hotelNames[hotelType],
      meals: mealNames[mealPlan],
      guide: guideIncluded,
      adults,
      children,
      totalPrice: calculation.finalTotal,
      discount: calculation.discountAmount,
      pricePerPerson: calculation.finalPerPerson
    });
  };

  return (
    <section id="constructor" className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#FF6B35] text-xs font-bold mb-3">
            <Calculator className="w-4 h-4" />
            <span>"All-in-One" Shaffof Konstruktor</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
            O‘z sayohatingizni o‘zingiz yig‘ing!
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Kerakli xizmatlarni tanlang: narx real vaqtda avtomatik hisoblanadi. 
            Hech qanday qo‘shimcha to‘lovlar yo‘q!
          </p>
        </div>

        {/* 2-Column Layout: Controls on left, Live Price Calculation on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Destination & Days */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center text-xs font-bold">1</span>
                Yo‘nalish va Muddat
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Qaysi hududga borasiz?
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-900 focus:ring-2 focus:ring-[#0F52BA] focus:outline-none"
                  >
                    <option value="Samarqand — Buxoro">Samarqand va Buxoro</option>
                    <option value="Zomin Milliy Bog‘i">Zomin tog‘lari (Jizzax)</option>
                    <option value="Chorvoq & Amirsoy">Chorvoq va Amirsoy (Toshkent vil.)</option>
                    <option value="Xiva (Ichan Qalʼa)">Xiva va Urganch (Xorazm)</option>
                    <option value="Boysun & Omonxona">Boysun va Surxondaryo</option>
                    <option value="Qo‘qon & Rishton">Farg‘ona vodiysi (Rishton/Qo‘qon)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1">
                    Sayohat davomiyligi
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDays(d)}
                        className={`py-2 text-xs font-bold rounded-xl border transition ${
                          days === d
                            ? 'bg-[#0F52BA] text-white border-[#0F52BA] shadow-xs'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {d} {d === 1 ? 'kun' : 'kun'}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    {days === 1 ? 'Bir kunlik tezkor sayr' : `${days} kun / ${nights} kecha turar joy bilan`}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2: Transport */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center text-xs font-bold">2</span>
                Transport turi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'afrosiyob', title: 'Afrosiyob poyezdi', desc: 'Tez, qulay va xavfsiz', price: '240 000 so‘m/kishi' },
                  { id: 'minibus', title: 'Qulay mikroavtobus', desc: 'Konditsionerli Mercedes Sprinter', price: '150 000 so‘m/kishi' },
                  { id: 'train', title: 'Standart poyezd (Kupe)', desc: 'Tungi qulay vagon', price: '130 000 so‘m/kishi' },
                  { id: 'car', title: 'Shaxsiy transfer', desc: 'Faqat sizning oilangiz uchun avto', price: '380 000 so‘m/kishi' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setTransportType(item.id as any)}
                    className={`p-3 rounded-xl border cursor-pointer transition flex items-start justify-between ${
                      transportType === item.id
                        ? 'bg-blue-50/70 border-[#0F52BA] ring-1 ring-[#0F52BA]'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#0F52BA] shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Accommodation (if days > 1) */}
            {days > 1 && (
              <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center text-xs font-bold">3</span>
                  Turar joy darajasi ({nights} kecha)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'guesthouse', title: 'Milliy guesthouse', desc: 'Samimiy oilaviy muhit, issiq suv', price: '220 000 so‘m/kecha' },
                    { id: 'hotel', title: '3* Mehmonxona', desc: 'Standart zamonaviy shinam xona', price: '380 000 so‘m/kecha' },
                    { id: 'ecolodge', title: 'Ekologik kottej', desc: 'Tabiat qo‘ynida alohida uy', price: '320 000 so‘m/kecha' },
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setHotelType(item.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition ${
                        hotelType === item.id
                          ? 'bg-blue-50/70 border-[#0F52BA] ring-1 ring-[#0F52BA]'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h4 className="text-xs font-bold text-gray-900">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                      <span className="text-[11px] font-bold text-[#00A896] block mt-1.5">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Meals & Guide */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center text-xs font-bold">
                  {days === 1 ? '3' : '4'}
                </span>
                Taomlar va Mahalliy Gid
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Ovqatlanish rejasi:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'full', title: '3 mahal to‘liq', desc: 'Palov, tandir, sho‘rva, shirinliklar' },
                      { id: 'half', title: '2 mahal (Nonushta+Tushlik)', desc: 'Kechki ovqat erkin reja' },
                      { id: 'breakfast', title: 'Faqat nonushta', desc: 'Mehmonxonadagi nonushta' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMealPlan(m.id as any)}
                        className={`p-2.5 text-left rounded-xl border transition ${
                          mealPlan === m.id
                            ? 'bg-blue-50/70 border-[#0F52BA] text-gray-900'
                            : 'bg-white border-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="text-xs font-bold block">{m.title}</span>
                        <span className="text-[10px] text-gray-500 block">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guide toggle */}
                <div 
                  onClick={() => setGuideIncluded(!guideIncluded)}
                  className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-gray-300 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      guideIncluded ? 'bg-[#00A896] border-[#00A896] text-white' : 'border-gray-300 bg-white'
                    }`}>
                      {guideIncluded && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">
                        Professional mahalliy gid va muzey biletlari
                      </span>
                      <span className="text-[11px] text-gray-500 block">
                        Navbatda turmasdan kirish va qiziqarli hikoyalar
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-700">
                    {guideIncluded ? '+120 000 so‘m/kishi' : 'Kerak emas'}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 5: People Count */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center text-xs font-bold">
                  {days === 1 ? '4' : '5'}
                </span>
                Sayohat qiluvchilar tarkibi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Kattalar</span>
                    <span className="text-[10px] text-gray-400">12 yoshdan yuqori</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">Bolalar (30% arzon)</span>
                    <span className="text-[10px] text-gray-400">2-11 yosh oralig‘i</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {calculation.isFamilyDiscountApplicable && (
                <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ajoyib! 4 va undan ortiq kishi bo‘lgani uchun 10% oilaviy chegirma berildi!</span>
                </div>
              )}
            </div>
          </div>

          {/* Transparent Cost Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-800">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-sm tracking-wide text-gray-200">
                    Shaffof Smeta & Narx
                  </span>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-800">
                  0 so‘m yashirin to‘lov
                </span>
              </div>

              {/* Chosen config summary */}
              <div className="py-4 space-y-1.5 text-xs text-gray-300 border-b border-gray-800">
                <div className="flex justify-between">
                  <span className="text-gray-400">Yo‘nalish:</span>
                  <span className="font-semibold text-white">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Davomiyligi:</span>
                  <span className="font-semibold text-white">{days} kun {nights > 0 ? `(${nights} kecha)` : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sayohatdagilar:</span>
                  <span className="font-semibold text-white">
                    {adults} ta katta {children > 0 ? `+ ${children} ta bola` : ''} ({calculation.totalPeople} kishi)
                  </span>
                </div>
              </div>

              {/* Breakdown lines */}
              <div className="py-4 space-y-2.5 text-xs border-b border-gray-800">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-blue-400" />
                    Transport xarajati:
                  </span>
                  <span className="font-medium text-white">{formatPrice(calculation.transportTotal)}</span>
                </div>

                {days > 1 && (
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Hotel className="w-3.5 h-3.5 text-teal-400" />
                      Turar joy ({nights} kecha):
                    </span>
                    <span className="font-medium text-white">{formatPrice(calculation.hotelTotal)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-orange-400" />
                    Milliy taomlar ({days} kun):
                  </span>
                  <span className="font-medium text-white">{formatPrice(calculation.mealsTotal)}</span>
                </div>

                {guideIncluded && (
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-indigo-400" />
                      Gid va biletlar:
                    </span>
                    <span className="font-medium text-white">{formatPrice(calculation.guideTotal)}</span>
                  </div>
                )}

                {/* Subtotal */}
                <div className="flex justify-between items-center text-gray-400 pt-1">
                  <span>Oraliq summa:</span>
                  <span>{formatPrice(calculation.subtotal)}</span>
                </div>

                {/* Discount if applicable */}
                {calculation.discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-400 font-semibold bg-emerald-950/60 p-2 rounded-lg border border-emerald-800/60">
                    <span className="flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      Oilaviy chegirma (10%):
                    </span>
                    <span>-{formatPrice(calculation.discountAmount)}</span>
                  </div>
                )}
              </div>

              {/* Final guaranteed total */}
              <div className="pt-4 pb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-gray-400">
                    Jami to‘lov summasi:
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    {formatPrice(calculation.finalTotal)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-gray-400">
                    1 kishi uchun o‘rtacha: <strong className="text-white">{formatPrice(calculation.finalPerPerson)}</strong>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleBookingClick}
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#F4A261] hover:from-[#e85a26] hover:to-[#e09150] text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-orange-500/25 transition active:scale-98 flex items-center justify-center gap-2 text-sm"
              >
                <span>Ushbu shaxsiy turni rasmiylashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Click / Payme / Uzum
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Telegram orqali bilet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
