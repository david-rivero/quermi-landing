import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import QuermiIcon from '@/public/icons/quermi-icon.svg';
import QuermiWhiteIcon from '@/public/icons/quermi-hero-icon.svg';

interface HeaderProps {
  whiteMode?: boolean;
  showMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ whiteMode, showMenu = true }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div className="header__icon">
        <Link href="/">
          <Image className="w-12" src={whiteMode ? QuermiWhiteIcon : QuermiIcon} alt="Quermi" />
        </Link>
      </div>
      {
        showMenu && (
          <ul className="flex w-1/4 justify-between">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#steps">Steps</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#footer">Contact</Link></li>
          </ul>
        )
      }
      <div className="header__cta">
        <button className="p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold	text-slate-50 uppercase">Start using</button>
      </div>
    </div>
  );
};
