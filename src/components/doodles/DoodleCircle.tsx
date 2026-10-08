import React from 'react';

interface DoodleCircleProps {
  children?: React.ReactNode;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export const DoodleCircle: React.FC<DoodleCircleProps> = ({
  children,
  color = '#D9532F',
  className = '',
  strokeWidth = 2,
}) => {
  if (children) {
    return (
      <span className={`relative inline-block px-2 py-0.5 ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          viewBox="0 0 140 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible -top-1 -bottom-1 -left-2 -right-2"
          strokeLinecap="round"
        >
          <path
            d="M20 18 C 5 8, 2 52, 25 56 C 65 62, 130 55, 135 34 C 139 12, 95 4, 30 6 C 14 6, 8 22, 12 36"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block overflow-visible ${className}`}
      strokeLinecap="round"
    >
      <path
        d="M25 20 C 5 35, 8 75, 35 90 C 70 105, 95 80, 95 50 C 95 18, 60 5, 20 12 C 10 14, 5 32, 12 52"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
