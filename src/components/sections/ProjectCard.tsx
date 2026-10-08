import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Building2 } from 'lucide-react';
import type { Project } from '../../types';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { FallbackImage } from '../common/FallbackImage';

interface ProjectCardProps {
  project: Project;
  indexNumber: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, indexNumber }) => {
  return (
    <div className="group bg-white sketch-border sketch-shadow p-6 md:p-8 flex flex-col justify-between sketch-card-hover relative">
      {/* Top Header & Badges */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-[#222222]/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#D9532F]">
              PROJECT {indexNumber}
            </span>
            <span className="text-[#222222]/30">&bull;</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5F5F5F]">
              {project.category}
            </span>
          </div>

          {/* Academic or Enterprise Badge */}
          {project.isAcademic ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-mono font-bold bg-[#FEF08A] text-[#171717] rounded-sm border border-[#222222]">
              <BookOpen className="w-3 h-3 text-[#171717]" />
              ACADEMIC &middot; MCA
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-mono font-bold bg-[#F8F6F0] text-[#171717] rounded-sm border border-[#222222]/40">
              <Building2 className="w-3 h-3 text-[#D9532F]" />
              ENTERPRISE
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] uppercase group-hover:text-[#D9532F] transition-colors">
          {project.title}
        </h3>
        <p className="font-medium text-xs sm:text-sm text-[#D9532F] mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Screenshot / Wireframe preview */}
        <div className="my-4">
          <FallbackImage
            src={project.screenshots[0]?.url || ''}
            alt={project.title}
            placeholderTitle={`${project.title} Interface`}
            placeholderSubtitle={project.subtitle}
            aspectRatio="aspect-16/9"
          />
        </div>

        {/* Overview */}
        <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed line-clamp-3 mb-4">
          {project.overview}
        </p>

        {/* Key Features highlights */}
        <div className="mb-4">
          <span className="font-mono text-[11px] uppercase text-[#171717] font-bold block mb-1.5">
            Key Contributions:
          </span>
          <ul className="space-y-1 text-xs text-[#5F5F5F]">
            {project.keyContributions.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#D9532F] font-bold">&ndash;</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech tags and Action CTA */}
      <div className="pt-4 border-t border-[#222222]/15">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono bg-[#F8F6F0] text-[#171717] rounded-xs border border-[#222222]/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#5F5F5F]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-between">
          <Link
            to={project.route}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] group-hover:text-[#D9532F] transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Micro doodle arrow appearing on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <DoodleArrow type="straight-right" color="#D9532F" className="w-8 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
