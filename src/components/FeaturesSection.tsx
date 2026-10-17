import React from 'react';
import { 
  Layers, 
  Wallet, 
  Users, 
  WifiOff, 
  Send, 
  CheckCircle, 
  HeartHandshake
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const problemsAndSolutions = [
    {
      problem: 'Kutilmagan xarajatlar va noaniq yakuniy smeta',
      solution: 'Yashirin to‘lovlarsiz 100% kafolatlangan yagona narx: transport, yotoq, ovqat va chiptalar ichida.',
      icon: Wallet,
      color: 'bg-blue-50 text-[#0F52BA]'
    },
    {
      problem: 'Poyezd, taksi va mehmonxona vaqtlarini moslashtirish boshi berk ko‘chaga kirishi',
      solution: '"All-in-One" yondashuvi: poyezd chiptasi bilan mehmonxonaga yetib borish vaqtlari professional darajada sinxronlangan.',
      icon: Layers,
      color: 'bg-teal-50 text-[#00A896]'
    },
    {
      problem: 'Tog‘li va chekka qishloqlarda internet uzilib qolishi xavfi',
      solution: 'Oflayn rejim (PWA): yo‘nalish xaritasi, buyurtma vaucheri va gid telefonlari telefoningiz xotirasiga avtomatik saqlanadi.',
      icon: WifiOff,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      problem: 'Katta oila va talabalar uchun qimmatga tushishi',
      solution: 'Oilaviy va guruhli tarif: 4 va undan ortiq kishi uchun 10% avtomatik chegirma hamda bolalar uchun 30% chegirma.',
      icon: Users,
      color: 'bg-orange-50 text-[#FF6B35]'
    }
  ];

  return (
    <section id="features" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0F52BA] text-xs font-bold mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>Nega aynan TravelInOne?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
            Sayohatdagi barcha xavotirlarga chek qo‘yamiz
          </h2>
          <p className="mt-2 text-xs sm:text-base text-gray-600">
            Tajribasiz va resurslari cheklangan oilalar uchun O‘zbekiston bo‘ylab eng qulay, 
            xavfsiz va shaffof sayohat tajribasini yaratdik.
          </p>
        </div>

        {/* 4 Problems vs Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemsAndSolutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100 hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-500 block">
                        Eski muammo:
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">
                        {item.problem}
                      </h4>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-2xl border border-gray-100 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                        Bizning yechimimiz:
                      </span>
                      <p className="text-xs text-gray-700 font-medium mt-0.5 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram Bot Sync Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0F52BA] via-[#00A896] to-[#0A3C8A] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-200 bg-white/10 px-3 py-1 rounded-full inline-block">
              Telegram Bot bilan 100% integratsiya
            </span>
            <h3 className="text-xl sm:text-3xl font-black tracking-tight">
              Barcha chipta va yo‘llanmalar Telegramingizda!
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Hech narsani qog‘ozda chop etish shart emas. Botimiz sizga poyezd yo‘nalishi, 
              guesthouse geolokatsiyasi va mahalliy ob-havo haqida eslatmalar yuborib turadi.
            </p>
          </div>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85a26] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/30 transition active:scale-95 text-sm shrink-0 whitespace-nowrap"
          >
            <Send className="w-4 h-4" />
            <span>Telegram Botga ulanish</span>
          </a>
        </div>
      </div>
    </section>
  );
};
