import Image from 'next/image';
import React from 'react';

import QuermiIcon from '@/public/icons/quermi-icon.svg';
import QuermiWhiteIcon from '@/public/icons/quermi-hero-icon.svg';

interface HeaderProps {
  whiteMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ whiteMode }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="header__icon">
        <Image className="w-12" src={whiteMode ? QuermiWhiteIcon : QuermiIcon} alt="Quermi" />
      </div>
      <ul className="flex w-1/3 justify-between">
        <li>Features</li>
        <li>Steps</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <div className="header__cta">
        <button className="p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold	text-slate-50 uppercase">Start using</button>
      </div>
    </div>
  );
};
