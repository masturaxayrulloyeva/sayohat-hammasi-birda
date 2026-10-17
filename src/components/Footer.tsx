import React from 'react';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-24 md:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-[#0F52BA] to-[#00A896] flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Travel<span className="text-[#0F52BA]">In</span><span className="text-[#FF6B35]">One</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              O‘zbekiston bo‘ylab oilaviy va guruhli sayohatlarni soddalashtiruvchi yagona raqamli servis.
              Barcha xarajatlar yagona smetada — yashirin to‘lovlarsiz!
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>O‘zbekiston Turizm Qo‘mitasi litsenziyasi</span>
            </div>
          </div>

          {/* Popular routes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Ommabop yo‘nalishlar
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#packages" className="hover:text-white transition">Samarqand va Buxoro (Afrosiyob)</a></li>
              <li><a href="#packages" className="hover:text-white transition">Zomin tog‘lari va Osma ko‘prik</a></li>
              <li><a href="#packages" className="hover:text-white transition">Xiva — Ichan Qalʼa ertagi</a></li>
              <li><a href="#packages" className="hover:text-white transition">Chorvoq & Amirsoy (1 kunlik)</a></li>
              <li><a href="#packages" className="hover:text-white transition">Boysun va Omonxona shifobaxsh bulog‘i</a></li>
              <li><a href="#packages" className="hover:text-white transition">Qo‘qon va Rishton kulollari</a></li>
            </ul>
          </div>

          {/* Features and guarantees */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Bizning kafolatlar
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-1.5">✓ 100% Shaffof narxlar smetasi</li>
              <li className="flex items-center gap-1.5">✓ Uzrailways rasmiy poyezd chiptalari</li>
              <li className="flex items-center gap-1.5">✓ Doimiy issiq suvli tekshirilgan uylar</li>
              <li className="flex items-center gap-1.5">✓ 4+ kishiga 10% guruh chegirmasi</li>
              <li className="flex items-center gap-1.5">✓ Offline PWA: internetsiz yo‘riqnoma</li>
              <li className="flex items-center gap-1.5">✓ Telegram orqali bilet va eslatmalar</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Bog‘lanish va Yordam
            </h4>
            <div className="text-xs space-y-2 text-gray-400">
              <a href="tel:+998712000055" className="flex items-center gap-2 hover:text-white transition font-bold text-white">
                <Phone className="w-3.5 h-3.5 text-[#0F52BA]" />
                <span>+998 (71) 200-00-55 (24/7)</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <span>info@travelinone.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>Toshkent sh., Navoiy ko‘chasi, 28-uy</span>
              </div>
            </div>

            {/* Payment systems badges */}
            <div className="pt-2">
              <span className="text-[10px] text-gray-500 uppercase font-bold block mb-1.5">To‘lov tizimlari:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold text-white">CLICK</span>
                <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold text-teal-300">PAYME</span>
                <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold text-purple-300">UZUM</span>
                <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold text-amber-300">NAQD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 TravelInOne. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            <span>O‘zbekiston ichki turizmini rivojlantirish uchun</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>bilan yaratildi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
