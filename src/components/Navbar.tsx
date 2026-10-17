import React, { useState } from 'react';
import { Compass, Phone, Send, Menu, X, Heart, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  savedToursCount: number;
  onOpenSaved: () => void;
  onOpenOffline: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  savedToursCount,
  onOpenSaved,
  onOpenOffline
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-[#0F52BA] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span className="font-medium">100% Yashirin to‘lovlarsiz kafolatlangan narxlar</span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="hidden sm:inline text-blue-100">4+ kishilik oila va guruhlarga 10% chegirma!</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onOpenOffline}
              className="text-xs text-amber-200 hover:text-white flex items-center gap-1 transition"
              title="Tog'li hududlarda internet bo'lmaganda foydalanish"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Oflayn vaucher
            </button>
            <a 
              href="tel:+998712000055" 
              className="hidden md:flex items-center gap-1 text-white hover:text-amber-200 transition font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>(71) 200-00-55</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F52BA] to-[#00A896] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900">
                  Travel<span className="text-[#0F52BA]">In</span><span className="text-[#FF6B35]">One</span>
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">
                  UZB
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium -mt-0.5 hidden xs:block">
                Ichki turizm — Barchasi birda
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleNavClick('packages')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0F52BA] rounded-lg hover:bg-blue-50/70 transition"
            >
              Tayyor paketlar
            </button>
            <button
              onClick={() => handleNavClick('constructor')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0F52BA] rounded-lg hover:bg-blue-50/70 transition flex items-center gap-1.5"
            >
              <span>Yo‘nalish konstruktori</span>
              <span className="bg-[#FF6B35] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                Kalkulyator
              </span>
            </button>
            <button
              onClick={() => handleNavClick('guesthouses')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0F52BA] rounded-lg hover:bg-blue-50/70 transition"
            >
              Tekshirilgan uylar
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0F52BA] rounded-lg hover:bg-blue-50/70 transition"
            >
              Afzalliklar
            </button>
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Saved tours button */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-gray-600 hover:text-[#0F52BA] hover:bg-gray-100 rounded-lg transition"
              title="Saqlangan turlar"
            >
              <Heart className="w-5 h-5" />
              {savedToursCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {savedToursCount}
                </span>
              )}
            </button>

            {/* Telegram Bot / Direct assistance button */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#00A896] hover:bg-[#008f80] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Bot</span>
            </a>

            {/* CTA Constructor Button */}
            <button
              onClick={() => handleNavClick('constructor')}
              className="inline-flex items-center bg-[#FF6B35] hover:bg-[#e85a26] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 transition active:scale-95"
            >
              Tur hisoblash
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-gray-600 rounded-lg"
            >
              <Heart className="w-5 h-5" />
              {savedToursCount > 0 && (
                <span className="absolute 0 top-0 right-0 bg-[#FF6B35] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedToursCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick('packages')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>Tayyor tur paketlar</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">6 ta</span>
          </button>
          <button
            onClick={() => handleNavClick('constructor')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>Tur konstruktori (Kalkulyator)</span>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">Shaffof</span>
          </button>
          <button
            onClick={() => handleNavClick('guesthouses')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50"
          >
            Tekshirilgan oilaviy uylar
          </button>
          <button
            onClick={() => handleNavClick('features')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50"
          >
            Nega TravelInOne?
          </button>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:+998712000055"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#0F52BA]" />
              <span>(71) 200-00-55 — Tezkor yordam</span>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00A896] text-white font-semibold text-sm"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Bot bilan sinxronlash</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
