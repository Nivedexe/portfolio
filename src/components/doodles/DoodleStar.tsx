import React from 'react';

export type StarType = 'sparkle-4' | 'sketch-star' | 'cross-sparkle';

interface DoodleStarProps {
  type?: StarType;
  color?: string;
  className?: string;
  size?: number;
}

export const DoodleStar: React.FC<DoodleStarProps> = ({
  type = 'sparkle-4',
  color = '#222222',
  className = '',
  size = 24,
}) => {
  switch (type) {
    case 'sketch-star':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block overflow-visible ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 2L14.8 8.6L22 9.2L16.5 14L18.2 21L12 17.3L5.8 21L7.5 14L2 9.2L9.2 8.6L12 2Z"
            stroke={color}
            strokeWidth="1.8"
          />
        </svg>
      );

    case 'cross-sparkle':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block overflow-visible ${className}`}
          strokeLinecap="round"
        >
          <path d="M12 3V21" stroke={color} strokeWidth="2" />
          <path d="M3 12H21" stroke={color} strokeWidth="2" />
          <path d="M6 6L18 18" stroke={color} strokeWidth="1.5" />
          <path d="M18 6L6 18" stroke={color} strokeWidth="1.5" />
        </svg>
      );

    case 'sparkle-4':
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block overflow-visible ${className}`}
          strokeLinecap="round"
        >
          <path
            d="M14 2 C14 8, 16 11, 26 14 C16 17, 14 20, 14 26 C14 20, 12 17, 2 14 C12 11, 14 8, 14 2 Z"
            fill={color}
          />
        </svg>
      );
  }
};
