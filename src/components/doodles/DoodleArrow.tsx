import React from 'react';

export type ArrowType =
  | 'curved-down-right'
  | 'curved-up-right'
  | 'curved-up-left'
  | 'curved-down-left'
  | 'straight-right'
  | 'straight-left'
  | 'loop'
  | 'point-down'
  | 'point-up';

interface DoodleArrowProps {
  type?: ArrowType;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

export const DoodleArrow: React.FC<DoodleArrowProps> = ({
  type = 'curved-down-right',
  color = '#222222',
  className = '',
  strokeWidth = 2,
}) => {
  switch (type) {
    case 'curved-down-right':
      return (
        <svg
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Organic curved path */}
          <path
            d="M6 8C22 7 60 12 68 36"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          {/* Arrowhead */}
          <path
            d="M56 32C62 35 67 37 70 38C68 34 67 27 67 22"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'curved-up-right':
      return (
        <svg
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M8 42C24 40 58 35 68 12"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M56 18C62 14 67 12 70 11C68 16 67 22 66 27"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'curved-up-left':
      return (
        <svg
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M72 42C56 40 22 35 12 12"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M24 18C18 14 13 12 10 11C12 16 13 22 14 27"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'curved-down-left':
      return (
        <svg
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M74 8C58 7 20 12 12 36"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M24 32C18 35 13 37 10 38C12 34 13 27 13 22"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'straight-right':
      return (
        <svg
          viewBox="0 0 70 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4 12C20 11.5 45 12.8 62 12"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M52 6C56 9 61 11.5 64 12C61 13.5 55 16.5 51 19"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'straight-left':
      return (
        <svg
          viewBox="0 0 70 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M66 12C50 11.5 25 12.8 8 12"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M18 6C14 9 9 11.5 6 12C9 13.5 15 16.5 19 19"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'point-down':
      return (
        <svg
          viewBox="0 0 30 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M15 4C14.5 16 15.8 32 15 42"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M7 34C11 38 14 43 15 45C16.5 42 20 37 23 33"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'point-up':
      return (
        <svg
          viewBox="0 0 30 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M15 46C14.5 34 15.8 18 15 8"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M7 16C11 12 14 7 15 5C16.5 8 20 13 23 17"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );

    case 'loop':
    default:
      return (
        <svg
          viewBox="0 0 60 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`overflow-visible inline-block ${className}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M10 38C15 15 40 8 46 22C50 32 32 42 22 34C16 28 26 12 50 14"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d="M42 9C47 12 51 14 53 15C50 19 46 23 44 26"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
  }
};
