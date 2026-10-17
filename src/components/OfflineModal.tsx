import React from 'react';
import { 
  X, 
  WifiOff, 
  Download, 
  Send, 
  AlertTriangle
} from 'lucide-react';

interface OfflineModalProps {
  onClose: () => void;
}

export const OfflineModal: React.FC<OfflineModalProps> = ({ onClose }) => {
  const emergencyContacts = [
    { name: 'TravelInOne Tezkor Dispetcher', phone: '+998 (71) 200-00-55', desc: '24/7 barcha turlar bo‘yicha' },
    { name: 'O‘zbekiston Turizm Politsiyasi', phone: '1173', desc: 'Sayohatdagi barcha favqulodda holatlar' },
    { name: 'Tibbiy tez yordam', phone: '103', desc: 'Barcha viloyatlar bo‘ylab' },
    { name: 'Uzrailways Chiptaxonasi', phone: '1005', desc: 'Poyezd reyslari va kechikishlar haqida' },
  ];

  const handleDownloadOfflineGuide = () => {
    const offlineContent = `
=====================================================
TRAVELINONE — OFLAYN SAYOHAT VA FAVQULODDA YO'RIQNOMA
=====================================================
Ushbu hujjat tog'li hududlarda (Zomin, Boysun, Chorvoq) internet va uyali aloqa uzilib qolganda yoningizda bo'lishi uchun mo'ljallangan.

1. FAVQULODDA TELEFONLAR:
- TravelInOne 24/7 yordam: +998 (71) 200-00-55
- Turizm politsiyasi: 1173
- Tez tibbiy yordam: 103
- Qutqaruv xizmati (FVV): 101

2. TEKSHIRILGAN GUESTHOUSE ALOQALARI:
- Zomin Duoba qishlog'i: +998 (90) 123-45-67 (Bahrom aka)
- Samarqand Registon: +998 (91) 456-78-90 (Sherzod aka)
- Buxoro Labi Hovuz: +998 (93) 321-65-43 (Munira opa)
- Chorvoq Yusufxona: +998 (97) 777-88-99 (Jamshid aka)

3. FOYDALI MASLAHATLAR:
- Afrosiyob yoki mahalliy poyezdga chiqishda shaxsni tasdiqlovchi pasport yoki ID-karta asl nusxasi talab qilinadi.
- Tog'li hududlarda (Zomin, Amirsoy) issiq kiyim va qulay poyabzal oling.
- Barcha to'lovlar platformada to'liq qoplangan bo'lib, guesthouse egalari sizdan qo'shimcha to'lov talab qilishga haqli emas.
=====================================================
    `;

    const blob = new Blob([offlineContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TravelInOne_Oflayn_Qollanma.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

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
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900">
                Oflayn Rejim (Offline PWA)
              </h3>
              <p className="text-xs text-gray-500">
                Tog‘li va chekka hududlarda internet bo‘lmaganda
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-5 flex items-start gap-2.5 text-xs text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Zomin, Boysun va Urungoch ko‘llari kabi tog‘li zonalarda uyali aloqa vaqtincha yo‘qolishi mumkin. 
              Sayohat yo‘riqnomasi va telefonlarni oldindan telefoningizga saqlab oling.
            </span>
          </div>

          {/* Emergency list */}
          <div className="space-y-2 mb-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Favqulodda aloqa raqamlari:
            </h4>
            {emergencyContacts.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                <div>
                  <span className="font-bold text-gray-800 block">{c.name}</span>
                  <span className="text-[10px] text-gray-500">{c.desc}</span>
                </div>
                <a
                  href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-black text-[#0F52BA] bg-white px-2.5 py-1 rounded-lg border border-gray-200 hover:bg-blue-50"
                >
                  {c.phone}
                </a>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-2.5">
            <button
              onClick={handleDownloadOfflineGuide}
              className="w-full bg-[#00A896] hover:bg-[#008f80] text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Oflayn qo‘llanmani yuklab olish (.txt)</span>
            </button>

            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0F52BA] hover:bg-[#0A3C8A] text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs"
            >
              <Send className="w-4 h-4" />
              <span>Telegram botga chiptalarni yuborish</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
