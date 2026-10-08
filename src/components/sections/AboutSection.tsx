import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { DoodleStar } from '../doodles/DoodleStar';
import { personalConfig } from '../../data/config';
import { ShieldCheck, Cpu, LayoutGrid } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="01"
          title="A Little About Me"
          annotation="who I am & what I do ✎"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Notebook Card */}
          <div className="lg:col-span-8 bg-white sketch-border sketch-shadow-lg p-6 sm:p-8 md:p-10 relative">
            {/* Top notebook tape decoration */}
            <div className="absolute -top-3 left-12 w-28 h-6 bg-[#E8E2D0] border border-[#222222]/30 transform -rotate-2" />

            <div className="space-y-6 text-[#171717]">
              {/* Handwritten role annotations */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="font-handwritten text-lg sm:text-xl text-[#D9532F] px-2.5 py-0.5 rounded border border-[#D9532F]/40 bg-[#D9532F]/5 transform -rotate-1">
                  "frontend engineer"
                </span>
                <span className="font-handwritten text-lg sm:text-xl text-[#171717] px-2.5 py-0.5 rounded border border-[#222222]/30 bg-[#FEF08A]/60 transform rotate-2">
                  "enterprise UI builder"
                </span>
                <span className="font-handwritten text-lg sm:text-xl text-[#5F5F5F] px-2.5 py-0.5 rounded border border-[#5F5F5F]/40 bg-white transform -rotate-2">
                  "problem solver"
                </span>
              </div>

              {/* Main honest narrative */}
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#171717]">
                {personalConfig.bioShort}
              </p>

              <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
                {personalConfig.bioExtended}
              </p>

              {/* Core engineering focuses list */}
              <div className="pt-4 border-t border-[#222222]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-[#F8F6F0] rounded sketch-border-subtle">
                  <div className="flex items-center gap-2 mb-1">
                    <LayoutGrid className="w-4 h-4 text-[#D9532F]" />
                    <span className="font-bold text-xs uppercase tracking-wide text-[#171717]">
                      Dense Interfaces
                    </span>
                  </div>
                  <p className="text-xs text-[#5F5F5F]">
                    Complex tables, multi-column filters, and hierarchical trees.
                  </p>
                </div>

                <div className="p-3 bg-[#F8F6F0] rounded sketch-border-subtle">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-4 h-4 text-[#171717]" />
                    <span className="font-bold text-xs uppercase tracking-wide text-[#171717]">
                      Type-Safe Code
                    </span>
                  </div>
                  <p className="text-xs text-[#5F5F5F]">
                    Strict TypeScript, clear component props, and reliable APIs.
                  </p>
                </div>

                <div className="p-3 bg-[#F8F6F0] rounded sketch-border-subtle">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#065F46]" />
                    <span className="font-bold text-xs uppercase tracking-wide text-[#171717]">
                      Enterprise Rigor
                    </span>
                  </div>
                  <p className="text-xs text-[#5F5F5F]">
                    Tested in real operational environments under actual daily load.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Handwritten Quick Facts Sticky Note */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FEF9C3] sketch-border sketch-shadow p-6 relative transform rotate-1 hover:rotate-0 transition-transform">
              {/* Tape at top */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-[#E8E2D0] border border-[#222222]/30" />

              <div className="flex items-center justify-between pb-3 border-b border-[#222222]/20 mb-3">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717]">
                  QUICK SNAPSHOT
                </span>
                <DoodleStar type="sparkle-4" color="#D9532F" size={16} />
              </div>

              <ul className="space-y-3 font-mono text-xs text-[#171717]">
                <li className="flex items-start justify-between gap-2">
                  <span className="text-[#5F5F5F]">Experience:</span>
                  <span className="font-bold text-right">~4 Years Active</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span className="text-[#5F5F5F]">Core Stack:</span>
                  <span className="font-bold text-right">React &middot; TypeScript</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span className="text-[#5F5F5F]">Industry:</span>
                  <span className="font-bold text-right">Maritime &middot; Enterprise</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span className="text-[#5F5F5F]">Flagship:</span>
                  <span className="font-bold text-right text-[#D9532F]">ShipPro PMS</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span className="text-[#5F5F5F]">Full-Stack:</span>
                  <span className="font-bold text-right">E-REHAB Web App</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-[#222222]/20 text-center">
                <span className="font-handwritten text-base text-[#D9532F]">
                  no fake metrics, just real engineering ✦
                </span>
              </div>
            </div>

            {/* Guiding doodle annotation */}
            <div className="hidden lg:flex items-center gap-3 pl-4">
              <DoodleArrow type="curved-down-right" color="#222222" className="w-10 h-8" />
              <span className="font-handwritten text-base text-[#5F5F5F]">
                take a look at the selected projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
