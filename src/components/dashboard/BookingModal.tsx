'use client';

import React, { useState } from 'react';
import {
  X,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  branchName: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  branchName,
}) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentRevenue, setCurrentRevenue] = useState('$5k - $15k/mo');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const timeslots = [
    'Tomorrow, 11:30 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 10:00 AM EST',
    'Thursday, 4:15 PM EST',
    'Friday, 1:00 PM EST',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#11131E] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-zinc-300 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 text-[#34D399] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white tracking-tight">
              Strategy Session Confirmed!
            </h3>

            <p className="text-sm text-zinc-200 max-w-md mx-auto leading-relaxed">
              We have reserved your slot for <strong>{selectedDate}</strong>. A calendar invite and prep dossier for {branchName} have been sent to <strong>{email || 'your email'}</strong>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-3 rounded-2xl bg-[#D4F84C] text-black font-bold text-sm hover:bg-[#c2e635] transition-all shadow-md"
              >
                Return to Playbook Dashboard
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/35 text-[#D4F84C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              15-Min Private Strategy Audit
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Book Done-For-You Architecture
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              Custom 1-on-1 implementation for {branchName}. Only 2 client slots available this week.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Slot Picker */}
              <div>
                <label className="block text-xs font-bold text-zinc-200 uppercase tracking-wider mb-2">
                  Select Priority Call Window:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeslots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                        selectedDate === slot
                          ? 'bg-[#D4F84C]/15 border-[#D4F84C]/50 text-[#D4F84C] font-bold'
                          : 'bg-white/[0.04] border-white/[0.10] text-zinc-200 hover:bg-white/[0.08]'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 inline mr-1.5 opacity-80" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#D4F84C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Executive Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#D4F84C] transition-colors"
                  />
                </div>
              </div>

              {/* Qualification revenue tier */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Current Monthly Revenue Tier
                </label>
                <select
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090A0F] border border-white/15 text-white text-xs focus:outline-none focus:border-[#D4F84C]"
                >
                  <option value="Under $5k/mo">Under $5k/mo (Just Starting)</option>
                  <option value="$5k - $15k/mo">$5k - $15k/mo (Validation Stage)</option>
                  <option value="$15k - $50k/mo">$15k - $50k/mo (Scaling Bottleneck)</option>
                  <option value="$50k+/mo">$50k+/mo (Enterprise Infrastructure)</option>
                </select>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#D4F84C] hover:bg-[#c2e635] text-black font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>Confirm 15-Minute Strategy Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-300 mt-2">
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>Zero sales pressure. Technical roadmap review only.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
