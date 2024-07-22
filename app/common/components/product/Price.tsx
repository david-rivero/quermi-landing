import Image from 'next/image';
import React from 'react';

import { SectionTitle } from './SectionTitle';

import CheckIcon from '@/public/icons/check.svg';

export const Price: React.FC = () => {
  return (
    <div id="pricing" className="py-16 bg-q-background-v2">
      <SectionTitle>Choose the right plan for you</SectionTitle>
      <div className="flex justify-center">
        <div className="w-80 p-4 border border-q-text rounded-lg mr-6">
          <p className="font-['Raleway_Bold'] text-lg">Basic</p>
          <p className="text-xs">Ideal for your first plan</p>
          <p><span className="font-['Raleway_Bold'] text-5xl">$10</span>/month</p>
          <button className="w-full p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold	text-slate-50">Buy plan</button>
          <div>
            <ul>
              <li className="flex items-center text-sm">
                <span><Image src={CheckIcon} alt="Check" /></span>
                <span>20 swipes per day</span>
              </li>
              <li className="flex items-center text-sm">
                <span><Image src={CheckIcon} alt="Check" /></span>
                <span>2 types per day</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-80 p-4 border border-q-text rounded-lg">
          <p className="font-['Raleway_Bold'] text-lg">Premium</p>
          <p className="text-xs">For customers with several requirements</p>
          <p><span className="font-['Raleway_Bold'] text-5xl">$6</span>/month</p>
          <p className="text-xs">Billed anually</p>
          <button className="w-full p-3 bg-indigo-500 rounded-lg font-['Raleway_Bold'] font-bold	text-slate-50">Buy plan</button>
          <div>
            <ul>
              <li className="flex items-center text-sm">
                <span><Image src={CheckIcon} alt="Check" /></span>
                <span>Unlimited swipes per day</span>
              </li>
              <li className="flex items-center text-sm">
                <span><Image src={CheckIcon} alt="Check" /></span>
                <span>Access to all services provided in Quermi</span>
              </li>
              <li className="flex items-center text-sm">
                <span><Image src={CheckIcon} alt="Check" /></span>
                <span>Profile highlighted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
