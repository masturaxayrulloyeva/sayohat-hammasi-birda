import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { TourCard } from './components/TourCard';
import { TourModal } from './components/TourModal';
import { TourConstructor } from './components/TourConstructor';
import { GuesthousesSection } from './components/GuesthousesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OfflineModal } from './components/OfflineModal';
import { SavedToursModal } from './components/SavedToursModal';

import type { TourPackage, TourCategory } from './types';
import { TOURS_DATA, CATEGORIES_LIST } from './data/toursData';
import { 
  PackageCheck, 
  Sparkles, 
  Search, 
  Landmark, 
  Mountain, 
  Trees, 
  Compass, 
  Users
} from 'lucide-react';

export const App: React.FC = () => {
  // Navigation & State
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'rating'>('featured');

  // Modals state
  const [activeTourModal, setActiveTourModal] = useState<TourPackage | null>(null);
  const [bookingDetails, setBookingDetails] = useState<{
    title: string;
    destination: string;
    adults: number;
    children: number;
    totalPrice: number;
    discount?: number;
    days?: number;
    isCustom?: boolean;
    transport?: string;
  } | null>(null);
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Saved / Favorite tours (persisted in localStorage)
  const [savedTourIds, setSavedTourIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('travelinone_saved');
      return stored ? JSON.parse(stored) : ['samarqand-buxoro-express', 'zomin-shveytsariya-tur'];
    } catch {
      return ['samarqand-buxoro-express', 'zomin-shveytsariya-tur'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travelinone_saved', JSON.stringify(savedTourIds));
    } catch {
      // ignore
    }
  }, [savedTourIds]);

  const handleToggleSave = (tourId: string) => {
    setSavedTourIds((prev) => 
      prev.includes(tourId) ? prev.filter((id) => id !== tourId) : [...prev, tourId]
    );
  };

  // Filtered & Sorted Tours
  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      // Category filter
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) {
        return false;
      }
      // Search query (destination, title, region)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(query);
        const matchesDest = tour.destination.toLowerCase().includes(query);
        const matchesRegion = tour.region.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDest && !matchesRegion) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.pricePerPerson - b.pricePerPerson;
      if (sortBy === 'price_desc') return b.pricePerPerson - a.pricePerPerson;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const savedToursList = useMemo(() => {
    return TOURS_DATA.filter((t) => savedTourIds.includes(t.id));
  }, [savedTourIds]);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero search trigger
  const handleHeroSearch = (destination: string) => {
    if (destination) {
      setSearchQuery(destination);
    }
    handleNavigate('packages');
  };

  // Direct package booking
  const handleBookTour = (tour: TourPackage, adultsCount: number = 2, childrenCount: number = 0) => {
    const totalPeople = adultsCount + childrenCount;
    const subtotal = (adultsCount * tour.pricePerPerson) + (childrenCount * (tour.pricePerPerson * 0.7));
    const discount = totalPeople >= 4 ? Math.round((subtotal * 10) / 100) : 0;
    const finalPrice = subtotal - discount;

    setBookingDetails({
      title: tour.title,
      destination: tour.destination,
      adults: adultsCount,
      children: childrenCount,
      totalPrice: finalPrice,
      discount,
      days: tour.durationDays,
      isCustom: false,
      transport: tour.included.transportType
    });
  };

  // Constructor booking
  const handleCustomConstructorBook = (summary: {
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
  }) => {
    setBookingDetails({
      title: `Shaxsiy tur: ${summary.destination} (${summary.days} kunlik)`,
      destination: summary.destination,
      adults: summary.adults,
      children: summary.children,
      totalPrice: summary.totalPrice,
      discount: summary.discount,
      days: summary.days,
      isCustom: true,
      transport: summary.transport
    });
  };

  // Direct guesthouse booking
  const handleGuesthouseBooking = (name: string, location: string, price: number) => {
    setBookingDetails({
      title: `Uy-joy bron qilish: ${name}`,
      destination: location,
      adults: 2,
      children: 0,
      totalPrice: price,
      discount: 0,
      days: 1,
      isCustom: true,
      transport: 'Mustaqil yetib borish'
    });
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'tarix': return Landmark;
      case 'tog': return Mountain;
      case 'tabiat': return Trees;
      case 'ziyorat': return Compass;
      case 'oilaviy': return Users;
      default: return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans text-gray-900 selection:bg-[#0F52BA] selection:text-white">
      {/* Top sticky Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        savedToursCount={savedTourIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenOffline={() => setIsOfflineModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Search & Value Props */}
        <HeroSection
          onSearch={handleHeroSearch}
          onExploreConstructor={() => handleNavigate('constructor')}
        />

        {/* 2. Ready Tour Packages Catalog Section */}
        <section id="packages" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0F52BA] text-xs font-bold mb-2">
              <PackageCheck className="w-4 h-4" />
              <span>Tayyor "Barchasi Ichida" Paketlar</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
              O‘zbekiston bo‘ylab eng qulay yo‘nalishlar
            </h2>
            <p className="mt-1 text-xs sm:text-base text-gray-600">
              Chipta, mehmonxona, 3 mahal taom va professional gid — hammasi bitta paketda jamlangan.
            </p>
          </div>

          {/* Categories Tab Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center mb-6">
            {CATEGORIES_LIST.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as TourCategory)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0F52BA] text-white shadow-md shadow-blue-600/20 scale-102'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-gray-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar & Sorting Controls */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Shahar yoki tur nomini izlash..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:bg-white focus:ring-2 focus:ring-[#0F52BA] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs text-gray-400 font-medium">Saralash:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Tavsiya etilgan</option>
                <option value="price_asc">Arzondan qimmatga</option>
                <option value="price_desc">Qimmatdan arzonga</option>
                <option value="rating">Reyting bo‘yicha</option>
              </select>
            </div>
          </div>

          {/* Tour Cards Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  onSelectTour={(t) => setActiveTourModal(t)}
                  onBookTour={(t) => handleBookTour(t)}
                  isSaved={savedTourIds.includes(tour.id)}
                  onToggleSave={handleToggleSave}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto border border-gray-200">
              <p className="text-sm font-semibold text-gray-700">
                "{searchQuery}" so‘rovi bo‘yicha paketlar topilmadi.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs font-bold text-[#0F52BA] hover:underline"
              >
                Barcha turlarni ko‘rsatish
              </button>
            </div>
          )}
        </section>

        {/* 3. Interactive Tour Constructor */}
        <TourConstructor
          onCustomBook={handleCustomConstructorBook}
        />

        {/* 4. Verified Guesthouses Section */}
        <GuesthousesSection
          onDirectBooking={handleGuesthouseBooking}
        />

        {/* 5. Features & Value Propositions */}
        <FeaturesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-First Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={handleNavigate}
        onOpenOffline={() => setIsOfflineModalOpen(true)}
      />

      {/* Modals */}
      {activeTourModal && (
        <TourModal
          tour={activeTourModal}
          onClose={() => setActiveTourModal(null)}
          onBook={(t, a, c) => handleBookTour(t, a, c)}
        />
      )}

      {bookingDetails && (
        <BookingModal
          bookingDetails={bookingDetails}
          onClose={() => setBookingDetails(null)}
        />
      )}

      {isOfflineModalOpen && (
        <OfflineModal
          onClose={() => setIsOfflineModalOpen(false)}
        />
      )}

      {isSavedModalOpen && (
        <SavedToursModal
          savedTours={savedToursList}
          onClose={() => setIsSavedModalOpen(false)}
          onSelectTour={(t) => setActiveTourModal(t)}
          onRemoveSaved={handleToggleSave}
          onBookTour={(t) => handleBookTour(t)}
        />
      )}
    </div>
  );
};

export default App;
