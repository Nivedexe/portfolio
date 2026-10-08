import React, { useState } from 'react';
import { Layers, Maximize2, ShieldAlert } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  placeholderTitle?: string;
  placeholderSubtitle?: string;
  onOpenLightbox?: () => void;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  placeholderTitle,
  placeholderSubtitle,
  onOpenLightbox,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#ECE8DC] sketch-border-subtle group ${aspectRatio} ${className}`}
    >
      {/* Real image tag */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } group-hover:scale-[1.01]`}
        />
      )}

      {/* Styled Sketchbook Fallback UI if image isn't loaded yet or missing */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[#F4EFE6] text-[#222222]">
          {/* Top bar mimicking software window */}
          <div className="flex items-center justify-between border-b border-[#222222]/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-[#222222] bg-white"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#222222] bg-white"></span>
              <span className="w-2.5 h-2.5 rounded-full border border-[#222222] bg-white"></span>
              <span className="ml-2 font-mono text-xs text-[#5F5F5F] tracking-wide">
                {placeholderTitle || alt}
              </span>
            </div>
            <span className="font-handwritten text-xs text-[#D9532F] px-2 py-0.5 rounded border border-[#D9532F]/40 bg-white/50">
              sketch mockup preview
            </span>
          </div>

          {/* Center representation: wireframe sketch */}
          <div className="my-auto py-4 flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 rounded-lg border-2 border-dashed border-[#222222]/40 flex items-center justify-center mb-3 text-[#222222]/70 bg-white/40">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-sm text-[#171717] tracking-tight mb-1">
              {placeholderTitle || alt}
            </h4>
            <p className="text-xs text-[#5F5F5F] max-w-sm line-clamp-2">
              {placeholderSubtitle || 'Enterprise UI screen. Replace asset in public/images/ with actual screenshot.'}
            </p>
          </div>

          {/* Bottom metadata */}
          <div className="flex items-center justify-between border-t border-[#222222]/20 pt-2 text-[10px] font-mono text-[#5F5F5F]">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-[#D9532F]" /> Sanitized Interface
            </span>
            <span>React + TypeScript Architecture</span>
          </div>
        </div>
      )}

      {/* Lightbox trigger overlay on hover */}
      {onOpenLightbox && (
        <button
          type="button"
          onClick={onOpenLightbox}
          aria-label="Enlarge screenshot in lightbox"
          className="absolute inset-0 flex items-center justify-center bg-[#171717]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F6F0] text-[#171717] font-semibold text-xs sketch-border sketch-shadow-sm transform -rotate-1 group-hover:rotate-0 transition-transform">
            <Maximize2 className="w-3.5 h-3.5 text-[#D9532F]" />
            Expand Screenshot
          </span>
        </button>
      )}
    </div>
  );
};
