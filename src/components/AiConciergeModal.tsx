import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, MapPin, Compass, Coffee, Train } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { BUSINESS_INFO } from '../data/spacepodData';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hello! I'm your Singapore Spacepod Concierge. Ask me anything about staying at **Spacepod@hive** (624 Serangoon Rd), local food around Little India, MRT directions to Changi Airport or Marina Bay Sands, or nearby attractions!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'How do I reach Spacepod@hive from Changi Airport?',
    'What are the best food spots near 624 Serangoon Rd?',
    'How far is Mustafa Centre and Farrer Park MRT?',
    'What amenities are provided inside the pods?',
  ];

  const handleSend = async (userQuery?: string) => {
    const textToSend = userQuery || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    if (!userQuery) setInput('');
    setLoading(true);

    try {
      // Try using Gemini API if key is available
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are the friendly, helpful AI Concierge for Spacepod@hive, a modern capsule hostel located at 624 Serangoon Rd, Singapore 218223 (Phone: +6581684337).
Close MRT: Farrer Park MRT (Exit G/A, 5 mins walk) & Boon Keng MRT (6 mins walk).
Nearby: Mustafa Centre (24h shopping), City Square Mall, Little India Arcade, Tekka Centre food court.
Pods feature high speed Wi-Fi, memory foam bed, air conditioning, private lockers, spotless shared rain showers.
Check-in: 2PM, Check-out: 11AM.

Answer concisely, warmly, and helpfully in 2-4 sentences:
User: ${textToSend}`,
        });

        const reply = response.text || 'Spacepod@hive at 624 Serangoon Rd is located 5 minutes from Farrer Park MRT. Call +65 8168 4337 for direct support!';
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } else {
        // Fallback intelligent responder based on local context
        let fallbackReply = '';
        const lower = textToSend.toLowerCase();

        if (lower.includes('airport') || lower.includes('changi') || lower.includes('mrt') || lower.includes('direction')) {
          fallbackReply = `To reach Spacepod@hive from Changi Airport: Take the East-West MRT Line to EW2 Tanah Merah, switch towards Tuas Link, stop at EW16 Outram Park, then switch to the North East Line (Purple) to **NE8 Farrer Park MRT** (Exit G or A). We are just a 5-minute walk down Serangoon Road at #624!`;
        } else if (lower.includes('food') || lower.includes('eat') || lower.includes('restaurant') || lower.includes('mustafa')) {
          fallbackReply = `You are in a foodie's paradise! Within a 3 to 7-minute walk from 624 Serangoon Rd, you have **Tekka Centre** (amazing biryani & roti prata), **Mustafa Centre 24h** eateries, **Muthu's Curry**, and City Square Mall's wide variety of Asian and Western dining.`;
        } else if (lower.includes('check') || lower.includes('time') || lower.includes('luggage')) {
          fallbackReply = `Standard Check-In is from **14:00 (2:00 PM)** and Check-Out is **11:00 AM**. If you arrive early or fly out late, feel free to use our **free secure luggage storage** at Spacepod@hive!`;
        } else {
          fallbackReply = `Spacepod@hive is located at **624 Serangoon Rd, Singapore 218223**. We offer futuristic sleeping capsules with fast 1Gbps Wi-Fi, air conditioning, digital lockers, and rain showers. Feel free to call us at **+65 8168 4337** or book directly on our website!`;
        }

        setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'assistant', content: fallbackReply }]);
        }, 500);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Spacepod@hive is located at 624 Serangoon Rd, Singapore. For urgent inquiries or bookings, please call or WhatsApp us directly at +65 8168 4337!`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-purple-900/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-4 border-b border-purple-900/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-600/30 border border-purple-500/40 rounded-xl text-purple-300">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
                Singapore Spacepod Concierge
              </h3>
              <p className="text-[11px] text-purple-300">
                Instant answers for 624 Serangoon Rd & Singapore travel
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts */}
        <div className="bg-slate-950/60 p-2.5 border-b border-purple-900/20 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 rounded-full text-[11px] text-purple-200 whitespace-nowrap shrink-0 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-purple-800 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                  <Bot className="w-4 h-4 text-purple-200" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white rounded-tr-none shadow-md'
                    : 'bg-slate-950 border border-purple-900/30 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-purple-400 p-2">
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Checking Spacepod guide...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-slate-950 border-t border-purple-900/30 flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            placeholder="Ask about location, food, MRT, or pod features..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-900 border border-purple-900/40 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-xl transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
