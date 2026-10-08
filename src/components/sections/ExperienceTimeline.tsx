import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { experiences } from '../../data/experience';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="03"
          title="Experience & Background"
          annotation="~4 years of real engineering ✎"
          subtitle="A factual timeline of enterprise maritime software development, business web applications, and technical qualifications."
        />

        {/* Hand-drawn vertical timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-dashed border-[#222222] ml-2 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#F8F6F0] border-2 border-[#222222] flex items-center justify-center">
                <span className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-[#D9532F]' : 'bg-[#222222]'}`} />
              </div>

              {/* Experience Card */}
              <div className="bg-white sketch-border sketch-shadow p-6 sm:p-8 relative">
                {/* Period tag & doodle note */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-[#222222]/15 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D9532F]" />
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#171717]">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#D1FAE5] text-[#065F46] rounded-xs border border-[#065F46]">
                        Current Role
                      </span>
                    )}
                  </div>

                  {exp.doodleNote && (
                    <span className="font-handwritten text-base text-[#D9532F] transform -rotate-1">
                      {exp.doodleNote} ✦
                    </span>
                  )}
                </div>

                {/* Job Title & Company */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#5F5F5F] mt-1">
                    <span className="font-semibold text-[#171717]">
                      {exp.companyPlaceholder}
                    </span>
                    <span>&bull;</span>
                    <span className="font-medium text-[#D9532F]">{exp.context}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#171717] font-bold block">
                    Contributions &amp; Focus:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#5F5F5F]">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D9532F] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech chips */}
                <div className="pt-3 border-t border-[#222222]/15 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-[#5F5F5F]">Stack:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-[#F8F6F0] text-[#171717] rounded-xs border border-[#222222]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note at bottom of timeline */}
        <div className="mt-12 pl-8 sm:pl-12 flex items-center gap-3">
          <DoodleArrow type="point-up" color="#D9532F" className="w-5 h-7" />
          <p className="font-handwritten text-base sm:text-lg text-[#5F5F5F]">
            Transparent timeline reflecting ~4 years of hands-on software development and engineering rigor.
          </p>
        </div>
      </div>
    </section>
  );
};
