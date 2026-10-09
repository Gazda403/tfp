'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Headphones,
} from 'lucide-react';
import { PlaybookBranch } from '@/types/playbook';

interface AudioBriefingBarProps {
  branch: PlaybookBranch;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
}

export const AudioBriefingBar: React.FC<AudioBriefingBarProps> = ({
  branch,
  isPlaying,
  onTogglePlay,
  onClose,
}) => {
  const [progress, setProgress] = useState(14);
  const [speed, setSpeed] = useState<'1x' | '1.25x' | '1.5x' | '2x'>('1.5x');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const cycleSpeed = () => {
    const speeds: ('1x' | '1.25x' | '1.5x' | '2x')[] = ['1x', '1.25x', '1.5x', '2x'];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <div className="w-full rounded-2xl bg-[#121522] border border-white/[0.15] p-3.5 sm:p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
      {/* Track Info */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-10 h-10 rounded-xl bg-[#D4F84C] flex items-center justify-center text-black font-black shrink-0 shadow-sm">
          <Headphones className="w-5 h-5 text-black" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#D4F84C]/15 border border-[#D4F84C]/35 text-[#D4F84C]">
              FOUNDER AUDIO BRIEFING
            </span>
            <span className="text-xs text-zinc-300 font-medium">4:45 Duration</span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
            The 5 Unspoken Rules to Scale {branch.shortName} to $25k/mo
          </h4>
        </div>
      </div>

      {/* Audio Controls & Timeline Scrub */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        {/* Play / Pause */}
        <button
          onClick={onTogglePlay}
          className="w-9 h-9 rounded-full bg-[#D4F84C] text-black hover:bg-[#c2e635] flex items-center justify-center shadow-md transition-transform active:scale-95 shrink-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Progress scrub bar */}
        <div className="flex items-center gap-2 flex-1 sm:w-48">
          <span className="text-xs font-mono text-zinc-300">
            {Math.floor((progress * 285) / 100 / 60)}:
            {String(Math.floor(((progress * 285) / 100) % 60)).padStart(2, '0')}
          </span>
          <div
            className="flex-1 h-2 bg-white/15 rounded-full cursor-pointer relative overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newPct = Math.round((clickX / rect.width) * 100);
              setProgress(newPct);
            }}
          >
            <div
              className="h-full bg-[#D4F84C] rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-mono text-zinc-300">4:45</span>
        </div>

        {/* Speed toggle */}
        <button
          onClick={cycleSpeed}
          className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-mono font-bold text-zinc-200 hover:text-white"
        >
          {speed}
        </button>

        {/* Mute toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Close Bar */}
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
