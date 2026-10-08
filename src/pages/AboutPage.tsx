import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { personalConfig } from '../data/config';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { ApproachSection } from '../components/sections/ApproachSection';
import { DoodleArrow } from '../components/doodles/DoodleArrow';
import { FileText, Download, Laptop } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="01"
          title="About Nived Krishna"
          annotation="the story behind the engineer ✎"
          subtitle="Software Engineer with ~4 years of experience focusing on React, TypeScript, and mission-critical enterprise systems."
        />

        {/* Top Feature Grid: Bio + Doodle Framed Avatar Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF08A] rounded sketch-border-subtle text-xs font-mono font-bold text-[#171717]">
              <span>FRONTEND &middot; ENTERPRISE SYSTEMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-[#171717] tracking-tight">
              TURNING COMPLEX DATA &amp; INDUSTRIAL WORKFLOWS INTO SEAMLESS WEB EXPERIENCES.
            </h2>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
              {personalConfig.bioShort}
            </p>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
              {personalConfig.bioExtended}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={personalConfig.resumeUrl}
                download={personalConfig.resumeDownloadName || 'Nived_Krishna_Resume.pdf'}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F8F6F0] font-bold text-xs uppercase tracking-wider sketch-border sketch-shadow hover:bg-[#D9532F] transition-all cursor-pointer"
                title="Download Nived Krishna's Resume"
              >
                <FileText className="w-4 h-4 text-[#FEF08A]" />
                <span>Download Resume (PDF)</span>
                <Download className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Doodle-Framed Profile Presentation */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Doodle Framed Presentation */}
            <div className="relative w-64 sm:w-72 aspect-square bg-white sketch-border sketch-shadow-lg p-4 flex flex-col items-center justify-center text-center">
              {/* Abstract avatar sketch */}
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-[#222222] bg-[#F8F6F0] flex items-center justify-center mb-3">
                <Laptop className="w-12 h-12 text-[#D9532F]" />
              </div>

              <h3 className="font-extrabold text-lg text-[#171717] uppercase tracking-wide">
                {personalConfig.name}
              </h3>
              <p className="font-mono text-xs text-[#5F5F5F] mt-0.5">
                {personalConfig.title}
              </p>
              <span className="font-mono text-[11px] text-[#D9532F] font-bold mt-1">
                React &middot; TypeScript &middot; ~4 Yrs Exp
              </span>
            </div>

            {/* Doodle Pointer Annotation */}
            <div className="mt-4 flex items-center gap-2">
              <span className="font-handwritten text-xl text-[#D9532F]">
                that's me ✦
              </span>
              <DoodleArrow type="curved-up-left" color="#D9532F" className="w-10 h-6" />
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="pt-8">
          <ExperienceTimeline />
        </div>

        {/* Engineering Philosophy */}
        <div className="pt-8">
          <ApproachSection />
        </div>
      </div>
    </div>
  );
};
