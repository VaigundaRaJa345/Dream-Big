import React from 'react';

export const Logo: React.FC<{ className?: string; hideText?: boolean }> = ({ className = "h-auto", hideText = false }) => {
  if (hideText) return null;

  return (
    <div className={`flex flex-col leading-tight ${className}`}>
      <span className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
        Dream Big
      </span>
      <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-brand-accent uppercase -mt-0.5">
        Digital Solutions
      </span>
    </div>
  );
};