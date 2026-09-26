import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AiConciergeModal } from './components/AiConciergeModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/spacepodData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms' | 'amenities' | 'contact'>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState(false);

  const handleOpenBooking = (roomTypeId?: string) => {
    setSelectedRoomId(roomTypeId);
    setIsBookingModalOpen(true);
  };

  const handleNavigate = (page: 'home' | 'rooms' | 'amenities' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'rooms' && (
          <RoomsPage onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'amenities' && (
          <AmenitiesPage onOpenBooking={handleOpenBooking} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        selectedRoomId={selectedRoomId}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <AiConciergeModal
        isOpen={isAiConciergeOpen}
        onClose={() => setIsAiConciergeOpen(false)}
      />

      {/* Floating Bottom Quick Contact Dock (Mobile & Desktop) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-950/80 hover:scale-110 transition-all duration-200"
          title="WhatsApp +65 8168 4337"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-11 h-11 bg-slate-900 hover:bg-purple-950 text-purple-300 border border-purple-800/50 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200"
          title="Call +65 8168 4337"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-full shadow-2xl shadow-purple-950 border border-purple-400/30 hover:scale-105 transition-all duration-200"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Stay</span>
        </button>
      </div>

    </div>
  );
}
