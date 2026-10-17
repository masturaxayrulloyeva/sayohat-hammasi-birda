import React from 'react';
import { Home, PackageCheck, Calculator, HomeIcon, FileCheck } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenOffline: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenOffline
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg md:hidden">
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
        <button
          onClick={() => onSelectTab('hero')}
          className={`flex flex-col items-center justify-center transition-colors ${
            activeTab === 'hero' ? 'text-[#0F52BA]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-semibold">Asosiy</span>
        </button>

        <button
          onClick={() => onSelectTab('packages')}
          className={`flex flex-col items-center justify-center transition-colors ${
            activeTab === 'packages' ? 'text-[#0F52BA]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <PackageCheck className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-semibold">Paketlar</span>
        </button>

        <button
          onClick={() => onSelectTab('constructor')}
          className="flex flex-col items-center justify-center relative -top-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F4A261] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 ring-4 ring-white">
            <Calculator className="w-6 h-6" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold text-gray-800">Konstruktor</span>
        </button>

        <button
          onClick={() => onSelectTab('guesthouses')}
          className={`flex flex-col items-center justify-center transition-colors ${
            activeTab === 'guesthouses' ? 'text-[#0F52BA]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-semibold">Uylar</span>
        </button>

        <button
          onClick={onOpenOffline}
          className="flex flex-col items-center justify-center text-gray-500 hover:text-[#00A896] transition-colors"
        >
          <FileCheck className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] mt-1 font-semibold text-emerald-700">Oflayn</span>
        </button>
      </div>
    </div>
  );
};
