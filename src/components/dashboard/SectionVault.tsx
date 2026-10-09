'use client';

import React, { useState } from 'react';
import {
  Copy,
  Check,
  KeyRound,
  TrendingUp,
  Tag,
} from 'lucide-react';
import { VaultItem } from '@/types/playbook';

interface SectionVaultProps {
  vaultItems: VaultItem[];
}

export const SectionVault: React.FC<SectionVaultProps> = ({ vaultItems }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(vaultItems.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === 'All'
      ? vaultItems
      : vaultItems.filter((item) => item.category === selectedCategory);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  return (
    <div className="space-y-6">
      {/* Vault Header & Category Filters */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[#121522] border border-white/[0.12] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-[#D4F84C]" />
            The High-Converting Asset Vault
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
            1-Click copy cold outreach scripts, closing frameworks, and elite LLM system prompts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4F84C] text-black font-bold'
                  : 'bg-white/[0.06] border border-white/[0.12] text-zinc-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Script Blocks Grid */}
      <div className="grid grid-cols-1 gap-5">
        {filteredItems.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <article
              key={item.id}
              className="rounded-3xl bg-[#11131E] border border-white/[0.12] hover:border-white/25 transition-all overflow-hidden shadow-lg"
            >
              {/* Card Top Bar */}
              <div className="p-5 sm:p-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] bg-white/[0.02]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-zinc-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399] flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.conversionMetric}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 max-w-2xl font-normal">
                    {item.description}
                  </p>
                </div>

                {/* 1-Click Copy Action Button */}
                <button
                  onClick={() => handleCopy(item.id, item.content)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                    isCopied
                      ? 'bg-[#34D399] text-black shadow-md'
                      : 'bg-[#D4F84C] text-black hover:bg-[#c2e635] shadow-md'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Script</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code/Text Box */}
              <div className="p-5 sm:p-6 bg-[#08090E] relative font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto leading-relaxed border-t border-black/50">
                <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-zinc-200 selection:bg-[#D4F84C] selection:text-black">
                  {item.content}
                </pre>

                {/* Tag list */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5 font-sans">
                  {item.tags.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs text-zinc-300 bg-white/[0.06] px-2.5 py-0.5 rounded-md flex items-center gap-1 font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
