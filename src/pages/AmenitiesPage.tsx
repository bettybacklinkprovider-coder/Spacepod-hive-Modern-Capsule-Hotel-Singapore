import React from 'react';
import {
  Wifi,
  Wind,
  ShowerHead,
  Coffee,
  ShieldCheck,
  Lock,
  Shirt,
  Luggage,
  Clock,
  Sparkles,
  MapPin,
  Check,
  ArrowRight,
} from 'lucide-react';
import { AMENITIES, BUSINESS_INFO } from '../data/spacepodData';

interface AmenitiesPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: 'home' | 'rooms' | 'amenities' | 'contact') => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 bg-purple-950 text-purple-300 text-xs font-mono font-bold rounded-full border border-purple-800">
          GUEST FACILITIES & SERVICES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Amenities & Services at Spacepod@hive
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Designed for contemporary travelers, digital nomads, and vacationers. Every guest enjoys high-speed connectivity, immaculate shared rain showers, and 24/7 security at 624 Serangoon Rd.
        </p>
      </div>

      {/* Featured Showcase Section 1: Lounge & Pantry */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 border border-purple-900/40 p-8 sm:p-12 rounded-3xl">
        <div className="space-y-6">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
            Social & Co-Working Hub
          </span>
          <h2 className="text-3xl font-bold font-heading text-white">
            Communal Lounge & Pantry
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Unwind after exploring Singapore or get some remote work done in our stylish social lounge. Features ergonomically designed workstations with accessible power outlets, complimentary artisan tea and coffee, hot drinking water, microwave, and refrigerator.
          </p>

          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Complimentary Coffee, Tea & Purified Water 24/7</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>High-speed Wi-Fi workstation desk & charging sockets</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Fridge, microwave, and pantry utensils for quick meals</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-purple-800/40 shadow-2xl aspect-[4/3]">
          <img
            src="/assets/images/amenity_lounge_pantry_1790404526983.jpg"
            alt="Spacepod@hive modern communal lounge"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Featured Showcase Section 2: Rain Shower Facilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-slate-900 border border-purple-900/40 p-8 sm:p-12 rounded-3xl">
        <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-purple-800/40 shadow-2xl aspect-[4/3]">
          <img
            src="/assets/images/amenity_shower_bathroom_1790405197262.jpg"
            alt="Spacepod@hive pristine rain shower facilities"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
            Spotless Hygiene Standards
          </span>
          <h2 className="text-3xl font-bold font-heading text-white">
            Immaculate Rain Shower Restrooms
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our bathrooms are disinfected multiple times every day by dedicated housekeeping staff. Enjoy powerful hot rain showers, organic body wash, complimentary soft towels, and clean vanity mirrors.
          </p>

          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>24/7 Hot & Cold Rain Shower Stations</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Complimentary organic shampoo, body wash & fresh towels</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-purple-400" />
              <span>Dedicated vanity stations with Dyson hair dryers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Complete Amenities Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Full Facility Directory
          </h2>
          <p className="text-xs text-slate-400">
            Everything provided for your convenience during your stay at Spacepod@hive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-slate-900 border border-purple-900/30 p-6 rounded-2xl hover:border-purple-600/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-700/50 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-6 h-6" />
                </div>

                <div className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                  {amenity.category}
                </div>

                <h3 className="text-lg font-bold font-heading text-white">
                  {amenity.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-purple-300/80 font-medium border-t border-purple-900/20">
                ✓ Standard for all guests
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hygiene & Security Callout */}
      <div className="bg-gradient-to-br from-purple-950/80 via-slate-900 to-indigo-950 border border-purple-800/40 p-8 sm:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl font-extrabold font-heading text-purple-400">Multi-Point</div>
          <div className="text-sm font-semibold text-white">Daily Sanitization</div>
          <p className="text-xs text-slate-400">Restrooms and common spaces are disinfected multiple times daily.</p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-extrabold font-heading text-purple-400">24 / 7</div>
          <div className="text-sm font-semibold text-white">Encrypted Keycard Access</div>
          <p className="text-xs text-slate-400">Main door, floor corridors, and individual pods require RFID keycards.</p>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-extrabold font-heading text-purple-400">Free</div>
          <div className="text-sm font-semibold text-white">Luggage Storage</div>
          <p className="text-xs text-slate-400">Store your bags securely before check-in or after check-out at no extra cost.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Ready to Experience Spacepod Hospitality?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
          >
            Book Your Spacepod Now
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm rounded-xl border border-purple-800/50 transition-colors"
          >
            Contact Front Desk (+65 8168 4337)
          </button>
        </div>
      </div>

    </div>
  );
};
