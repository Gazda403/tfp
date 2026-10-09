'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode, Sparkles, MessageSquare } from 'lucide-react';

interface CopyableBlockProps {
  title: string;
  badge?: string;
  type?: 'prompt' | 'code' | 'script' | 'json' | 'template';
  content: string;
  description?: string;
}

export const CopyableBlock: React.FC<CopyableBlockProps> = ({
  title,
  badge = 'COPY SNIPPET',
  type = 'code',
  content,
  description,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'prompt':
        return <Sparkles className="w-3.5 h-3.5 text-[#D4F84C]" />;
      case 'script':
        return <MessageSquare className="w-3.5 h-3.5 text-[#34D399]" />;
      case 'json':
      case 'code':
      default:
        return <Terminal className="w-3.5 h-3.5 text-[#A8A4CE]" />;
    }
  };

  return (
    <div className="rounded-2xl border border-white/[0.12] bg-[#0E111A] overflow-hidden my-4 group hover:border-white/20 transition-all">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.08]">
        <div className="flex items-center gap-2 min-w-0">
          {getIcon()}
          <span className="text-xs font-bold text-white truncate">{title}</span>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/10 uppercase tracking-wider shrink-0">
            {badge}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all shrink-0 select-none ${
            copied
              ? 'bg-[#D4F84C] text-black shadow-sm'
              : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10'
          }`}
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Description if provided */}
      {description && (
        <div className="px-4 py-2 bg-black/20 text-[11px] text-zinc-400 border-b border-white/[0.04] leading-relaxed">
          {description}
        </div>
      )}

      {/* Code / Content Area */}
      <div className="p-4 bg-[#090B12] overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed max-h-96 whitespace-pre-wrap select-text">
        {content}
      </div>
    </div>
  );
};
