import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Train,
  Plane,
  Building,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/spacepodData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 bg-purple-950 text-purple-300 text-xs font-mono font-bold rounded-full border border-purple-800">
          LOCATION & RECEPTION SUPPORT
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
          Contact Spacepod@hive
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have questions regarding check-in times, group bookings, or transit from Changi Airport? Reach out to our reception team directly or send us a message below.
        </p>
      </div>

      {/* Main Grid: Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Business Details & Transit */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-slate-900 border border-purple-900/40 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold font-heading text-white">
              Property Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-950 border border-purple-800 rounded-xl text-purple-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block">Address:</strong>
                  <span className="text-slate-300">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-950 border border-purple-800 rounded-xl text-purple-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block">Direct Phone & WhatsApp:</strong>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-purple-300 font-mono font-bold hover:underline"
                  >
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-950 border border-purple-800 rounded-xl text-purple-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block">Email Address:</strong>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-slate-300 hover:text-purple-300"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-950 border border-purple-800 rounded-xl text-purple-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block">Operating Hours:</strong>
                  <span className="text-slate-300 block">Check-in: {BUSINESS_INFO.checkInTime}</span>
                  <span className="text-slate-300 block">Check-out: {BUSINESS_INFO.checkOutTime}</span>
                  <span className="text-xs text-purple-300 block mt-1">
                    24/7 RFID Keycard Entry for Checked-In Guests
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-purple-900/30 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp (+65 8168 4337)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Book Your Stay
              </button>
            </div>

          </div>

          {/* Transit Directions Card */}
          <div className="bg-slate-900 border border-purple-900/40 p-6 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
              <Train className="w-5 h-5 text-purple-400" />
              <span>Getting Here via Public Transport</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-purple-900/20 space-y-1">
                <strong className="text-white block text-sm">From Farrer Park MRT (NE8):</strong>
                <p className="text-slate-400">Take Exit G or Exit A. Walk north along Serangoon Road for 5 minutes. Spacepod@hive is located at #624.</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-purple-900/20 space-y-1">
                <strong className="text-white block text-sm">From Changi Airport:</strong>
                <p className="text-slate-400">Take the MRT to Outram Park Station, transfer to the North-East Line (Purple Line) towards Punggol, and alight at Farrer Park Station (approx 35 mins total).</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-purple-900/40 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold font-heading text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below and our guest relations team will respond within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-purple-900/40 border border-purple-500 rounded-full flex items-center justify-center mx-auto text-purple-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you <strong className="text-purple-300">{formData.name}</strong>. We have received your inquiry regarding <strong className="text-white">"{formData.subject}"</strong> and will get back to you shortly at <strong className="text-slate-200">{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Tan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Phone Number / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +65 8123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Room Booking Assistance">Room Booking Assistance</option>
                      <option value="Group Stay (5+ Guests)">Group Stay (5+ Guests)</option>
                      <option value="Extended Stay (14+ Days)">Extended Stay (14+ Days)</option>
                      <option value="Luggage & Check-in Request">Luggage & Check-in Request</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your arrival date, number of guests, or special questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-purple-900/40 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Reception</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Google Maps Embed Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span>Interactive Map & Location</span>
          </h2>
          <a
            href="https://maps.google.com/?q=624+Serangoon+Rd,+Singapore+218223"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-purple-300 hover:text-white inline-flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden border border-purple-900/40 shadow-2xl bg-slate-950">
          <iframe
            title="Spacepod@hive Location Map"
            src={BUSINESS_INFO.googleMapsEmbed}
            className="w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  );
};
