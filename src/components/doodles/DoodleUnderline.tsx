import React from 'react';

export type UnderlineType = 'wavy' | 'rough' | 'double' | 'zigzag' | 'accent-marker';

interface DoodleUnderlineProps {
  type?: UnderlineType;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export const DoodleUnderline: React.FC<DoodleUnderlineProps> = ({
  type = 'wavy',
  color = 'currentColor',
  className = '',
  strokeWidth = 2.5,
}) => {
  switch (type) {
    case 'wavy':
      return (
        <svg
          viewBox="0 0 200 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full overflow-visible ${className}`}
          strokeLinecap="round"
        >
          <path
            d="M2 10C24 4 48 14 72 8C96 3 120 13 144 8C168 4 185 11 198 8"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'double':
      return (
        <svg
          viewBox="0 0 200 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full overflow-visible ${className}`}
          strokeLinecap="round"
        >
          <path
            d="M3 6C50 4.5 130 5.5 197 6"
            stroke={color}
            strokeWidth={strokeWidth * 0.9}
          />
          <path
            d="M8 12C60 10.5 140 12.2 192 11"
            stroke={color}
            strokeWidth={strokeWidth * 0.75}
          />
        </svg>
      );

    case 'zigzag':
      return (
        <svg
          viewBox="0 0 200 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full overflow-visible ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M3 10L18 3L34 11L50 4L66 11L82 4L98 10L114 4L130 11L146 3L162 10L178 4L197 9"
            stroke={color}
            strokeWidth={strokeWidth * 0.85}
          />
        </svg>
      );

    case 'accent-marker':
      return (
        <svg
          viewBox="0 0 200 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full overflow-visible ${className}`}
        >
          <path
            d="M2 8C55 5 145 6 198 7"
            stroke={color}
            strokeWidth={strokeWidth * 2.2}
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'rough':
    default:
      return (
        <svg
          viewBox="0 0 200 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full overflow-visible ${className}`}
          strokeLinecap="round"
        >
          <path
            d="M3 6C35 4.8 85 7.2 145 5.5C170 4.8 188 6.5 197 5.8"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
  }
};
