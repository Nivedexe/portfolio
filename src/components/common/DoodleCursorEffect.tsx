import React, { useEffect, useState, useCallback } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  type: 'star' | 'cross' | 'dot';
  vx: number;
  vy: number;
  rotation: number;
}

const SPARKLE_COLORS = ['#D9532F', '#222222', '#F59E0B', '#6366F1'];

export const DoodleCursorEffect: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Spawn playful doodle sparkles on click
  const handleClick = useCallback((e: MouseEvent) => {
    // Only desktop / fine pointers
    if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) return;

    const count = 4 + Math.floor(Math.random() * 3);
    const newSparkles: Sparkle[] = [];
    const timestamp = Date.now();

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = 18 + Math.random() * 24;
      const types: ('star' | 'cross' | 'dot')[] = ['star', 'cross', 'dot'];

      newSparkles.push({
        id: timestamp + i + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: 10 + Math.random() * 8,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        type: types[Math.floor(Math.random() * types.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotation: Math.random() * 90 - 45,
      });
    }

    setSparkles((prev) => [...prev.slice(-20), ...newSparkles]);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  // Clean up sparkles after their animation completes
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles([]);
    }, 550);
    return () => clearTimeout(timer);
  }, [sparkles]);

  if (sparkles.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-9999 overflow-hidden"
      aria-hidden="true"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute block animate-doodle-sparkle-pop"
          style={
            {
              left: `${s.x}px`,
              top: `${s.y}px`,
              '--tx': `${s.vx}px`,
              '--ty': `${s.vy}px`,
              '--rot': `${s.rotation}deg`,
            } as React.CSSProperties
          }
        >
          {s.type === 'star' && (
            <svg
              width={s.size}
              height={s.size}
              viewBox="0 0 24 24"
              fill={s.color}
              className="drop-shadow-xs"
            >
              <path d="M12 2 C12 7, 14 10, 22 12 C14 14, 12 17, 12 22 C12 17, 10 14, 2 12 C10 10, 12 7, 12 2 Z" />
            </svg>
          )}
          {s.type === 'cross' && (
            <svg
              width={s.size}
              height={s.size}
              viewBox="0 0 16 16"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="8" y1="2" x2="8" y2="14" />
              <line x1="2" y1="8" x2="14" y2="8" />
            </svg>
          )}
          {s.type === 'dot' && (
            <span
              className="block rounded-full"
              style={{
                width: `${s.size * 0.45}px`,
                height: `${s.size * 0.45}px`,
                backgroundColor: s.color,
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};
