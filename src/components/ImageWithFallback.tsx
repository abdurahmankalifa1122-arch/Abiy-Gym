import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Abiy Gym',
  fallbackSubtitle = 'Bole, Addis Ababa',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#12151f] via-[#1a1f2c] to-[#0c0e14] border border-amber-500/20 flex flex-col items-center justify-center p-6 text-center text-slate-300 relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3 text-amber-400 z-10">
          <Dumbbell className="w-7 h-7 animate-pulse" />
        </div>
        <span className="font-heading uppercase tracking-wider text-white font-bold text-base z-10">
          {fallbackTitle}
        </span>
        <span className="text-xs text-amber-400/80 mt-1 uppercase tracking-widest z-10">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#12151f] ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#151924] animate-pulse flex items-center justify-center">
          <Dumbbell className="w-6 h-6 text-slate-600 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt || 'Abiy Gym'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        {...props}
      />
    </div>
  );
};
