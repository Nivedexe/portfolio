import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle, Layers } from 'lucide-react';
import type { Project } from '../../types';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { DoodleBadge } from '../doodles/DoodleBadge';
import { FallbackImage } from '../common/FallbackImage';
import { Lightbox } from '../common/Lightbox';

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const openLightbox = (index: number) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="relative mb-16 md:mb-24">
      {/* Hand-drawn annotation badge */}
      <div className="flex items-center gap-2 mb-3">
        <DoodleBadge variant="accent" size="sm">
          PRIMARY CASE STUDY &middot; 2X FOCUS
        </DoodleBadge>
        <span className="font-handwritten text-lg text-[#D9532F] transform -rotate-1 hidden sm:inline">
          most complex enterprise project ✦
        </span>
      </div>

      {/* Main Large Featured Card Container */}
      <div className="bg-white sketch-border sketch-shadow-lg p-6 sm:p-8 md:p-12 relative overflow-hidden">
        {/* Decorative corner tag */}
        <div className="absolute top-0 right-0 bg-[#171717] text-[#F8F6F0] font-mono text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-bl-lg">
          FLAGSHIP SYSTEM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Project Information & Contributions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#5F5F5F] uppercase tracking-widest mb-1">
                <span>01</span>
                <span>/</span>
                <span>Enterprise Maritime PMS</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] uppercase">
                {project.title}
              </h3>
              <p className="font-medium text-base sm:text-lg text-[#D9532F] mt-1">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
              {project.overview}
            </p>

            {/* Confidentiality Notice */}
            <div className="p-3 bg-[#F8F6F0] rounded sketch-border-subtle flex items-start gap-2.5 text-xs text-[#5F5F5F]">
              <ShieldCheck className="w-4 h-4 text-[#065F46] shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Note:</strong> Selected screens and workflows are shown for portfolio demonstration purposes. Proprietary vessel data and customer identifiers have been sanitized.
              </span>
            </div>

            {/* Key Contributions Checklist (Honest Wording) */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold mb-2.5 flex items-center gap-2">
                <span>WHAT I WORKED ON</span>
                <span className="font-handwritten text-sm text-[#D9532F] normal-case">
                  (frontend contributions)
                </span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171717]">
                {project.keyContributions.slice(0, 6).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D9532F] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="pt-2">
              <span className="block font-mono text-[11px] text-[#5F5F5F] uppercase mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono font-medium bg-[#F8F6F0] text-[#171717] rounded sketch-border-subtle hover:bg-[#FEF08A] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study Navigation CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to={project.route}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-[#F8F6F0] font-bold text-sm uppercase tracking-wider sketch-border sketch-shadow hover:bg-[#D9532F] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#222222] transition-all cursor-pointer"
              >
                <span>Explore Full Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-white text-[#171717] font-bold text-xs uppercase tracking-wider sketch-border sketch-shadow-sm hover:bg-[#FEF08A] transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#D9532F]" />
                <span>View Screenshots ({project.screenshots.length})</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Screenshot Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Main Screenshot */}
            <div className="relative">
              {/* Handwritten microcopy */}
              <div className="absolute -top-6 right-4 hidden sm:flex items-center gap-1.5 z-10">
                <span className="font-handwritten text-sm text-[#D9532F]">
                  lots of data here ↗
                </span>
                <DoodleArrow type="curved-down-right" color="#D9532F" className="w-5 h-5" />
              </div>

              <FallbackImage
                src={project.screenshots[0]?.url || '/images/shippro/dashboard.webp'}
                alt={project.screenshots[0]?.title || 'ShipPro Dashboard'}
                placeholderTitle="ShipPro PMS: Operational Dashboard"
                placeholderSubtitle="Multi-vessel tracking, maintenance counters, and job queues."
                aspectRatio="aspect-16/10"
                className="sketch-shadow cursor-pointer"
                onOpenLightbox={() => openLightbox(0)}
              />
            </div>

            {/* Thumbnail Row of other modules */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {project.screenshots.slice(1, 5).map((shot, idx) => (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => openLightbox(idx + 1)}
                  className="group relative overflow-hidden rounded sketch-border-subtle aspect-video bg-[#ECE8DC] hover:scale-105 transition-transform cursor-pointer"
                  title={shot.title}
                >
                  <img
                    src={shot.url}
                    alt={shot.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#171717]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                    <span className="text-[10px] font-mono text-white leading-tight font-bold">
                      {shot.tag || shot.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#5F5F5F] pt-1">
              <span className="font-mono">
                Click any screen above to open interactive Lightbox
              </span>
              <span className="font-handwritten text-sm text-[#D9532F]">
                my favorite part ✦
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reusable Lightbox for screenshot gallery */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={project.screenshots}
        initialIndex={activePhotoIdx}
      />
    </div>
  );
};
