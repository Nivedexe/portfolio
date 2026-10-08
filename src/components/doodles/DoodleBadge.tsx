import React from 'react';

interface DoodleBadgeProps {
  children: React.ReactNode;
  variant?: 'ink' | 'accent' | 'highlight' | 'subtle';
  className?: string;
  size?: 'sm' | 'md';
}

export const DoodleBadge: React.FC<DoodleBadgeProps> = ({
  children,
  variant = 'ink',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const variantStyles = {
    ink: 'bg-transparent text-[#171717] border-[1.5px] border-[#222222]',
    accent: 'bg-[#D9532F]/10 text-[#D9532F] border-[1.5px] border-[#D9532F]',
    highlight: 'bg-[#FEF08A] text-[#171717] border-[1.5px] border-[#222222]',
    subtle: 'bg-white/70 text-[#5F5F5F] border border-[#222222]/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-[180px_10px_200px_8px/8px_200px_10px_180px] shadow-[1px_1px_0px_#222222] ${variantStyles[variant]} ${sizeClasses} ${className}`}
    >
      {children}
    </span>
  );
};
