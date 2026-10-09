'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  ArrowRight,
} from 'lucide-react';
import { PlaybookBranch } from '@/types/playbook';
import { SectionTab } from './TabNavigation';

interface SearchResult {
  branchId: string;
  branchName: string;
  tab: SectionTab;
  title: string;
  subtitle: string;
  categoryBadge: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  branches: PlaybookBranch[];
  onSelectResult: (branchId: string, tab: SectionTab) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  branches,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results: SearchResult[] = [];
  const q = query.toLowerCase().trim();

  if (q.length > 0) {
    // ── Onboarding Module 00: The Winner's Mindset
    const mindsetTerms = ['mindset', 'winner', 'operator', 'shift', 'asymmetric', 'leverage', 'speed', 'perfection', '48-hour', 'contract', '90-day', 'foundation'];
    if (mindsetTerms.some((t) => t.includes(q) || q.includes(t))) {
      results.push({
        branchId: 'onboarding-mindset',
        branchName: 'Phase 0: Foundation',
        tab: 'playbook17',
        title: '00 The Winner\'s Mindset',
        subtitle: 'The Operator Shift, Asymmetric Leverage, Speed over Perfection & 90-Day Contract',
        categoryBadge: 'Phase 0 // Foundation',
      });
    }

    // ── Onboarding Module 00.5: Why These 5 Vehicles?
    const vehiclesTerms = ['vehicle', 'why', 'filter', 'deletion', 'matrix', 'comparison', 'strategy', 'amazon fba', 'affiliate', 'agency'];
    if (vehiclesTerms.some((t) => t.includes(q) || q.includes(t))) {
      results.push({
        branchId: 'onboarding-vehicles',
        branchName: 'Phase 0: Foundation',
        tab: 'playbook17',
        title: '00.5 Why These 5 Vehicles?',
        subtitle: 'The Deletion Filter (Why 95% of models fail) & 5-Engine Comparison Matrix',
        categoryBadge: 'Phase 0 // Strategy',
      });
    }

    branches.forEach((b) => {
      if (b.name.toLowerCase().includes(q) || b.subheader.toLowerCase().includes(q)) {
        results.push({
          branchId: b.id,
          branchName: b.name,
          tab: 'playbook17',
          title: b.name,
          subtitle: b.subheader,
          categoryBadge: 'Branch Engine',
        });
      }

      b.lessons.forEach((l) => {
        if (
          l.title.toLowerCase().includes(q) ||
          l.summary.toLowerCase().includes(q) ||
          l.tasks.some((t) => t.text.toLowerCase().includes(q))
        ) {
          results.push({
            branchId: b.id,
            branchName: b.name,
            tab: 'playbook17',
            title: `Lesson 0${l.number}: ${l.title}`,
            subtitle: l.summary,
            categoryBadge: '17-Page Playbook',
          });
        }
      });

      b.vault.forEach((v) => {
        if (
          v.title.toLowerCase().includes(q) ||
          v.content.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q))
        ) {
          results.push({
            branchId: b.id,
            branchName: b.name,
            tab: 'vault',
            title: v.title,
            subtitle: v.description,
            categoryBadge: `Vault / ${v.category}`,
          });
        }
      });

      b.tools.forEach((t) => {
        if (
          t.name.toLowerCase().includes(q) ||
          t.purpose.toLowerCase().includes(q) ||
          t.insiderAdvantage.toLowerCase().includes(q)
        ) {
          results.push({
            branchId: b.id,
            branchName: b.name,
            tab: 'tools',
            title: t.name,
            subtitle: t.purpose,
            categoryBadge: `Tool Stack (${t.cost})`,
          });
        }
      });
    });
  }

  const handleSelect = (r: SearchResult) => {
    onSelectResult(r.branchId, r.tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#11131E] border border-white/20 p-4 sm:p-6 shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/[0.06] border border-white/15">
          <Search className="w-5 h-5 text-zinc-300" />
          <input
            autoFocus
            type="text"
            placeholder="Type to search lessons, cold scripts, tools, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none font-medium"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-white/10 text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="px-2 py-0.5 rounded text-xs font-mono bg-black/60 text-zinc-300 border border-white/15">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-2 pr-1">
          {query.trim().length === 0 ? (
            <div className="p-8 text-center text-zinc-300 text-xs">
              <p className="font-semibold text-white">Quick Search Suggestions:</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Winner Mindset', '5 Vehicles', 'Cold Email', 'Loom Audit', 'Make.com', 'Shopify', 'TradingView'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/15 text-xs font-medium"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-zinc-300 text-xs">
              No matching assets or lessons found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.slice(0, 15).map((r, i) => (
              <button
                key={i}
                onClick={() => handleSelect(r)}
                className="w-full text-left p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/30 text-[#D4F84C]">
                      {r.categoryBadge}
                    </span>
                    <span className="text-xs text-zinc-300 truncate font-medium">
                      {r.branchName}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#D4F84C] transition-colors truncate">
                    {r.title}
                  </h4>
                  <p className="text-xs text-zinc-300 truncate mt-0.5 font-normal">
                    {r.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
