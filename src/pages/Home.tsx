import React from 'react';
import { Hero } from '../components/hero/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { FeaturedProject } from '../components/sections/FeaturedProject';
import { ProjectCard } from '../components/sections/ProjectCard';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ApproachSection } from '../components/sections/ApproachSection';
import { ContactSection } from '../components/sections/ContactSection';
import { SectionTitle } from '../components/common/SectionTitle';
import { DoodleSeparator } from '../components/doodles/DoodleSeparator';
import { DoodleArrow } from '../components/doodles/DoodleArrow';
import { projects } from '../data/projects';

export const Home: React.FC = () => {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* Doodle Section Divider */}
      <DoodleSeparator note="intro ✦" />

      {/* 2. Short Professional Introduction */}
      <AboutSection />

      {/* Doodle Section Divider */}
      <DoodleSeparator note="selected work ✦" />

      {/* 3. Selected Work Section */}
      <section id="work" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            number="02"
            title="Selected Work"
            annotation="Some things I've worked on →"
            subtitle="Flagship enterprise case studies and real-world web applications built with React and TypeScript."
          />

          {/* 4. Primary Featured Project (ShipPro PMS - 2x visual dominance) */}
          <FeaturedProject project={featuredProject} />

          {/* 5. Other Projects Grid */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717]">
                ADDITIONAL HIGHLIGHTED CASE STUDIES
              </span>
              <DoodleArrow type="straight-right" color="#D9532F" className="w-8 h-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((proj, idx) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  indexNumber={`0${idx + 2}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doodle Section Divider */}
      <DoodleSeparator note="background ✦" />

      {/* 6. Experience Timeline */}
      <ExperienceTimeline />

      {/* Doodle Section Divider */}
      <DoodleSeparator note="toolchain ✦" />

      {/* 7. Skills Section */}
      <SkillsSection />

      {/* Doodle Section Divider */}
      <DoodleSeparator note="how I work ✦" />

      {/* 8. Engineering Approach & UI Skills */}
      <ApproachSection />

      {/* Doodle Section Divider */}
      <DoodleSeparator note="contact ✦" />

      {/* 9. Contact CTA */}
      <ContactSection />
    </div>
  );
};
