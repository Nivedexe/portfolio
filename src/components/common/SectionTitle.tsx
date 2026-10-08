import React from 'react';
import { DoodleUnderline } from '../doodles/DoodleUnderline';

interface SectionTitleProps {
  number: string;
  title: string;
  annotation?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  number,
  title,
  annotation,
  subtitle,
  className = '',
  align = 'left',
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div className={`inline-flex flex-col ${align === 'center' ? 'items-center' : 'items-start'}`}>
        <div className="flex items-center gap-3 mb-1">
          <span className="font-mono text-xs md:text-sm tracking-widest text-[#D9532F] font-bold">
            {number}
          </span>
          <span className="text-[#222222]/30 text-xs md:text-sm font-mono">/</span>
          <span className="text-xs uppercase tracking-widest text-[#5F5F5F] font-semibold">
            {title}
          </span>
        </div>

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] uppercase">
            {title}
          </h2>
          <DoodleUnderline
            type="rough"
            color="#222222"
            strokeWidth={2}
            className="w-full h-2.5 mt-1"
          />
        </div>

        {annotation && (
          <span className="font-handwritten text-lg md:text-xl text-[#D9532F] mt-2 transform -rotate-1">
            {annotation}
          </span>
        )}

        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-[#5F5F5F] max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
