import React, { useState } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spacepodData';

interface NavbarProps {
  currentPage: 'home' | 'rooms' | 'amenities' | 'contact';
  onNavigate: (page: 'home' | 'rooms' | 'amenities' | 'contact') => void;
  onOpenBooking: (roomTypeId?: string) => void;
  onOpenAiConcierge: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenAiConcierge,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: 'home' | 'rooms' | 'amenities' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities & Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: 'home' | 'rooms' | 'amenities' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-purple-900/30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Title (Single text element wordmark) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform duration-200">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Spacepod<span className="text-purple-400">@hive</span>
            </span>
            <span className="text-[11px] text-purple-300/80 tracking-widest font-mono uppercase -mt-1 hidden sm:inline">
              Singapore
            </span>
          </div>
        </button>

        {/* Zone 2: 4 Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-purple-900/30">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-purple-950/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AI Concierge Button */}
          <button
            onClick={onOpenAiConcierge}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-700/50 rounded-lg transition-colors shadow-sm"
            title="Ask AI Concierge about Singapore stays & directions"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>AI Concierge</span>
          </button>

          {/* Direct Phone Link */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-purple-300 bg-slate-900 hover:bg-purple-950/40 border border-purple-900/40 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono">{BUSINESS_INFO.formattedPhone}</span>
          </a>

          {/* Book Now Primary Button */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-purple-900/50 hover:shadow-purple-800/60 transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900 border border-purple-900/40 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-purple-900/40 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-900/50 text-white font-semibold border-l-4 border-purple-500'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-purple-900/30 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConcierge();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-purple-200 bg-purple-950/60 border border-purple-700/50 rounded-xl"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Singapore AI Travel Concierge</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-purple-900/40 rounded-xl"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>Call +65 8168 4337</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
