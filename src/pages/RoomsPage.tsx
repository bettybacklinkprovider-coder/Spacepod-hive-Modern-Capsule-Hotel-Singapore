import React, { useState } from 'react';
import { CheckCircle2, Shield, Wifi, Wind, Lock, Users, Sparkles, Phone, Calendar, ArrowRight } from 'lucide-react';
import { ROOMS, BUSINESS_INFO } from '../data/spacepodData';

interface RoomsPageProps {
  onOpenBooking: (roomTypeId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'solo' | 'couples' | 'female'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'solo') return room.capacity === 1;
    if (filter === 'couples') return room.capacity === 2;
    if (filter === 'female') return room.id === 'female-pod';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 bg-purple-950 text-purple-300 text-xs font-mono font-bold rounded-full border border-purple-800">
          ACCOMMODATION & ROOM CATEGORIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Spacepod Categories & Gallery
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Discover our futuristic capsule accommodation options at 624 Serangoon Rd, Singapore. Each pod is equipped with high-density noise reduction, climate control, and digital keycard locks.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-900 border border-purple-900/40 rounded-2xl max-w-xl mx-auto overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            filter === 'all'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          All Spacepods ({ROOMS.length})
        </button>
        <button
          onClick={() => setFilter('solo')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            filter === 'solo'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Solo Travelers
        </button>
        <button
          onClick={() => setFilter('couples')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            filter === 'couples'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Couples & Pairs
        </button>
        <button
          onClick={() => setFilter('female')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
            filter === 'female'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Female Only
        </button>
      </div>

      {/* Room Cards List */}
      <div className="space-y-10">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-slate-900 border border-purple-900/40 rounded-3xl overflow-hidden shadow-2xl hover:border-purple-600/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              
              {room.popularTag && (
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {room.popularTag}
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {room.name}
                  </h2>
                  <div className="text-xl font-extrabold font-mono text-purple-400">
                    S$ {room.priceSGD} <span className="text-xs font-normal text-slate-400">/ night</span>
                  </div>
                </div>

                <p className="text-sm text-purple-200/90 font-medium">
                  {room.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {room.description}
                </p>

                {/* Spec badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-lg border border-purple-900/30 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>Max {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}</span>
                  </span>
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-lg border border-purple-900/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Dimensions: {room.size}</span>
                  </span>
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-lg border border-purple-900/30 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-purple-400" />
                    <span>Keycard Secured</span>
                  </span>
                </div>

                {/* Features checklist */}
                <div className="pt-2">
                  <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    Key Features Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="pt-6 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Direct booking includes free luggage storage & 1Gbps Wi-Fi.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="p-3 bg-slate-950 hover:bg-slate-800 text-purple-300 rounded-xl border border-purple-900/40 transition-colors"
                    title="Call Front Desk"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-950 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve {room.name}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
