'use client';

import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Workflow,
  PanelsTopLeft,
  LayoutDashboard,
  BookMarked,
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
} from 'lucide-react';
import { AssetItem } from '@/types/assetLibrary';

// ─── Icon map (avoids dynamic import issues) ──────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Workflow,
  PanelsTopLeft,
  LayoutDashboard,
  BookMarked,
};

interface AssetLibraryGridProps {
  assets: AssetItem[];
  onSelectAsset: (asset: AssetItem) => void;
}

export const AssetLibraryGrid: React.FC<AssetLibraryGridProps> = ({ assets, onSelectAsset }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const difficultyDot = {
    Beginner: 'bg-[#34D399]',
    Intermediate: 'bg-[#F97316]',
    Advanced: 'bg-[#F87171]',
  };

  return (
    <div className="space-y-5">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-[#D4F84C]" />
            <span className="text-xs font-bold text-[#D4F84C] uppercase tracking-widest">
              Executable Assets Library
            </span>
          </div>
          <h3 className="text-xl font-black text-white tracking-tight">
            Digital Products You Can Ship This Week
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Click any card for the full step-by-step build guide, code snippets, and AI prompts.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${difficultyDot.Beginner}`} />Beginner
          </span>
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${difficultyDot.Intermediate}`} />Intermediate
          </span>
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${difficultyDot.Advanced}`} />Advanced
          </span>
        </div>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset) => {
          const Icon = ICON_MAP[asset.iconName] || Code2;
          const isHovered = hoveredId === asset.id;

          return (
            <button
              key={asset.id}
              onClick={() => onSelectAsset(asset)}
              onMouseEnter={() => setHoveredId(asset.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group text-left rounded-2xl p-5 border bg-[#0F1219] hover:bg-[#13172080] transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F84C]/50"
              style={{
                borderColor: isHovered ? asset.borderAccent : 'rgba(255,255,255,0.10)',
              }}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${asset.accentBg} 0%, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top: Icon + Badges row */}
                <div className="flex items-start justify-between mb-4">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-200"
                    style={{
                      backgroundColor: isHovered ? asset.accentBg : 'rgba(255,255,255,0.06)',
                      borderColor: isHovered ? asset.borderAccent : 'rgba(255,255,255,0.10)',
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-200"
                      style={{ color: isHovered ? asset.accentColor : '#a1a1aa' }}
                    />
                  </div>

                  {/* Difficulty dot + badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${difficultyDot[asset.difficulty]}`}
                      title={asset.difficulty}
                    />
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full border hidden sm:block"
                      style={{
                        color: asset.accentColor,
                        backgroundColor: asset.badgeBg,
                        borderColor: asset.borderAccent,
                      }}
                    >
                      {asset.badge}
                    </span>
                  </div>
                </div>

                {/* Title + Subtitle */}
                <h4 className="text-base font-extrabold text-white leading-snug tracking-tight group-hover:text-white transition-colors">
                  {asset.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1 font-medium">{asset.subtitle}</p>

                {/* Tagline */}
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                  {asset.tagline}
                </p>

                {/* Metrics row */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" style={{ color: asset.accentColor }} />
                    <span className="font-bold text-white">{asset.estimatedRevenue}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Clock className="w-3 h-3" />
                    <span>{asset.timeToBuild}</span>
                  </div>
                </div>

                {/* CTA arrow — appears on hover */}
                <div className="flex items-center gap-1.5 mt-3">
                  <span
                    className="text-xs font-bold transition-colors duration-200"
                    style={{ color: isHovered ? asset.accentColor : '#52525b' }}
                  >
                    View build guide
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-all duration-200"
                    style={{
                      color: isHovered ? asset.accentColor : '#52525b',
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Total asset summary bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0F1219] border border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#D4F84C]/15 border border-[#D4F84C]/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#D4F84C]" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              {assets.length} Asset Categories · {assets.reduce((acc, a) => acc + a.buildSteps.length, 0)} Build Phases
            </div>
            <div className="text-xs text-zinc-500">
              {assets.reduce((acc, a) => acc + a.snippets.length, 0)} ready-to-use code snippets & AI prompts
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
          <span>Lifetime access included</span>
        </div>
      </div>
    </div>
  );
};
