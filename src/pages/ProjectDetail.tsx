import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Award,
  Film,
} from 'lucide-react';
import { projects } from '../data/projects';
import { DoodleUnderline } from '../components/doodles/DoodleUnderline';
import { DoodleStar } from '../components/doodles/DoodleStar';
import { DoodleBadge } from '../components/doodles/DoodleBadge';
import { FallbackImage } from '../components/common/FallbackImage';
import { Lightbox } from '../components/common/Lightbox';
import { VideoPlayer } from '../components/common/VideoPlayer';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find next and previous projects for bottom navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const openLightbox = (index: number) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation Bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] hover:text-[#D9532F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <span className="font-handwritten text-base text-[#5F5F5F]">
            case study &middot; 0{currentIndex + 1} of 0{projects.length}
          </span>
        </div>

        {/* 1. Project Header & Identity */}
        <div className="bg-white sketch-border sketch-shadow-lg p-6 sm:p-10 md:p-12 mb-12 relative">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.badge && (
              <DoodleBadge
                variant={project.isAcademic ? 'highlight' : 'accent'}
                size="sm"
              >
                {project.badge}
              </DoodleBadge>
            )}
            <span className="font-mono text-xs text-[#5F5F5F] uppercase">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[#171717] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-[#D9532F] mt-2 max-w-3xl">
            {project.subtitle}
          </p>

          <DoodleUnderline
            type="rough"
            color="#222222"
            strokeWidth={2}
            className="w-full max-w-md h-2 my-6"
          />

          {/* Metadata Grid (Role, Duration, Academic/Enterprise Context) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#222222]/15 text-xs sm:text-sm font-mono">
            <div>
              <span className="text-[#5F5F5F] block mb-1 uppercase text-[11px]">Role:</span>
              <span className="font-bold text-[#171717]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#5F5F5F] block mb-1 uppercase text-[11px]">Type / Context:</span>
              <span className="font-bold text-[#171717]">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-[#5F5F5F] block mb-1 uppercase text-[11px]">Duration:</span>
              <span className="font-bold text-[#171717]">{project.duration}</span>
            </div>
            <div>
              <span className="text-[#5F5F5F] block mb-1 uppercase text-[11px]">Core Tech:</span>
              <span className="font-bold text-[#D9532F]">
                {project.technologies.slice(0, 3).join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* Confidentiality Notice Alert if applicable */}
        {project.confidential && (
          <div className="mb-12 p-4 bg-[#F4EFE6] sketch-border-subtle flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
            <ShieldCheck className="w-5 h-5 text-[#065F46] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase tracking-wider block mb-0.5">
                Confidentiality Notice
              </span>
              <p className="text-[#5F5F5F] leading-relaxed">
                {project.confidentialNotice}
              </p>
            </div>
          </div>
        )}

        {/* 2. Overview & Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6 bg-white sketch-border sketch-shadow p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#222222]/15 pb-2">
              <span className="font-mono text-xs uppercase font-bold text-[#D9532F]">01</span>
              <h3 className="font-extrabold text-lg text-[#171717] uppercase tracking-wide">
                PROJECT OVERVIEW
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-6 bg-white sketch-border sketch-shadow p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#222222]/15 pb-2">
              <span className="font-mono text-xs uppercase font-bold text-[#D9532F]">02</span>
              <h3 className="font-extrabold text-lg text-[#171717] uppercase tracking-wide">
                PROBLEM &amp; CONTEXT
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* 3. Technology Stack Breakdown */}
        <div className="bg-white sketch-border sketch-shadow p-6 sm:p-8 mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-[#222222]/15 pb-3">
            <h3 className="font-mono text-xs sm:text-sm uppercase font-bold tracking-wider text-[#171717]">
              TECHNOLOGY STACK USED IN THIS IMPLEMENTATION
            </h3>
            <span className="font-handwritten text-sm text-[#D9532F]">
              verified tech only ✦
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs sm:text-sm font-mono font-semibold bg-[#F8F6F0] text-[#171717] rounded sketch-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Full Technical Architecture Flow Diagram (Especially for E-REHAB) */}
        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <div className="bg-white sketch-border sketch-shadow-lg p-6 sm:p-10 mb-16">
            <div className="flex items-center justify-between mb-6 border-b border-[#222222]/15 pb-4">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#D9532F]">
                  SYSTEM ARCHITECTURE
                </span>
                <h3 className="text-2xl font-extrabold text-[#171717] uppercase tracking-tight">
                  Full-Stack Architecture Flow
                </h3>
              </div>
              <span className="font-handwritten text-base text-[#5F5F5F] hidden sm:inline">
                decoupled tiers ✎
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {project.architectureFlow.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#F8F6F0] p-4 rounded sketch-border-subtle flex flex-col justify-between relative"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#D9532F] block mb-1">
                      {step.step}
                    </span>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 border-t border-[#222222]/10 pt-2">
                    {step.tech.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[10px] font-mono bg-white text-[#171717] rounded-xs border border-[#222222]/20 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Key Contributions */}
        <div className="bg-white sketch-border sketch-shadow p-6 sm:p-10 mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-[#222222]/15 pb-3">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-[#D9532F]">
                WHAT I WORKED ON
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] uppercase tracking-tight">
                Key Engineering Contributions
              </h3>
            </div>
            <span className="font-handwritten text-base text-[#D9532F] hidden sm:inline">
              honest scope of work ✦
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyContributions.map((contrib, cIdx) => (
              <div
                key={cIdx}
                className="p-3.5 bg-[#F8F6F0] rounded sketch-border-subtle flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D9532F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                  {contrib}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Video Walkthrough Demo (If provided for project, e.g. ShipPro PMS) */}
        {project.video && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4 border-b border-[#222222]/20 pb-2">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[#D9532F]" />
                <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-[#171717]">
                  SEE IT IN ACTION &middot; VIDEO DEMO
                </h3>
              </div>
              <span className="font-handwritten text-base text-[#D9532F]">
                local HTML5 player
              </span>
            </div>

            <VideoPlayer
              src={project.video.url}
              poster={project.video.poster}
              title={project.video.title}
              description={project.video.description}
            />
          </div>
        )}

        {/* 7. UI Screenshots Gallery + Interactive Lightbox */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-[#222222]/20 pb-3">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-[#D9532F]">
                VISUAL PROOFS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] uppercase tracking-tight">
                Interface Screenshots &amp; Workflows
              </h3>
            </div>
            <span className="font-handwritten text-sm text-[#5F5F5F] hidden sm:inline">
              click any screen to enlarge in Lightbox ✎
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((screen, idx) => (
              <div
                key={screen.id}
                className="bg-white sketch-border sketch-shadow p-4 rounded space-y-3"
              >
                <FallbackImage
                  src={screen.url}
                  alt={screen.title}
                  placeholderTitle={screen.title}
                  placeholderSubtitle={screen.caption}
                  aspectRatio="aspect-16/10"
                  className="cursor-pointer"
                  onOpenLightbox={() => openLightbox(idx)}
                />

                <div className="flex items-start justify-between gap-2 pt-1">
                  <div>
                    <h4 className="font-bold text-sm text-[#171717]">
                      {screen.title}
                    </h4>
                    <p className="text-xs text-[#5F5F5F] mt-0.5 leading-relaxed">
                      {screen.caption}
                    </p>
                  </div>
                  {screen.tag && (
                    <span className="shrink-0 font-mono text-[10px] uppercase font-bold bg-[#F8F6F0] px-2 py-0.5 rounded border border-[#222222]/20 text-[#171717]">
                      {screen.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Technical Highlights & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Highlights */}
          <div className="bg-white sketch-border sketch-shadow p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#222222]/15 pb-2">
              <Award className="w-5 h-5 text-[#D9532F]" />
              <h3 className="font-extrabold text-lg text-[#171717] uppercase tracking-wide">
                Technical Highlights
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5F5F5F]">
              {project.technicalHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-[#D9532F]">&bull;</span>
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Solved */}
          <div className="bg-white sketch-border sketch-shadow p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 border-b border-[#222222]/15 pb-2">
              <AlertTriangle className="w-5 h-5 text-[#D9532F]" />
              <h3 className="font-extrabold text-lg text-[#171717] uppercase tracking-wide">
                Engineering Challenges Solved
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5F5F5F]">
              {project.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-bold text-[#D9532F]">&bull;</span>
                  <span className="leading-relaxed">{ch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 9. Outcomes */}
        <div className="bg-[#FEF9C3] sketch-border sketch-shadow p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-[#171717]" />
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-[#171717]">
              HONEST IMPACT &amp; OUTCOMES
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#171717]">
            {project.outcome.map((out, idx) => (
              <li
                key={idx}
                className="p-3 bg-white/70 rounded sketch-border-subtle flex items-start gap-2"
              >
                <DoodleStar type="cross-sparkle" size={14} color="#D9532F" className="mt-1" />
                <span className="leading-relaxed">{out}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 10. Bottom Navigation Bar between Projects */}
        <div className="pt-8 border-t-2 border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={prevProject.route}
            className="group flex items-center gap-2 px-4 py-2.5 bg-white sketch-border sketch-shadow-sm hover:bg-[#FEF08A] transition-all text-xs font-bold uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Previous: {prevProject.title}</span>
          </Link>

          <Link
            to="/projects"
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#5F5F5F] hover:text-[#171717] underline decoration-wavy underline-offset-4"
          >
            All Projects Grid
          </Link>

          <Link
            to={nextProject.route}
            className="group flex items-center gap-2 px-4 py-2.5 bg-white sketch-border sketch-shadow-sm hover:bg-[#FEF08A] transition-all text-xs font-bold uppercase"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={project.screenshots}
        initialIndex={activePhotoIdx}
      />
    </div>
  );
};
