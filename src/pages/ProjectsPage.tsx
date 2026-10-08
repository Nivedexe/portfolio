import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/sections/ProjectCard';
import { FeaturedProject } from '../components/sections/FeaturedProject';
import { SectionTitle } from '../components/common/SectionTitle';
import { DoodleArrow } from '../components/doodles/DoodleArrow';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="02"
          title="All Projects &amp; Case Studies"
          annotation="real enterprise systems & academic capstone ✎"
          subtitle="Explore deep-dive case studies covering enterprise maritime workflows, certificate verification, academic full-stack systems, and business billing interfaces."
        />

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-2 pb-4 border-b border-[#222222]/15">
          <span className="font-mono text-xs text-[#5F5F5F] uppercase mr-2 font-bold">
            Filter:
          </span>
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Enterprise / Maritime', value: 'maritime' },
            { label: 'Academic (IGNOU MCA)', value: 'academic' },
            { label: 'Business Applications', value: 'business' },
          ].map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`px-3 py-1.5 rounded text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
                filter === cat.value
                  ? 'bg-[#171717] text-[#F8F6F0] sketch-border sketch-shadow-sm'
                  : 'bg-white text-[#171717] hover:bg-[#FEF08A] sketch-border-subtle'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* If 'all' is selected, showcase ShipPro PMS first with 2x prominence */}
        {filter === 'all' ? (
          <div>
            <FeaturedProject project={featured} />

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717]">
                  ADDITIONAL DETAILED CASE STUDIES
                </span>
                <DoodleArrow type="straight-right" color="#D9532F" className="w-8 h-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => !p.featured)
                  .map((proj, idx) => (
                    <ProjectCard
                      key={proj.id}
                      project={proj}
                      indexNumber={`0${idx + 2}`}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                indexNumber={`0${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
