import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Download } from 'lucide-react';
import { personalConfig } from '../../data/config';
import { DoodleStar } from '../doodles/DoodleStar';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#222222] bg-[#F1EEDD]/60 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-8 border-b border-[#222222]/15">
          {/* Identity column */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl text-[#171717] tracking-tight uppercase">
                {personalConfig.name}
              </span>
              <DoodleStar type="sparkle-4" color="#D9532F" size={18} />
            </div>
            <p className="font-medium text-sm text-[#171717]">
              {personalConfig.title} &middot;{' '}
              <span className="text-[#5F5F5F]">{personalConfig.subtitle}</span>
            </p>
            <p className="text-xs text-[#5F5F5F] max-w-md pt-1 leading-relaxed">
              Building real-world web applications, enterprise interfaces and complex workflows.
              Designed with an editorial sketchbook identity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#5F5F5F] font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm font-semibold">
              <li>
                <Link to="/" className="text-[#171717] hover:text-[#D9532F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#171717] hover:text-[#D9532F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#171717] hover:text-[#D9532F] transition-colors">
                  Projects &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#171717] hover:text-[#D9532F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#5F5F5F] font-bold">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-sm font-medium">
              <a
                href={`mailto:${personalConfig.email}`}
                className="inline-flex items-center gap-2 text-[#171717] hover:text-[#D9532F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D9532F]" />
                <span className="truncate">{personalConfig.email}</span>
              </a>
              <a
                href={personalConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#171717] hover:text-[#D9532F] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#171717] hover:text-[#D9532F] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalConfig.resumeUrl}
                download={personalConfig.resumeDownloadName || 'Nived_Krishna_Resume.pdf'}
                className="inline-flex items-center gap-2 text-[#171717] hover:text-[#D9532F] transition-colors"
                title="Download Nived Krishna's Resume"
              >
                <Download className="w-4 h-4 text-[#D9532F]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & doodle note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="text-xs text-[#5F5F5F] font-mono">
              &copy; 2026 {personalConfig.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-handwritten text-base text-[#171717]">
              Built with React + TypeScript ✦
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold bg-white text-[#171717] sketch-border sketch-shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
