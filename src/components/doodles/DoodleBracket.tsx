import React from 'react';

interface DoodleBracketProps {
  side?: 'left' | 'right';
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export const DoodleBracket: React.FC<DoodleBracketProps> = ({
  side = 'left',
  color = '#222222',
  className = '',
  strokeWidth = 2,
}) => {
  if (side === 'left') {
    return (
      <svg
        viewBox="0 0 24 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`inline-block overflow-visible ${className}`}
        strokeLinecap="round"
      >
        <path
          d="M 20 4 C 10 4, 6 15, 6 30 C 6 36, 3 39, 1 40 C 3 41, 6 44, 6 50 C 6 65, 10 76, 20 76"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`inline-block overflow-visible ${className}`}
      strokeLinecap="round"
    >
      <path
        d="M 4 4 C 14 4, 18 15, 18 30 C 18 36, 21 39, 23 40 C 21 41, 18 44, 18 50 C 18 65, 14 76, 4 76"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
