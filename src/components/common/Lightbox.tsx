import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import type { ProjectScreenshot } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  screenshots,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex);

  // Sync index and zoom when initialIndex prop changes
  if (initialIndex !== prevInitialIndex) {
    setPrevInitialIndex(initialIndex);
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (screenshots.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setZoomLevel(1);
  }, [screenshots.length]);

  const handlePrev = useCallback(() => {
    if (screenshots.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setZoomLevel(1);
  }, [screenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || screenshots.length === 0) return null;

  const currentItem = screenshots[currentIndex];

  const zoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex flex-col bg-[#171717]/95 backdrop-blur-sm text-[#F8F6F0] p-4 md:p-6"
    >
      {/* Top action toolbar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#444444] shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-1 rounded bg-[#222222] text-[#F8F6F0] border border-[#555555]">
            {currentIndex + 1} / {screenshots.length}
          </span>
          <h3 className="font-bold text-sm md:text-base text-white truncate max-w-xs md:max-w-md">
            {currentItem?.title}
          </h3>
        </div>

        {/* Zoom and close controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            aria-label="Zoom out"
            className="p-1.5 rounded hover:bg-[#333333] text-[#CCCCCC] hover:text-white transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={resetZoom}
            aria-label="Reset zoom"
            className="p-1.5 rounded hover:bg-[#333333] text-[#CCCCCC] hover:text-white transition-colors text-xs font-mono"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={zoomIn}
            aria-label="Zoom in"
            className="p-1.5 rounded hover:bg-[#333333] text-[#CCCCCC] hover:text-white transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          <div className="w-px h-5 bg-[#444444] mx-1" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-1.5 rounded-full bg-[#333333] hover:bg-[#D9532F] text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main image stage */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-3">
        {/* Previous button */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous screenshot"
            className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-[#222222]/80 hover:bg-[#D9532F] text-white transition-colors border border-[#444444]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image wrapper with zoom */}
        <div className="max-w-full max-h-full flex items-center justify-center overflow-auto p-2">
          <img
            src={currentItem?.url}
            alt={currentItem?.title || 'Screenshot'}
            style={{ transform: `scale(${zoomLevel})` }}
            className="max-h-[75vh] max-w-[90vw] object-contain rounded sketch-border-subtle bg-[#1C1C1C] transition-transform duration-150"
            onError={(e) => {
              // Gracefully handle image missing in public folder
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Next button */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next screenshot"
            className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-[#222222]/80 hover:bg-[#D9532F] text-white transition-colors border border-[#444444]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption footer */}
      <div className="text-center pt-2 border-t border-[#333333] shrink-0">
        <p className="text-xs md:text-sm text-[#CCCCCC] max-w-2xl mx-auto font-normal">
          {currentItem?.caption}
        </p>
        <span className="font-handwritten text-xs text-[#D9532F] mt-1 inline-block">
          Confidential production data has been omitted for demonstration
        </span>
      </div>
    </div>
  );
};
