import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DoodleArrow } from '../doodles/DoodleArrow';
import { DoodleStar } from '../doodles/DoodleStar';
import { DoodleCircle } from '../doodles/DoodleCircle';
import { Terminal, Database, Code, CheckCircle2 } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Subtle floating motion variants
  const floatAnim = prefersReduced
    ? {}
    : {
        animate: {
          y: [-4, 4, -4],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        },
      };

  const badgeFloat = prefersReduced
    ? {}
    : {
        animate: {
          y: [3, -3, 3],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        },
      };

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-4/3 flex items-center justify-center select-none">
      {/* Background sketch lines and paper framing */}
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none opacity-40"
      >
        <path
          d="M 40 50 C 150 40, 350 45, 460 55 C 470 180, 465 290, 455 360 C 350 370, 150 365, 45 355 C 35 250, 38 150, 40 50 Z"
          stroke="#222222"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        {/* Abstract doodle grid / notebook lines */}
        <line x1="60" y1="90" x2="440" y2="90" stroke="#222222" strokeWidth="0.75" />
        <line x1="60" y1="130" x2="440" y2="130" stroke="#222222" strokeWidth="0.75" />
        <line x1="60" y1="170" x2="440" y2="170" stroke="#222222" strokeWidth="0.75" />
        <line x1="60" y1="210" x2="440" y2="210" stroke="#222222" strokeWidth="0.75" />
        <line x1="60" y1="250" x2="440" y2="250" stroke="#222222" strokeWidth="0.75" />
        <line x1="60" y1="290" x2="440" y2="290" stroke="#222222" strokeWidth="0.75" />
      </svg>

      {/* Main Sketch Window: IDE / Browser Window */}
      <motion.div
        {...floatAnim}
        className="relative z-10 w-[90%] sm:w-[86%] bg-white sketch-border sketch-shadow-lg p-3 sm:p-4"
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between border-b-2 border-[#222222] pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border-[1.5px] border-[#222222] bg-[#D9532F]" />
            <span className="w-3 h-3 rounded-full border-[1.5px] border-[#222222] bg-[#FEF08A]" />
            <span className="w-3 h-3 rounded-full border-[1.5px] border-[#222222] bg-[#A7F3D0]" />
            <span className="ml-2 font-mono text-xs font-bold text-[#171717]">
              ShipPro_PMS.tsx
            </span>
          </div>
          <span className="font-handwritten text-xs text-[#5F5F5F] hidden sm:inline">
            // enterprise UI in progress
          </span>
        </div>

        {/* Code Snippet & Miniature UI Table Representation */}
        <div className="space-y-2.5 font-mono text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 text-[#5F5F5F]">
            <Code className="w-3.5 h-3.5 text-[#D9532F]" />
            <span className="text-[#171717] font-semibold">const</span> EquipmentTree = (&#123; vesselId &#125;) =&gt; &#123;
          </div>

          {/* Miniature interactive table widget doodle inside code */}
          <div className="bg-[#F8F6F0] rounded p-2.5 border-[1.5px] border-[#222222]/80 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-[#5F5F5F] font-bold border-b border-[#222222]/20 pb-1">
              <span>COMPONENT</span>
              <span>INTERVAL</span>
              <span>STATUS</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-[#171717]">Main Engine Turbocharger</span>
              <span className="font-mono text-[#5F5F5F]">5,000 hrs</span>
              <span className="px-1.5 py-0.2 bg-[#FEF08A] text-[#171717] rounded-sm font-bold border border-[#222222]">
                Inspect
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-[#171717]">Auxiliary Diesel Generator</span>
              <span className="font-mono text-[#5F5F5F]">2,500 hrs</span>
              <span className="px-1.5 py-0.2 bg-[#D1FAE5] text-[#065F46] rounded-sm font-bold border border-[#065F46]">
                OK
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[#5F5F5F] text-[10px]">
            <span>return &lt;VirtualTable rows=&#123;fleetData&#125; /&gt;;</span>
            <span className="text-[#D9532F] font-bold">&#125;;</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Annotation Card 1: 4 Years Experience */}
      <motion.div
        {...badgeFloat}
        className="absolute -top-4 -right-2 sm:-right-6 z-20 bg-[#FEF08A] px-3 py-1.5 sketch-border sketch-shadow-sm transform rotate-3"
      >
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#171717]" />
          <span className="font-mono text-xs font-bold text-[#171717]">
            ~4 YRS EXP
          </span>
        </div>
        <span className="font-handwritten text-xs text-[#5F5F5F] block">
          real enterprise apps ↗
        </span>
      </motion.div>

      {/* Floating Annotation Card 2: React + TypeScript */}
      <motion.div
        {...floatAnim}
        className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-white px-3.5 py-2 sketch-border sketch-shadow-sm transform -rotate-2"
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#D9532F]" />
          <span className="font-bold text-xs text-[#171717]">
            React &middot; TypeScript
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <Database className="w-3 h-3 text-[#5F5F5F]" />
          <span className="text-[10px] text-[#5F5F5F] font-mono">
            Complex Workflows
          </span>
        </div>
      </motion.div>

      {/* Hand-drawn Coffee Mug Doodle */}
      <div className="absolute -bottom-3 right-4 z-20 hidden sm:block">
        <svg
          width="48"
          height="44"
          viewBox="0 0 48 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Steam */}
          <path
            d="M 16 6 C 14 3, 18 1, 16 -2"
            stroke="#5F5F5F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 24 6 C 22 2, 26 0, 24 -3"
            stroke="#5F5F5F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Mug body */}
          <path
            d="M 8 10 C 8 28, 12 36, 32 36 C 36 36, 38 28, 38 10 Z"
            fill="#FFFFFF"
            stroke="#222222"
            strokeWidth="2"
          />
          {/* Handle */}
          <path
            d="M 38 14 C 45 14, 46 26, 36 28"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Decorative Star & Doodle Arrow pointing at code */}
      <div className="absolute top-2 left-4 z-0 pointer-events-none hidden sm:block">
        <DoodleStar type="sparkle-4" color="#D9532F" size={24} />
      </div>

      <div className="absolute -bottom-10 right-24 pointer-events-none hidden md:block">
        <span className="font-handwritten text-sm text-[#D9532F] transform -rotate-6 inline-block">
          interactive &amp; responsive
        </span>
        <DoodleArrow type="curved-up-left" color="#D9532F" className="w-12 h-8 ml-1" />
      </div>

      <div className="absolute -top-8 left-16 pointer-events-none hidden md:block">
        <DoodleCircle color="#222222" className="w-10 h-10 opacity-30" />
      </div>
    </div>
  );
};
