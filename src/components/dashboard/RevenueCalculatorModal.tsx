'use client';

import React, { useState } from 'react';
import {
  X,
  Calculator,
  Target,
} from 'lucide-react';

interface RevenueCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranchId?: string;
}

export const RevenueCalculatorModal: React.FC<RevenueCalculatorModalProps> = ({
  isOpen,
  onClose,
  defaultBranchId = 'digital-products',
}) => {
  const [modelType, setModelType] = useState<string>(defaultBranchId);
  const [dealPrice, setDealPrice] = useState<number>(67);
  const [unitsPerMonth, setUnitsPerMonth] = useState<number>(150);
  const [marginPct, setMarginPct] = useState<number>(90);

  if (!isOpen) return null;

  const handleModelPreset = (model: string) => {
    setModelType(model);
    if (model === 'digital-products') {
      setDealPrice(67);
      setUnitsPerMonth(200);
      setMarginPct(92);
    } else if (model === 'b2b-services') {
      setDealPrice(4500);
      setUnitsPerMonth(6);
      setMarginPct(85);
    } else if (model === 'ecom-dropship') {
      setDealPrice(68);
      setUnitsPerMonth(600);
      setMarginPct(30);
    } else if (model === 'trading-defi') {
      setDealPrice(1500);
      setUnitsPerMonth(12);
      setMarginPct(80);
    } else if (model === 'ai-automation') {
      setDealPrice(5500);
      setUnitsPerMonth(5);
      setMarginPct(90);
    }
  };

  const monthlyGross = dealPrice * unitsPerMonth;
  const monthlyNet = monthlyGross * (marginPct / 100);
  const annualGross = monthlyGross * 12;
  const annualNet = monthlyNet * 12;

  const unitsNeededFor10k = dealPrice > 0 ? Math.ceil(10000 / (dealPrice * (marginPct / 100))) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#11131E] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-zinc-300 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/35 text-[#D4F84C] text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" />
          Wealth Mathematics Engine
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Run-Rate &amp; Scale Calculator
        </h3>
        <p className="text-xs text-zinc-300 mt-0.5">
          Reverse-engineer your exact monthly numbers to replace your job and scale to $10k-$50k/mo.
        </p>

        {/* Model Presets */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {[
            { id: 'digital-products', label: 'Digital Products' },
            { id: 'b2b-services', label: 'B2B Retainers' },
            { id: 'ecom-dropship', label: 'E-Commerce' },
            { id: 'ai-automation', label: 'AI Sprints' },
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleModelPreset(preset.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                modelType === preset.id
                  ? 'bg-[#D4F84C] text-black font-bold'
                  : 'bg-white/[0.06] text-zinc-300 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Input sliders */}
        <div className="mt-5 space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-zinc-200">Average Deal / Order Size</span>
              <span className="text-[#D4F84C] font-mono">${dealPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20"
              max="10000"
              step="10"
              value={dealPrice}
              onChange={(e) => setDealPrice(Number(e.target.value))}
              className="w-full accent-[#D4F84C] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-zinc-200">Monthly Volume (Sales or Retainers)</span>
              <span className="text-white font-mono">{unitsPerMonth} units/mo</span>
            </div>
            <input
              type="range"
              min="1"
              max="1000"
              step="1"
              value={unitsPerMonth}
              onChange={(e) => setUnitsPerMonth(Number(e.target.value))}
              className="w-full accent-[#D4F84C] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-zinc-200">Estimated Net Profit Margin</span>
              <span className="text-[#34D399] font-mono">{marginPct}% Net</span>
            </div>
            <input
              type="range"
              min="15"
              max="98"
              step="1"
              value={marginPct}
              onChange={(e) => setMarginPct(Number(e.target.value))}
              className="w-full accent-[#34D399] cursor-pointer"
            />
          </div>
        </div>

        {/* Flattened Output Section (No card inside card anti-pattern) */}
        <div className="mt-6 pt-5 border-t border-white/[0.12] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Monthly Net Cashflow
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#D4F84C] mt-0.5 tracking-tight">
                ${Math.round(monthlyNet).toLocaleString()}/mo
              </div>
              <span className="text-xs text-zinc-300 font-medium">
                Gross: ${Math.round(monthlyGross).toLocaleString()}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Annual Run-Rate
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-0.5 tracking-tight">
                ${Math.round(annualNet).toLocaleString()}/yr
              </div>
              <span className="text-xs text-zinc-300 font-medium">Take-home earnings</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/[0.10] flex items-center justify-between text-xs">
            <span className="text-zinc-200 flex items-center gap-1.5 font-medium">
              <Target className="w-4 h-4 text-[#D4F84C]" />
              Volume to reach <strong>$10,000/mo</strong> net:
            </span>
            <span className="px-3 py-1 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/40 text-[#D4F84C] font-mono font-bold">
              {unitsNeededFor10k} deals/mo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
