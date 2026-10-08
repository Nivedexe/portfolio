import React from 'react';

interface DoodleCheckProps {
  color?: string;
  size?: number;
  className?: string;
}

export const DoodleCheck: React.FC<DoodleCheckProps> = ({
  color = '#D9532F',
  size = 20,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block overflow-visible shrink-0 ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M 4 13 C 6 15, 8.5 18, 9.5 20 C 12 15, 16 7, 21 4"
        stroke={color}
        strokeWidth="2.5"
      />
    </svg>
  );
};
