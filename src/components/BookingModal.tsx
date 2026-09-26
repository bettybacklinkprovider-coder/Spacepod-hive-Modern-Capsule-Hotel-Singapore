import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { ROOMS, BUSINESS_INFO } from '../data/spacepodData';

interface BookingModalProps {
  isOpen: boolean;
  selectedRoomId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  selectedRoomId,
  onClose,
}) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState<string>(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(0, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const totalCostSGD = currentRoom.priceSGD * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const randomRef = 'SPH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-purple-900/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-6 border-b border-purple-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-600/30 border border-purple-500/30 rounded-xl text-purple-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                {isSubmitted ? 'Booking Confirmed!' : 'Book Your Stay at Spacepod@hive'}
              </h3>
              <p className="text-xs text-purple-300">
                624 Serangoon Rd, Singapore 218223 · Direct Phone: {BUSINESS_INFO.formattedPhone}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-purple-900/40 border border-purple-500 rounded-full flex items-center justify-center mx-auto text-purple-400 shadow-lg shadow-purple-900/50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-purple-950 text-purple-300 text-xs font-mono font-bold rounded-full border border-purple-800">
                CONFIRMATION REF: {bookingRef}
              </span>
              <h4 className="text-2xl font-bold font-heading text-white">
                Thank you, {guestName}!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your reservation request for <strong className="text-purple-300">{currentRoom.name}</strong> ({nights} {nights === 1 ? 'night' : 'nights'}) has been received and confirmed.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-purple-900/30 p-5 rounded-xl text-left space-y-3 max-w-md mx-auto text-xs text-slate-300">
              <div className="flex justify-between border-b border-purple-900/20 pb-2">
                <span className="text-slate-400">Pod Type:</span>
                <span className="font-semibold text-white">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-purple-900/20 pb-2">
                <span className="text-slate-400">Dates:</span>
                <span className="font-semibold text-white">{checkIn} to {checkOut} ({nights} nights)</span>
              </div>
              <div className="flex justify-between border-b border-purple-900/20 pb-2">
                <span className="text-slate-400">Guests:</span>
                <span className="font-semibold text-white">{guests} Guest(s)</span>
              </div>
              <div className="flex justify-between pt-1 text-sm">
                <span className="font-bold text-slate-200">Total Price:</span>
                <span className="font-bold text-purple-400 font-mono">S$ {totalCostSGD} SGD</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              A copy of this confirmation has been sent to <strong className="text-slate-200">{guestEmail}</strong>. Need instant updates or airport directions? Call or WhatsApp us directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-xl border border-purple-900/40 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Call Front Desk ({BUSINESS_INFO.formattedPhone})</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <span>WhatsApp Instant Confirm</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Pod Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Select Spacepod Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ROOMS.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setRoomId(room.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                      roomId === room.id
                        ? 'bg-purple-950/80 border-purple-500 ring-1 ring-purple-500 text-white'
                        : 'bg-slate-950/50 border-purple-900/30 text-slate-300 hover:border-purple-800'
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white truncate">
                          {room.name}
                        </span>
                        <span className="font-mono text-xs text-purple-400 font-bold shrink-0">
                          S${room.priceSGD}/n
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {room.capacity} Guest · {room.size}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Check-in Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Check-out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests (Double Pod)</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="space-y-3 pt-2 border-t border-purple-900/20">
              <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Guest Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <User className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-slate-950 border border-purple-900/40 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-purple-900/40 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <Phone className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="Phone Number / WhatsApp *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-purple-900/40 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Special Requests (e.g. Lower pod, late arrival)"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Total Breakdown & Action */}
            <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Total Stay ({nights} nights):</span>
                  <span className="font-heading font-extrabold text-2xl text-purple-400 font-mono">
                    S$ {totalCostSGD} <span className="text-xs font-normal text-slate-400">SGD</span>
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  No advance fee required · Free cancellation up to 24h before check-in
                </p>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
