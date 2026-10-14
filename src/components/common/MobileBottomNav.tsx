import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Briefcase, User, Code2, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hash: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, hash: '#top', path: '/' },
  { id: 'about', label: 'About', icon: User, hash: '#about', path: '/about' },
  { id: 'work', label: 'Work', icon: Briefcase, hash: '#work', path: '/projects' },
  { id: 'skills', label: 'Skills', icon: Code2, hash: '#skills', path: '/' },
  { id: 'contact', label: 'Contact', icon: Mail, hash: '#contact', path: '/contact' },
];

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('home');

  // Determine active item based on route or scroll position on homepage
  useEffect(() => {
    const pathname = location.pathname;

    if (pathname.startsWith('/projects')) {
      setActiveSection('work');
      return;
    }
    if (pathname === '/about') {
      setActiveSection('about');
      return;
    }
    if (pathname === '/contact') {
      setActiveSection('contact');
      return;
    }

    // Homepage scroll spy
    if (pathname === '/') {
      const handleScroll = () => {
        const scrollY = window.scrollY;

        // Top of the page is home
        if (scrollY < 200) {
          setActiveSection('home');
          return;
        }

        const sections = [
          { id: 'contact', element: document.querySelector('#contact') },
          { id: 'skills', element: document.querySelector('#skills') },
          { id: 'work', element: document.querySelector('#work') },
          { id: 'about', element: document.querySelector('#about') },
        ];

        const viewportMiddle = scrollY + window.innerHeight * 0.4;

        for (const sec of sections) {
          if (sec.element) {
            const rect = (sec.element as HTMLElement).getBoundingClientRect();
            const top = rect.top + scrollY;
            if (top <= viewportMiddle) {
              setActiveSection(sec.id);
              return;
            }
          }
        }

        setActiveSection('home');
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const handleTabClick = (item: NavItem) => {
    // Subtle haptic feedback on supported mobile devices
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch {
        // Ignore if not permitted
      }
    }

    if (location.pathname === '/') {
      if (item.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        return;
      }

      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
        return;
      }
    }

    // Navigate to respective route if not already on it
    if (item.path !== '/') {
      navigate(item.path);
    } else {
      navigate(`/${item.hash}`);
    }
    setActiveSection(item.id);
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-3 inset-x-3 max-w-md mx-auto z-40 md:hidden pointer-events-auto select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="bg-[#F8F6F0]/95 backdrop-blur-md border-2 border-[#222222] rounded-2xl shadow-[4px_4px_0px_#222222] px-1.5 py-1.5 flex items-center justify-around relative">
        {/* Playful sketchbook tape decoration */}
        <div
          aria-hidden="true"
          className="absolute -top-2 left-6 w-10 h-3 bg-[#E8E2D0]/90 border border-[#222222]/30 transform -rotate-3 pointer-events-none rounded-xs shadow-2xs"
        />

        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item)}
              aria-label={item.label}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-150 active:scale-90 cursor-pointer relative ${
                isActive
                  ? 'bg-[#FEF08A] text-[#171717] border border-[#222222] shadow-[2px_2px_0px_#222222] -translate-y-0.5'
                  : 'text-[#5F5F5F] hover:text-[#171717] border border-transparent'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <Icon
                  className={`w-4.5 h-4.5 transition-transform duration-150 ${
                    isActive ? 'scale-110 text-[#D9532F]' : ''
                  }`}
                />
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#D9532F] rounded-full animate-ping"
                  />
                )}
              </div>
              <span
                className={`text-[10px] mt-0.5 font-bold tracking-tight uppercase ${
                  isActive ? 'text-[#171717] font-mono' : 'text-[#5F5F5F]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
