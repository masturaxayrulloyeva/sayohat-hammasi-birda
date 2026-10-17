import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Download, 
  Phone, 
  User, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';

interface BookingModalProps {
  bookingDetails: {
    title: string;
    destination: string;
    adults: number;
    children: number;
    totalPrice: number;
    discount?: number;
    days?: number;
    isCustom?: boolean;
    transport?: string;
  } | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  bookingDetails,
  onClose
}) => {
  if (!bookingDetails) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [telegram, setTelegram] = useState('');
  const [city, setCity] = useState('Toshkent');
  const [paymentMethod, setPaymentMethod] = useState<'click' | 'payme' | 'uzum' | 'cash'>('click');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handlePhoneChange = (val: string) => {
    if (!val.startsWith('+998')) {
      setPhone('+998 ');
    } else {
      setPhone(val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant network confirmation
    setTimeout(() => {
      const generatedId = 'TRV-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsSubmitting(false);
      setStep('success');
    }, 700);
  };

  const handleDownloadVoucher = () => {
    const voucherText = `
========================================
TRAVELINONE — SAYOHAT VAUCHERI (OFLAYN)
========================================
Buyurtma ID: #${orderId}
Mijoz: ${fullName}
Telefon: ${phone}
Telegram: ${telegram || 'Kiritilmagan'}
Viloyat: ${city}

SAYOHAT MA'LUMOTI:
Tur: ${bookingDetails.title}
Yo'nalish: ${bookingDetails.destination}
Ishtirokchilar: ${bookingDetails.adults} ta katta + ${bookingDetails.children} ta bola
To'lov usuli: ${paymentMethod.toUpperCase()}
Jami to'langan summa: ${formatPrice(bookingDetails.totalPrice)}

KAFOLAT:
* Transport, mehmonxona, taomlar va gid 100% kiritilgan.
* Qo'shimcha yashirin to'lovlar mavjud emas.

Tezkor ishonch telefoni: +998 (71) 200-00-55
Telegram yordam: @TravelInOneUz_bot
========================================
    `;

    const blob = new Blob([voucherText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vaucher_${orderId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gray-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA] flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Rasmiy buyurtma shakli
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                Sayohatingizni rasmiylashtiring
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Tur: <strong className="text-gray-800">{bookingDetails.title}</strong>
              </p>
            </div>

            {/* Quick Pricing Badge */}
            <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-3.5 mb-5 flex items-center justify-between text-xs">
              <div>
                <span className="text-gray-600 block">
                  {bookingDetails.adults} katta {bookingDetails.children > 0 ? `+ ${bookingDetails.children} bola` : ''}
                </span>
                <span className="font-semibold text-gray-900">{bookingDetails.destination}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-500 block text-[10px] uppercase font-bold">To‘lanadigan summa:</span>
                <span className="text-lg font-black text-[#0F52BA]">
                  {formatPrice(bookingDetails.totalPrice)}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Ism va Familiyangiz *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor Rahimov"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#0F52BA] focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone & Telegram */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Telefon raqam *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#0F52BA] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Telegram nik (vaucher uchun)
                  </label>
                  <div className="relative">
                    <Send className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      placeholder="@foydalanuvchi"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#0F52BA] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* City Selection */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Qaysi viloyat/shahardan jo‘naysiz?
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#0F52BA] focus:outline-none cursor-pointer"
                  >
                    <option value="Toshkent">Toshkent shahri va viloyati</option>
                    <option value="Samarqand">Samarqand viloyati</option>
                    <option value="Buxoro">Buxoro viloyati</option>
                    <option value="Farg‘ona">Farg‘ona vodiysi (Andijon/Namangan/Farg‘ona)</option>
                    <option value="Jizzax">Jizzax / Sirdaryo</option>
                    <option value="Qashqadaryo">Qashqadaryo / Surxondaryo</option>
                    <option value="Xorazm">Xorazm / Qoraqalpog‘iston</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Qulay to‘lov usulini tanlang:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'click', name: 'Click Up', badge: '0% komissiya' },
                    { id: 'payme', name: 'Payme', badge: 'Tezkor' },
                    { id: 'uzum', name: 'Uzum Bank', badge: 'Keshbek' },
                    { id: 'cash', name: 'Joyida to‘lash', badge: 'Naqd' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPaymentMethod(p.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition ${
                        paymentMethod === p.id
                          ? 'bg-blue-50/80 border-[#0F52BA] ring-1 ring-[#0F52BA]'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xs font-bold text-gray-900 block">{p.name}</span>
                      <span className="text-[10px] text-gray-500 block">{p.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF6B35] hover:bg-[#e85a26] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 transition active:scale-98 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Tasdiqlanmoqda...</span>
                  ) : (
                    <>
                      <span>Buyurtmani tasdiqlash ({formatPrice(bookingDetails.totalPrice)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center">
                🔒 Shaxsiy maʼlumotlaringiz xavfsiz va faqat chipta rasmiylashtirish uchun ishlatiladi.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                Buyurtma #{orderId} qabul qilindi!
              </span>
              <h3 className="text-2xl font-black text-gray-900 mt-2">
                Tabriklaymiz, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-1 leading-relaxed">
                Sizning sayohatingiz rasmiylashtirildi. Barcha transport, guesthouse va gid maʼlumotlari kafolatlandi.
              </p>
            </div>

            {/* Offline & Telegram sync card */}
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-4 text-left space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#00A896] flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Telegram orqali marshrutni olish:</h4>
                  <p className="text-[11px] text-gray-500">
                    Sayohat rejasini, poyezd chiptasini va guesthouse kontaktlarini Telegram botimizga yuborishimiz mumkin.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleDownloadVoucher}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Oflayn vaucherni yuklab olish (.txt)</span>
                </button>

                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram botda ochish</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full bg-[#0F52BA] hover:bg-[#0A3C8A] text-white text-xs font-bold py-3 rounded-xl transition"
            >
              Tushunarli, asosiy oynaga qaytish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
