import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';
import { personalConfig } from '../../data/config';
import { SectionTitle } from '../common/SectionTitle';
import { DoodleStar } from '../doodles/DoodleStar';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number="06"
          title="Let's Build Something"
          annotation="open to opportunities & discussions ✉"
          subtitle="Looking for an experienced Frontend / Software Engineer who builds real-world enterprise applications?"
        />

        {/* Big Sketch Box CTA */}
        <div className="bg-white sketch-border sketch-shadow-lg p-6 sm:p-10 md:p-14 relative overflow-hidden text-center md:text-left">
          {/* Top Tape decoration */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-16 w-32 h-6 bg-[#E8E2D0] border border-[#222222]/30 -rotate-1" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Direct CTA */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF08A] rounded-sm sketch-border-subtle text-xs font-mono font-bold text-[#171717]">
                <DoodleStar type="sparkle-4" color="#D9532F" size={14} />
                AVAILABLE FOR ROLES &amp; PROJECTS
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717] uppercase">
                HAVE AN OPPORTUNITY OR WANT TO DISCUSS AN ENTERPRISE CHALLENGE?
              </h3>

              <p className="text-sm sm:text-base text-[#5F5F5F] max-w-xl leading-relaxed">
                Whether you need help architecting data-heavy React dashboards, refactoring complex workflows, or building responsive web applications from Figma designs, feel free to reach out.
              </p>

              {/* Direct Mailto & Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href={`mailto:${personalConfig.email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#171717] text-[#F8F6F0] font-bold text-sm tracking-wider uppercase sketch-border sketch-shadow hover:bg-[#D9532F] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#222222] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#D9532F]" />
                  <span>Email Me Directly</span>
                </a>

                {/* Quick copy email */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#F8F6F0] text-[#171717] font-mono text-xs font-bold sketch-border sketch-shadow-sm hover:bg-white transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#065F46]" />
                      <span className="text-[#065F46]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#5F5F5F]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Social Links & Resume Card */}
            <div className="md:col-span-4 bg-[#F8F6F0] p-6 rounded sketch-border-subtle space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#171717] block border-b border-[#222222]/15 pb-2">
                VERIFIED LINKS
              </span>

              <div className="space-y-2.5">
                <a
                  href={personalConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white rounded sketch-border-subtle hover:bg-[#FEF08A] transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#171717]">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5F5F5F]" />
                </a>

                <a
                  href={personalConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white rounded sketch-border-subtle hover:bg-[#FEF08A] transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#171717]">
                    <GithubIcon className="w-4 h-4 text-[#171717]" />
                    <span>GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5F5F5F]" />
                </a>

                <a
                  href={personalConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white rounded sketch-border-subtle hover:bg-[#FEF08A] transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#171717]">
                    <FileText className="w-4 h-4 text-[#D9532F]" />
                    <span>Resume (PDF)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5F5F5F]" />
                </a>
              </div>

              <div className="pt-2 text-center">
                <span className="font-handwritten text-sm text-[#D9532F]">
                  fastest response via email or LinkedIn ✦
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
