import React from 'react';
import officialLogo from '../assets/images/agra_helpline_logo_1785091129293.jpg';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'full';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '', variant = 'icon' }) => {
  // Container sizes for the square cropped logo symbol (48-56px for desktop)
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14', // ~48px - 56px
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20',
  };

  const fullSizes = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src={officialLogo}
          alt="Agra Helpline 24×7 Logo"
          className={`${fullSizes[size]} w-auto object-contain rounded-xl border border-slate-200 bg-white p-1 shadow-xs`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs shrink-0 flex items-center justify-center ${iconSizes[size]} ${className}`}
    >
      <img
        src={officialLogo}
        alt="Agra Helpline 24×7 Emblem"
        className="h-[110%] w-auto max-w-none object-cover object-left pointer-events-none transform -translate-x-[1%]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

