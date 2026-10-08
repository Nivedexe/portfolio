import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { engineeringPrinciples, uiCapabilities } from '../../data/engineeringApproach';
import { DoodleCheck } from '../doodles/DoodleCheck';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { Terminal } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="05"
          title="Engineering Approach"
          annotation="principles behind the code ✎"
          subtitle="Turning complex enterprise requirements, maritime logistics, and dense data into usable, high-performance web interfaces."
        />

        {/* Top Split: Checklist & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Notebook Checklist */}
          <div className="lg:col-span-5 bg-white sketch-border sketch-shadow p-6 sm:p-8 relative">
            {/* Top Tape decoration */}
            <div className="absolute -top-3 right-8 w-24 h-5 bg-[#E8E2D0] border border-[#222222]/30 transform rotate-1" />

            <h3 className="font-extrabold text-xl sm:text-2xl text-[#171717] tracking-tight uppercase mb-2">
              I LIKE BUILDING THINGS THAT ARE:
            </h3>
            <p className="font-handwritten text-base text-[#D9532F] mb-6">
              non-negotiable standards ✦
            </p>

            <ul className="space-y-4">
              {engineeringPrinciples.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <DoodleCheck size={22} color="#D9532F" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-[#171717]">
                        {item.title}
                      </span>
                      <span className="font-handwritten text-xs text-[#5F5F5F] px-1.5 py-0.2 bg-[#F8F6F0] rounded border border-[#222222]/20">
                        {item.doodleTag}
                      </span>
                    </div>
                    <p className="text-xs text-[#5F5F5F] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Narrative Quote & Enterprise Table Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FEF08A]/40 sketch-border sketch-shadow-sm p-6 sm:p-8 relative">
              <span className="font-handwritten text-2xl sm:text-3xl text-[#171717] leading-snug block mb-4">
                &ldquo;From complex enterprise tables to responsive mobile interfaces, I focus on turning dense requirements into usable interfaces.&rdquo;
              </span>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                In industrial and enterprise software like ShipPro PMS, an engineer cannot simply rely on generic UI component templates. A chief engineer on a vessel needs to inspect equipment running hours, sign off safety permits, and filter through hundreds of machinery records without cognitive friction.
              </p>
            </div>

            {/* Practical UI engineering highlight box */}
            <div className="bg-white sketch-border sketch-shadow p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#D9532F]" />
                <h4 className="font-bold text-base text-[#171717] uppercase tracking-wide">
                  Beyond Writing Basic React Components
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed">
                Building serious enterprise web applications means obsessing over edge cases:
                optimizing DOM virtual lists for high data volumes, managing deep state without unnecessary re-renders,
                implementing accessible ARIA attributes, and preserving user filters across page reloads.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <DoodleArrow type="straight-right" color="#D9532F" className="w-6 h-4" />
                <span className="font-handwritten text-sm text-[#D9532F]">
                  structured UI engineering capabilities below:
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* UI Engineering Capabilities Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between border-b border-[#222222]/20 pb-3">
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-[#171717]">
              UI &amp; INTERFACE ENGINEERING EXPERTISE
            </h3>
            <span className="font-handwritten text-base text-[#5F5F5F]">
              real production patterns
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uiCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded sketch-border-subtle sketch-card-hover flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#F8F6F0] text-[#D9532F] rounded-xs border border-[#D9532F]/30 mb-2">
                    {cap.badge}
                  </span>
                  <h4 className="font-bold text-sm text-[#171717] mb-1">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#5F5F5F] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
