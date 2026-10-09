'use client';

import React from 'react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface HighTicketBannerProps {
  onOpenBooking: () => void;
  branchName: string;
}

export const HighTicketBanner: React.FC<HighTicketBannerProps> = ({
  onOpenBooking,
  branchName,
}) => {
  return (
    <section
      aria-label="Private Client Setup"
      className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#121522] border border-white/20 shadow-xl"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Private Client Setup
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Need done-for-you implementation or custom 1-on-1 setup?
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            Skip the learning curve. We work with an exclusive cohort of 5 founders per month to build your {branchName} pipeline directly into your business with guaranteed milestones.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
              Direct 1-on-1 Pipeline Audit
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#D4F84C]" />
              Strictly 5 Clients / Month
            </span>
          </div>
        </div>

        {/* Action Call Button */}
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#D4F84C] hover:bg-[#c2e635] text-black font-extrabold text-sm sm:text-base tracking-tight shadow-md transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-black" />
            <span>Book a 15-Min Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
