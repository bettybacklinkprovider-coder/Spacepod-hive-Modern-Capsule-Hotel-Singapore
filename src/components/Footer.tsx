import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/spacepodData';

interface FooterProps {
  onNavigate: (page: 'home' | 'rooms' | 'amenities' | 'contact') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-purple-900/30 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle purple background glow accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-950">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-purple-700 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Spacepod<span className="text-purple-400">@hive</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Modern, comfortable, and affordable capsule accommodation in Singapore. Experience Japanese-inspired spacepod living with luxury amenities, 24/7 keycard access, and high-speed Wi-Fi.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-purple-300 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rooms')}
                  className="hover:text-purple-300 transition-colors"
                >
                  Rooms & Spacepod Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('amenities')}
                  className="hover:text-purple-300 transition-colors"
                >
                  Amenities & Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-purple-300 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              Contact Spacepod
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-purple-300 transition-colors font-mono"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-purple-300 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Details & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
              Stay Details
            </h4>
            <div className="space-y-3 text-sm bg-purple-950/20 border border-purple-900/30 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Check-In Time</span>
                  <span className="font-semibold text-slate-200">{BUSINESS_INFO.checkInTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-purple-900/20">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400">Check-Out Time</span>
                  <span className="font-semibold text-slate-200">{BUSINESS_INFO.checkOutTime}</span>
                </div>
              </div>
              <p className="text-xs text-purple-300/80 pt-1">
                24/7 Keycard Entry & Luggage Storage Available
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Spacepod@hive. All rights reserved. 624 Serangoon Rd, Singapore 218223.</p>
          <div className="flex items-center gap-6">
            <span>Singapore Registration #20268168H</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Directions & Map
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
