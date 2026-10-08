import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { personalConfig } from '../../data/config';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { DoodleCircle } from '../doodles/DoodleCircle';
import { HeroIllustration } from './HeroIllustration';

export const Hero: React.FC = () => {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 sm:pt-12 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="font-handwritten text-xl sm:text-2xl text-[#D9532F] font-bold tracking-wide transform -rotate-1">
                hello, I'm Nived 👋
              </span>
              <span className="text-[#222222]/30">&bull;</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5F5F5F] font-bold">
                Frontend / Software Engineer
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#171717] leading-[1.08] uppercase">
                BUILDING <br />
                <span className="relative inline-block">
                  <span className="relative z-10">REAL-WORLD</span>
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FEF08A] -z-0 transform -rotate-1" />
                </span>{' '}
                <br />
                ENTERPRISE WEB APPS.
              </h1>
            </div>

            {/* Core Tech Stack Line */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 text-xs sm:text-sm font-mono font-bold bg-white text-[#171717] sketch-border-subtle sketch-shadow-sm">
                React
              </span>
              <span className="text-[#222222]/40 font-bold">&middot;</span>
              <span className="px-2.5 py-1 text-xs sm:text-sm font-mono font-bold bg-white text-[#171717] sketch-border-subtle sketch-shadow-sm">
                TypeScript
              </span>
              <span className="text-[#222222]/40 font-bold">&middot;</span>
              <span className="px-2.5 py-1 text-xs sm:text-sm font-mono font-bold bg-white text-[#171717] sketch-border-subtle sketch-shadow-sm">
                JavaScript
              </span>
              <span className="text-[#222222]/40 font-bold">&middot;</span>
              <span className="px-2.5 py-1 text-xs sm:text-sm font-mono font-bold bg-[#D9532F]/10 text-[#D9532F] sketch-border-subtle">
                UI Engineering
              </span>
            </div>

            {/* Descriptive Summary Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#5F5F5F] font-normal leading-relaxed max-w-2xl">
              Software Engineer with{' '}
              <DoodleCircle color="#D9532F" className="inline-block">
                <span className="font-semibold text-[#171717]">~4 years</span>
              </DoodleCircle>{' '}
              of experience specializing in maritime management platforms, dense data tables,
              hierarchical workflows, and scalable component architecture.
            </p>

            {/* CTAs with Doodle Annotations */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <button
                  type="button"
                  onClick={scrollToWork}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#171717] text-[#F8F6F0] font-bold text-sm tracking-wider uppercase sketch-border sketch-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#222222] hover:bg-[#D9532F] transition-all cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>

                {/* Secondary Button */}
                <a
                  href={personalConfig.resumeUrl}
                  download={personalConfig.resumeDownloadName || 'Nived_Krishna_Resume.pdf'}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#171717] font-bold text-sm tracking-wider uppercase sketch-border sketch-shadow-sm hover:bg-[#FEF08A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#222222] transition-all cursor-pointer"
                  title="Download Nived Krishna's Resume"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 text-[#D9532F] group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Hand-drawn annotation pointing to the primary CTA */}
              <div className="hidden sm:flex items-center gap-2 mt-3 pl-2">
                <DoodleArrow type="curved-up-left" color="#D9532F" className="w-8 h-6" />
                <span className="font-handwritten text-base text-[#D9532F] transform -rotate-1">
                  check out ShipPro PMS below!
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Developer Workspace Illustration */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
