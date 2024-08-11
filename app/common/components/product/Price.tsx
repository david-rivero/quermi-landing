import Image from 'next/image';
import React from 'react';

import { SectionTitle } from './SectionTitle';

import CheckIcon from '@/public/icons/check.svg';
import CheckLightIcon from '@/public/icons/check-white.svg';

interface PriceProps {
  bgColor?: string;
  color?: string;
  lightMode?: boolean;
}

export const Price: React.FC<PriceProps> = ({ bgColor = 'background-v2', color = 'q-text', lightMode = false }) => {
  const componentClassName = `py-24 bg-q-${bgColor} text-${color}`;
  return (
    <div id="pricing" className={componentClassName}>
      <SectionTitle>Choose the right plan for you</SectionTitle>
      <div className="flex justify-center">
        <div className={`w-80 p-4 border border-${color} rounded-lg mr-6`}>
          <p className="font-['Raleway_Bold'] text-lg">Basic</p>
          <p className="text-xs">Ideal for your first plan</p>
          <div className="mt-4 mb-8 h-20">
            <p><span className="font-['Raleway_Bold'] text-5xl">$10</span>/month</p>
          </div>
          <button className="w-full p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold text-slate-50">Buy plan</button>
          <div className="mt-6 mb-12">
            <ul>
              <li className="flex items-center text-sm">
                <span className="mr-1"><Image src={lightMode ? CheckLightIcon : CheckIcon} alt="Check" /></span>
                <span>20 swipes per day</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-1"><Image src={lightMode ? CheckLightIcon : CheckIcon} alt="Check" /></span>
                <span>2 types per day</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`w-80 p-4 border border-${color} rounded-lg`}>
          <p className="font-['Raleway_Bold'] text-lg">Premium</p>
          <p className="text-xs">For customers with several requirements</p>
          <div className="mt-4 mb-8 h-20">
            <p><span className="font-['Raleway_Bold'] text-5xl">$6</span>/month</p>
            <p className="text-xs">Billed anually</p>
          </div>
          <button className="w-full p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold text-slate-50">Buy plan</button>
          <div className="mt-6 mb-12">
            <ul>
              <li className="flex items-center text-sm">
                <span className="mr-1"><Image src={lightMode ? CheckLightIcon : CheckIcon} alt="Check" /></span>
                <span>Unlimited swipes per day</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-1"><Image src={lightMode ? CheckLightIcon : CheckIcon} alt="Check" /></span>
                <span>Access to all services provided in Quermi</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="mr-1"><Image src={lightMode ? CheckLightIcon : CheckIcon} alt="Check" /></span>
                <span>Profile highlighted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
