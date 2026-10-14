import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import { personalConfig } from '../../data/config';
import { DoodleUnderline } from '../doodles/DoodleUnderline';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about', hash: '#about' },
    { name: 'Work', path: '/projects', hash: '#work' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Contact', path: '/contact', hash: '#contact' },
  ];

  const handleNavClick = (link: { name: string; path: string; hash: string }) => {
    if (location.pathname === '/') {
      // If already on homepage, scroll to section smoothly
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Otherwise navigate to page
    if (link.path !== '/') {
      navigate(link.path);
    } else {
      navigate(`/${link.hash}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F8F6F0]/90 backdrop-blur-md border-b border-[#222222]/15 py-3 shadow-xs'
          : 'bg-[#F8F6F0] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group inline-flex flex-col items-start focus:outline-hidden"
          aria-label="Nived Krishna Portfolio Home"
        >
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base sm:text-xl tracking-tight text-[#171717] uppercase group-hover:text-[#D9532F] transition-colors">
              NIVED KRISHNA S
            </span>
            <span className="w-2 h-2 rounded-full bg-[#D9532F] animate-pulse" />
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#5F5F5F] uppercase">
            SOFTWARE ENGINEER
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (location.pathname === '/' && location.hash === link.hash);

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`relative text-sm font-semibold tracking-wide transition-colors cursor-pointer py-1 ${
                  isActive ? 'text-[#171717]' : 'text-[#5F5F5F] hover:text-[#171717]'
                }`}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <DoodleUnderline
                    type="wavy"
                    color="#D9532F"
                    strokeWidth={2}
                    className="absolute -bottom-1 left-0 w-full h-1.5"
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#222222] transition-all duration-200 group-hover:w-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalConfig.resumeUrl}
            download={personalConfig.resumeDownloadName || 'Nived_Krishna_Resume.pdf'}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#171717] bg-white sketch-border sketch-shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#222222] hover:bg-[#FEF08A] transition-all cursor-pointer"
            title="Download Nived Krishna's Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#D9532F]" />
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 text-[#171717]" />
          </a>
        </div>

        {/* Mobile Header Action: Direct Highlighted Resume CTA */}
        <div className="flex md:hidden items-center">
          <a
            href={personalConfig.resumeUrl}
            download={personalConfig.resumeDownloadName || 'Nived_Krishna_Resume.pdf'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#171717] bg-[#FEF08A] sketch-border sketch-shadow-sm active:translate-y-0.5 transition-all cursor-pointer"
            title="Download Nived Krishna's Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#D9532F]" />
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 text-[#171717]" />
          </a>
        </div>
      </div>
    </header>
  );
};
