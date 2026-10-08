import React from 'react';

interface DoodleBoxProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  fill?: string;
}

export const DoodleBox: React.FC<DoodleBoxProps> = ({
  children,
  color = '#222222',
  className = '',
  fill = 'transparent',
}) => {
  return (
    <div className={`relative p-4 md:p-6 ${className}`}>
      <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M 6 8 C 120 4, 280 6, 394 6 C 396 60, 394 140, 395 194 C 280 196, 120 193, 6 195 C 4 140, 6 60, 6 8 Z"
          fill={fill}
          stroke={color}
          strokeWidth="2"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
