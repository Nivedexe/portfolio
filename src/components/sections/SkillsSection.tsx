import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { skillCategories } from '../../data/skills';
import { DoodleStar } from '../doodles/DoodleStar';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-[#F4EFE6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="04"
          title="Skills & Technologies"
          annotation="no arbitrary percentage bars, just honest tools ✦"
          subtitle="Organized by domain of expertise. Practical competencies refined across enterprise web applications."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white sketch-border sketch-shadow p-6 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-3 mb-3 border-b border-[#222222]/15 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#5F5F5F] mt-1">{category.description}</p>
                  </div>
                  {category.doodleAnnotation && (
                    <span className="font-handwritten text-base text-[#D9532F] shrink-0 transform -rotate-2">
                      {category.doodleAnnotation}
                    </span>
                  )}
                </div>

                {/* Skill Cloud / Badges */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs sm:text-sm font-mono transition-transform hover:-translate-y-0.5 ${
                        skill.highlight
                          ? 'bg-[#FEF08A] text-[#171717] font-bold sketch-border-subtle sketch-shadow-sm'
                          : 'bg-[#F8F6F0] text-[#171717] border border-[#222222]/30'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] uppercase font-bold text-[#D9532F] bg-white px-1.5 py-0.2 rounded-xs border border-[#222222]/20">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative sketch touch */}
              <div className="pt-6 mt-6 border-t border-[#222222]/10 flex items-center justify-between text-xs text-[#5F5F5F] font-mono">
                <span>{category.skills.length} core competencies</span>
                <span className="font-handwritten text-sm text-[#5F5F5F]">
                  active in production
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Doodle Connectors & Architecture Summary Card */}
        <div className="mt-12 bg-white sketch-border sketch-shadow-sm p-6 sm:p-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D9532F]">
                ENGINEERED STACK
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#171717]">
                How they connect in day-to-day architecture:
              </h4>
              <p className="text-xs sm:text-sm text-[#5F5F5F]">
                React &amp; TypeScript client &rarr; REST APIs (.NET / Node.js) &rarr; Relational persistence (MySQL / Sequelize)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <DoodleStar type="sketch-star" color="#D9532F" size={24} />
              <span className="font-handwritten text-lg text-[#171717]">
                clean component architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
