import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface AdPlaceholderProps {
  slotName?: string;
  format?: 'banner' | 'leaderboard' | 'rectangle' | 'in-feed';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotName = 'General Slot',
  format = 'banner',
  className = '',
}) => {
  const getFormatStyles = () => {
    switch (format) {
      case 'leaderboard':
        return 'min-h-[90px] max-w-[728px]';
      case 'rectangle':
        return 'min-h-[250px] max-w-[300px] sm:max-w-[336px]';
      case 'in-feed':
        return 'min-h-[120px] max-w-full';
      case 'banner':
      default:
        return 'min-h-[90px] max-w-4xl';
    }
  };

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto w-full my-8 ${className}`}
    >
      <div
        className={`mx-auto w-full ${getFormatStyles()} rounded-xl border border-dashed border-white/10 bg-[#0d0f18]/60 p-4 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-all`}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-1">
          Advertisement
        </span>
        <div className="text-xs text-slate-400 font-medium">
          Ad Space Reserved for Google AdSense
        </div>
        <div className="text-[11px] text-slate-600 mt-1 font-mono">
          Slot: {slotName} · Client: {siteConfig.adsenseId}
        </div>
      </div>
    </aside>
  );
};
