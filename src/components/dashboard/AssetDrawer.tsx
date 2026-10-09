'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Layers,
  GitBranch,
  CheckSquare,
  Square,
  Code2,
  Copy,
  CheckCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
} from 'lucide-react';
import { AssetItem } from '@/types/assetLibrary';

// ─── Types ────────────────────────────────────────────────────────────────────
type DrawerTab = 'economics' | 'stack' | 'build' | 'snippets';

interface AssetDrawerProps {
  asset: AssetItem | null;
  onClose: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const DRAWER_TABS: { id: DrawerTab; label: string; icon: React.ElementType }[] = [
  { id: 'economics', label: 'Economics', icon: DollarSign },
  { id: 'stack', label: 'Tech Stack', icon: Layers },
  { id: 'build', label: 'Build Guide', icon: CheckSquare },
  { id: 'snippets', label: 'Code & Prompts', icon: Code2 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      title="Copy to clipboard"
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/15 border border-white/15 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
    >
      {copied ? (
        <><CheckCheck className="w-3.5 h-3.5 text-[#D4F84C]" /> Copied!</>
      ) : (
        <><Copy className="w-3.5 h-3.5" /> Copy</>
      )}
    </button>
  );
}

function StatPill({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 p-4 rounded-2xl border ${accent ? 'bg-[#D4F84C]/10 border-[#D4F84C]/30' : 'bg-white/[0.04] border-white/[0.10]'}`}>
      <div className="flex items-center gap-1.5">
        <Icon className={`w-3.5 h-3.5 ${accent ? 'text-[#D4F84C]' : 'text-zinc-400'}`} />
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{label}</span>
      </div>
      <span className={`text-sm font-bold ${accent ? 'text-[#D4F84C]' : 'text-white'}`}>{value}</span>
    </div>
  );
}

// ─── Tab Panels ───────────────────────────────────────────────────────────────

function EconomicsPanel({ asset }: { asset: AssetItem }) {
  const { economics } = asset;
  return (
    <div className="space-y-6">
      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatPill icon={DollarSign} label="Price Range" value={economics.priceRange} accent />
        <StatPill icon={Clock} label="Time to Build" value={economics.timeToBuild} />
        <StatPill icon={TrendingUp} label="Margin Profile" value={economics.marginProfile} />
        <StatPill icon={Users} label="Target Buyer" value={economics.targetBuyer} />
        <StatPill icon={BarChart3} label="Market Signal" value={economics.demandSignal} />
        <StatPill icon={Target} label="Validation Check" value={economics.validationMetric} />
      </div>

      {/* Revenue Projection Visual */}
      <div className="rounded-2xl p-5 bg-gradient-to-br from-[#D4F84C]/10 to-transparent border border-[#D4F84C]/25">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4F84C]" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Revenue Scenario Modelling</h4>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Conservative', sales: '10 sales/mo', revenue: asset.economics.priceRange.split('–')[0] + '/mo' },
            { label: 'Realistic', sales: '40 sales/mo', revenue: asset.estimatedRevenue.split('–')[0] + '+ /mo' },
            { label: 'Scale', sales: '150 sales/mo', revenue: asset.estimatedRevenue.split('–')[1] + '/mo' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xs text-zinc-400 font-semibold mb-1">{s.label}</div>
              <div className="text-lg font-black text-white">{s.revenue}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.sales}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Insight */}
      <div className="rounded-2xl p-5 bg-[#121522] border border-white/[0.10]">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">💡</span>
          <div>
            <div className="text-xs font-bold text-[#D4F84C] uppercase tracking-wider mb-1">Insider Advantage</div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              The key with <strong className="text-white">{asset.title.split('&')[0].trim()}</strong> is speed-to-market. 
              Most people overthink the product and under-execute the distribution. 
              Build the minimum viable version in {asset.timeToBuild} and spend 50% of your time on marketing from Day 1.
              Validation comes from sales, not from perfectionism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackPanel({ asset }: { asset: AssetItem }) {
  return (
    <div className="space-y-6">
      {/* Tech Stack Cards */}
      <div>
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Recommended Tool Stack</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {asset.techStack.map((tool) => (
            <div key={tool.name} className="flex items-start gap-3 p-4 rounded-2xl bg-[#0F1219] border border-white/[0.10] hover:border-white/20 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Layers className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-[#D4F84C] transition-colors truncate">{tool.name}</span>
                  <span className="text-xs font-mono text-zinc-400 flex-shrink-0">{tool.cost}</span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{tool.role}</p>
              </div>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 hover:text-white" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Flow */}
      <div>
        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">System Architecture Flow</h4>
        <div className="relative">
          {asset.architecture.map((step, idx) => (
            <div key={step.step} className="flex gap-3">
              {/* Timeline rail */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#D4F84C] text-black text-xs font-black flex items-center justify-center flex-shrink-0 z-10">
                  {step.step}
                </div>
                {idx < asset.architecture.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[#D4F84C]/40 to-white/[0.06] min-h-[32px] my-1" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-4 ${idx < asset.architecture.length - 1 ? 'mb-0' : ''}`}>
                <div className="text-sm font-bold text-white">{step.label}</div>
                <div className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BuildPanel({ asset }: { asset: AssetItem }) {
  const [expandedStep, setExpandedStep] = useState<string>(asset.buildSteps[0]?.id || '');
  const [completedSteps, setCompletedSteps] = useState<Record<string, Record<number, boolean>>>({});

  const toggleTask = (stepId: string, taskIdx: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: { ...(prev[stepId] || {}), [taskIdx]: !prev[stepId]?.[taskIdx] },
    }));
  };

  return (
    <div className="space-y-3">
      {asset.buildSteps.map((step) => {
        const isExpanded = expandedStep === step.id;
        const stepTasks = completedSteps[step.id] || {};
        const completedCount = Object.values(stepTasks).filter(Boolean).length;
        const progress = step.tasks.length > 0 ? Math.round((completedCount / step.tasks.length) * 100) : 0;

        return (
          <div key={step.id} className="rounded-2xl border border-white/[0.10] bg-[#0F1219] overflow-hidden">
            {/* Accordion Header */}
            <button
              onClick={() => setExpandedStep(isExpanded ? '' : step.id)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-[#D4F84C]/15 border border-[#D4F84C]/30 text-[#D4F84C] text-xs font-black flex items-center justify-center flex-shrink-0">
                {step.phase}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white truncate">{step.title}</span>
                  {progress === 100 && (
                    <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#D4F84C]/15 text-[#D4F84C] font-bold border border-[#D4F84C]/30">Done ✓</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-500">{step.subtitle}</span>
                  <span className="text-xs text-zinc-600">·</span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{step.duration}
                  </span>
                </div>
              </div>
              {/* Progress mini bar */}
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <div className="w-20 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-[#D4F84C] rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-xs font-mono text-zinc-500">{progress}%</span>
              </div>
              {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />}
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="px-4 pb-4 pt-1 space-y-4 border-t border-white/[0.06]">
                {/* Task Checklist */}
                <ul className="space-y-2">
                  {step.tasks.map((task, idx) => {
                    const done = !!stepTasks[idx];
                    return (
                      <li key={idx}>
                        <button
                          onClick={() => toggleTask(step.id, idx)}
                          className="flex items-start gap-2.5 w-full text-left group"
                        >
                          {done ? (
                            <CheckSquare className="w-4 h-4 text-[#D4F84C] flex-shrink-0 mt-0.5" />
                          ) : (
                            <Square className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5 group-hover:text-zinc-400 transition-colors" />
                          )}
                          <span className={`text-sm leading-relaxed ${done ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>{task}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* AI Prompt block */}
                {step.aiPrompt && (
                  <div className="rounded-xl bg-[#0A0C14] border border-[#D4F84C]/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D4F84C]" />
                        <span className="text-xs font-bold text-[#D4F84C] uppercase tracking-wider">AI Prompt — Copy & Run in Claude/ChatGPT</span>
                      </div>
                      <CopyButton text={step.aiPrompt} />
                    </div>
                    <pre className="text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono overflow-x-auto">
                      {step.aiPrompt}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SnippetsPanel({ asset }: { asset: AssetItem }) {
  const [activeSnippet, setActiveSnippet] = useState(asset.snippets[0]?.id || '');

  const current = asset.snippets.find((s) => s.id === activeSnippet) || asset.snippets[0];

  if (!current) {
    return <p className="text-zinc-500 text-sm">No code snippets available for this asset.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Snippet Selector Tabs */}
      {asset.snippets.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {asset.snippets.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSnippet(s.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                activeSnippet === s.id
                  ? 'bg-[#D4F84C]/15 border-[#D4F84C]/40 text-[#D4F84C]'
                  : 'bg-white/[0.04] border-white/[0.10] text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Active Snippet */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.10]">
        {/* Code block header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0D1017] border-b border-white/[0.08]">
          <div>
            <span className="text-sm font-bold text-white">{current.label}</span>
            <p className="text-xs text-zinc-500 mt-0.5">{current.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-400">
              {current.language}
            </span>
            <CopyButton text={current.code} />
          </div>
        </div>
        {/* Code content */}
        <div className="bg-[#080A0F] overflow-x-auto">
          <pre className="p-5 text-xs leading-relaxed text-zinc-200 font-mono whitespace-pre">
            {current.code}
          </pre>
        </div>
      </div>

      {/* Usage tip */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
        <Zap className="w-4 h-4 text-[#D4F84C] flex-shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">
          <strong className="text-zinc-200">Pro tip:</strong> Paste this into Cursor or your AI editor and say{' '}
          <em>"adapt this for [my specific use case]"</em> — the AI will customize it in seconds while preserving the working structure.
        </p>
      </div>
    </div>
  );
}

// ─── Main Drawer ──────────────────────────────────────────────────────────────
export const AssetDrawer: React.FC<AssetDrawerProps> = ({ asset, onClose }) => {
  const [activeTab, setActiveTab] = useState<DrawerTab>('economics');
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Reset tab when asset changes
  useEffect(() => {
    if (asset) setActiveTab('economics');
  }, [asset?.id]);

  // Escape key close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (asset) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [asset]);

  if (!asset) return null;

  const difficultyColor = {
    Beginner: 'text-[#34D399] border-[#34D399]/40 bg-[#34D399]/10',
    Intermediate: 'text-[#F97316] border-[#F97316]/40 bg-[#F97316]/10',
    Advanced: 'text-[#F87171] border-[#F87171]/40 bg-[#F87171]/10',
  }[asset.difficulty];

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from right */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Build guide: ${asset.title}`}
        className="fixed top-0 right-0 z-50 h-full w-full max-w-2xl flex flex-col bg-[#0A0C10] border-l border-white/[0.12] shadow-2xl overflow-hidden"
      >
        {/* ── Drawer Header ─────────────────────────────────── */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-white/[0.10] bg-[#0A0C10]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full border"
                  style={{ color: asset.accentColor, backgroundColor: asset.accentBg, borderColor: asset.borderAccent }}
                >
                  {asset.badge}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColor}`}>
                  {asset.difficulty}
                </span>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {asset.timeToBuild}
                </span>
              </div>

              <h2 className="text-xl font-black text-white tracking-tight leading-tight">{asset.title}</h2>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{asset.tagline}</p>

              {/* Revenue highlight */}
              <div className="flex items-center gap-1.5 mt-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#D4F84C]" />
                <span className="text-sm font-bold text-[#D4F84C]">{asset.estimatedRevenue}</span>
                <span className="text-xs text-zinc-500">earning potential</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-xl bg-white/[0.06] hover:bg-white/12 border border-white/15 text-zinc-400 hover:text-white transition-all"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mt-5 p-1 rounded-2xl bg-[#121522] border border-white/[0.08]">
            {DRAWER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#D4F84C] text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Drawer Body (scrollable) ──────────────────────── */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {activeTab === 'economics' && <EconomicsPanel asset={asset} />}
          {activeTab === 'stack' && <StackPanel asset={asset} />}
          {activeTab === 'build' && <BuildPanel asset={asset} />}
          {activeTab === 'snippets' && <SnippetsPanel asset={asset} />}
        </div>

        {/* ── Drawer Footer ─────────────────────────────────── */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-white/[0.08] bg-[#0A0C10] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <GitBranch className="w-3.5 h-3.5" />
            <span>TFP Execution Asset · Lifetime Access</span>
          </div>
          <button
            onClick={() => setActiveTab('build')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4F84C] text-black text-xs font-black hover:bg-[#c8ee40] transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            Start Building Now
          </button>
        </div>
      </div>
    </>
  );
};
