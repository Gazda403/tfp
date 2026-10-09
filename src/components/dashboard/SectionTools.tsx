'use client';

import React from 'react';
import {
  Layers,
  ExternalLink,
  DollarSign,
  Zap,
} from 'lucide-react';
import { ToolItem } from '@/types/playbook';

interface SectionToolsProps {
  tools: ToolItem[];
}

export const SectionTools: React.FC<SectionToolsProps> = ({ tools }) => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#121522] border border-white/[0.12] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#D4F84C]" />
            Curated Tools &amp; Operating Stack
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
            Zero bloat. Only the tools that produce unfair speed advantages and direct cashflow returns.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-zinc-200">
            {tools.filter((t) => t.isEssential).length} Non-Negotiable Core Tools
          </span>
        </div>
      </div>

      {/* Tools Bento Grid (Flattened - no nested card anti-pattern) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="rounded-3xl p-6 bg-[#121522] border border-white/[0.12] hover:border-white/25 transition-all flex flex-col justify-between group shadow-md"
          >
            <div>
              {/* Top Row: Category & Essential Pill */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-zinc-300 bg-white/[0.06] px-2.5 py-1 rounded-full border border-white/[0.10]">
                  {tool.category}
                </span>

                {tool.isEssential ? (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    Essential
                  </span>
                ) : (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] text-zinc-300">
                    Optional Scale
                  </span>
                )}
              </div>

              {/* Tool Name & Cost */}
              <h4 className="text-lg font-bold text-white group-hover:text-[#D4F84C] transition-colors">
                {tool.name}
              </h4>
              <div className="text-xs font-mono text-zinc-300 mt-1 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
                <span>Cost: <strong className="text-white">{tool.cost}</strong></span>
              </div>

              {/* Purpose */}
              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {tool.purpose}
              </p>

              {/* Insider Advantage (Clean divider instead of nested card) */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] text-xs">
                <span className="font-bold text-[#D4F84C] block mb-0.5 uppercase tracking-wide">
                  Insider Edge:
                </span>
                <p className="leading-relaxed text-zinc-200">{tool.insiderAdvantage}</p>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="mt-5 pt-4 border-t border-white/[0.08]">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/12 text-white border border-white/15 hover:border-white/30 text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Launch Tool Stack</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300 group-hover/btn:text-white transition-colors" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
