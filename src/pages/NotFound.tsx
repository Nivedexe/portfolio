import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { DoodleCircle } from '../components/doodles/DoodleCircle';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white sketch-border sketch-shadow-lg p-8 sm:p-12 text-center relative">
        {/* Top Tape decoration */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-[#E8E2D0] border border-[#222222]/30 -rotate-2" />

        <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#222222] bg-[#F8F6F0] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-[#D9532F] animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative inline-block mb-2">
          <span className="font-extrabold text-6xl sm:text-7xl font-mono text-[#171717] tracking-tight">
            404
          </span>
          <DoodleCircle color="#D9532F" className="w-24 h-24 absolute -inset-2 opacity-80" />
        </div>

        <h2 className="font-handwritten text-2xl sm:text-3xl text-[#171717] mt-4 mb-2">
          &ldquo;Looks like this page wandered off.&rdquo;
        </h2>

        <p className="text-xs sm:text-sm text-[#5F5F5F] mb-8 leading-relaxed">
          The link you followed doesn't exist or may have been moved in our sketchbook reorganization.
        </p>

        <div className="flex flex-col items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F8F6F0] font-bold text-xs uppercase tracking-wider sketch-border sketch-shadow hover:bg-[#D9532F] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <span className="font-handwritten text-sm text-[#5F5F5F]">
            return to safe territory ↗
          </span>
        </div>
      </div>
    </div>
  );
};
