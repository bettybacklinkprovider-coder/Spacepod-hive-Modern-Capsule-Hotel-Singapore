import React from 'react';
import {
  Phone,
  Calendar,
  MapPin,
  Sparkles,
  Wifi,
  Wind,
  ShieldCheck,
  Coffee,
  ShowerHead,
  Shirt,
  Luggage,
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
  Zap,
  Lock,
} from 'lucide-react';
import { BUSINESS_INFO, ROOMS, AMENITIES, WHY_STAY_POINTS, REVIEWS } from '../data/spacepodData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'rooms' | 'amenities' | 'contact') => void;
  onOpenBooking: (roomTypeId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-purple-900/30 pt-8 pb-16">
        {/* Hero Background Image with Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_spacepod_hive_1790404464923.jpg"
            alt="Spacepod@hive modern capsule accommodation Singapore"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-purple-950/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-950/80 border border-purple-500/40 rounded-full text-xs font-semibold text-purple-200 shadow-xl backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span>624 Serangoon Rd, Singapore 218223 · Near Farrer Park MRT</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">Spacepod@hive</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience futuristic Japanese-style capsule comfort in the heart of Singapore. Modern, immaculate sleeping pods with high-speed 1Gbps Wi-Fi, air conditioning, and 24/7 keycard security.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-base rounded-2xl shadow-xl shadow-purple-950/80 hover:shadow-purple-800/80 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base rounded-2xl border border-purple-800/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct Phone Number Banner */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
            <span>Direct Reservations & Inquiry Line:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="font-mono font-bold text-purple-300 hover:text-purple-200 underline underline-offset-4 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: About Spacepod@hive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900/50 border border-purple-900/30 p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Boutique Capsule Accommodation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
              A Modern, Clean & Affordable Sanctuary in Singapore
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong>Spacepod@hive</strong>, we redefine hostel accommodation by combining high-tech personal privacy with warm, boutique hospitality. Located along vibrant Serangoon Road, our property gives you instant access to Singapore’s top cultural landmarks, shopping districts, and MRT transport links.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950/80 border border-purple-900/40 p-4 rounded-2xl">
                <div className="text-2xl font-bold font-heading text-purple-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Private Ergonomic Pods</div>
              </div>
              <div className="bg-slate-950/80 border border-purple-900/40 p-4 rounded-2xl">
                <div className="text-2xl font-bold font-heading text-purple-400">5 Mins</div>
                <div className="text-xs text-slate-400 mt-0.5">Walk to Farrer Park MRT</div>
              </div>
              <div className="bg-slate-950/80 border border-purple-900/40 p-4 rounded-2xl">
                <div className="text-2xl font-bold font-heading text-purple-400">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Keycard Security Access</div>
              </div>
              <div className="bg-slate-950/80 border border-purple-900/40 p-4 rounded-2xl">
                <div className="text-2xl font-bold font-heading text-purple-400">1 Gbps</div>
                <div className="text-xs text-slate-400 mt-0.5">Ultra Fast Wi-Fi</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('amenities')}
                className="text-xs font-bold text-purple-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Learn about our amenities & facilities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-purple-800/40 shadow-2xl">
              <img
                src="/assets/images/amenity_lounge_pantry_1790404526983.jpg"
                alt="Spacepod@hive modern communal lounge and co-working area"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-950/90 border border-purple-500/40 p-4 rounded-2xl shadow-xl backdrop-blur-md hidden sm:block max-w-xs">
              <p className="text-xs font-semibold text-white">"Spotless cleanliness and superb location!"</p>
              <p className="text-[11px] text-purple-300 mt-1">― Verified Guest Review (5.0 ★)</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Accommodation / Rooms Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-purple-900/30 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
              Featured Spacepods
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1">
              Choose Your Pod Accommodation
            </h2>
          </div>

          <button
            onClick={() => onNavigate('rooms')}
            className="px-5 py-2.5 bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-700/50 rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-slate-900 border border-purple-900/40 rounded-2xl overflow-hidden shadow-xl hover:border-purple-600/60 transition-all duration-200 group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {room.popularTag && (
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {room.popularTag}
                  </div>
                )}

                <div className="absolute bottom-3 right-3 bg-slate-950/90 text-purple-300 font-mono text-sm font-extrabold px-3 py-1 rounded-xl border border-purple-800">
                  S$ {room.priceSGD} <span className="text-[10px] text-slate-400 font-sans">/ night</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {room.tagline}
                  </p>

                  <ul className="space-y-1.5 mt-4 text-xs text-slate-300">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Capacity: {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Book This Pod
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Amenities & Services */}
      <section className="bg-slate-950 border-y border-purple-900/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
              Hospitality Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Amenities & Services Designed for Comfort
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need for a restful and seamless stay in Singapore, from high-speed connectivity to immaculate rain showers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.slice(0, 8).map((amenity) => (
              <div
                key={amenity.id}
                className="bg-slate-900 border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-600/60 transition-all duration-300 flex flex-col group shadow-xl"
              >
                {amenity.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-purple-950/90 border border-purple-500/50 flex items-center justify-center shadow-lg backdrop-blur-md">
                      {amenity.icon === 'Wifi' && <Wifi className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'Wind' && <Wind className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'ShowerHead' && <ShowerHead className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'Coffee' && <Coffee className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'ShieldCheck' && <ShieldCheck className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'Lock' && <Lock className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'Shirt' && <Shirt className="w-4 h-4 text-purple-300" />}
                      {amenity.icon === 'Luggage' && <Luggage className="w-4 h-4 text-purple-300" />}
                    </div>
                  </div>
                )}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-1">
                      {amenity.category}
                    </span>
                    <h4 className="text-base font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {amenity.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('amenities')}
              className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Explore All Amenities & Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: Why Stay With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
            The Spacepod Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Why Stay With Us at Spacepod@hive?
          </h2>
          <p className="text-slate-400 text-sm">
            Top reasons guests from around the world choose Spacepod@hive for their Singapore trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_STAY_POINTS.map((pt, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-purple-900/30 rounded-3xl overflow-hidden hover:border-purple-600/60 transition-all duration-300 group flex flex-col sm:flex-row shadow-2xl"
            >
              {/* Image thumbnail container */}
              <div className="sm:w-2/5 relative aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden bg-slate-950">
                <img
                  src={pt.image}
                  alt={pt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-purple-950/90 border border-purple-500/50 flex items-center justify-center text-purple-300 font-bold font-mono text-sm shadow-lg backdrop-blur-md">
                  0{index + 1}
                </div>
              </div>

              {/* Text content container */}
              <div className="sm:w-3/5 p-6 sm:p-7 space-y-3 flex flex-col justify-center">
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: Location & Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-purple-950/60 to-slate-900 border border-purple-900/40 p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold text-purple-400 tracking-wider uppercase">
              Location & Contact
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Conveniently Located on Serangoon Road
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Full Address:</strong>
                  <span>{BUSINESS_INFO.address}</span>
                  <span className="block text-xs text-purple-300 mt-0.5">{BUSINESS_INFO.mrt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <strong className="text-white block">Phone / Reservations:</strong>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono text-purple-300 font-bold hover:underline">
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <strong className="text-white block">Front Desk & Luggage Hours:</strong>
                  <span>24/7 Guest Support & Self Check-in Options</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
              >
                Book Your Stay Now
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-purple-200 font-bold text-xs rounded-xl border border-purple-800/50 transition-colors"
              >
                Get Directions & Map
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-purple-800/40 shadow-2xl aspect-[16/10] bg-slate-950">
            <iframe
              title="Spacepod@hive Google Maps location"
              src={BUSINESS_INFO.googleMapsEmbed}
              className="w-full h-full border-0 filter grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </div>
  );
};
