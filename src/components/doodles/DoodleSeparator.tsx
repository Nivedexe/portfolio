import React from 'react';

interface DoodleSeparatorProps {
  color?: string;
  className?: string;
  note?: string;
}

export const DoodleSeparator: React.FC<DoodleSeparatorProps> = ({
  color = '#222222',
  className = '',
  note,
}) => {
  return (
    <div className={`relative flex items-center justify-center my-12 md:my-16 ${className}`}>
      <svg
        viewBox="0 0 600 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-4xl h-6 overflow-visible opacity-60"
        strokeLinecap="round"
      >
        <path
          d="M 10 12 C 100 10.5, 200 13.5, 270 12 C 280 12, 285 4, 300 4 C 315 4, 320 20, 330 12 C 400 10.5, 500 13, 590 12"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <circle cx="300" cy="12" r="2.5" fill={color} />
      </svg>
      {note && (
        <span className="absolute bg-[#F8F6F0] px-3 font-handwritten text-lg text-[#5F5F5F] transform -rotate-1">
          {note}
        </span>
      )}
    </div>
  );
};
