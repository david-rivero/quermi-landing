import Image from 'next/image';
import React from 'react';

import { SectionTitle } from './SectionTitle';

import QuermiAppScreen from '@/public/picts/quermi-app-screen.png';
import CreateProfile from '@/public/icons/profile-review.svg';
import CreditCard from '@/public/icons/credit-card.svg';
import TaskDone from '@/public/icons/task-done.svg';
import SearchDark from '@/public/icons/search-dark.svg';
import DigitalWellbeing from '@/public/icons/digital-wellbeing.svg';

export const Steps: React.FC = () => {
  return (
    <div id="steps" className="py-24 bg-q-background">
      <SectionTitle>Start using Quermi now</SectionTitle>
      <div className="flex items-center">
        <div className="w-[25vw] m-auto">
          <div className="flex items-center mb-10">
            <Image className="w-9" src={CreateProfile} alt="Create profile" />
            <div className="ml-5">
              <p className="font-['Raleway_Bold']">Create an account</p>
              <p className="text-xs">Start downloading our app and create an account</p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <Image className="w-9" src={CreditCard} alt="Credit card" />
            <div className="ml-5">
              <p className="font-['Raleway_Bold']">Link your payment methods</p>
              <p className="text-xs">Add your preferred credit or debit card</p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <Image className="w-9" src={TaskDone} alt="Task done" />
            <div className="ml-5">
              <p className="font-['Raleway_Bold']">Pick a plan</p>
              <p className="text-xs">Choose between mensual or a year plan</p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <Image className="w-9" src={SearchDark} alt="Search" />
            <div className="ml-5">
              <p className="font-['Raleway_Bold']">Find a care provider</p>
              <p className="text-xs">Search among different profiles and match with the one you are looking for</p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <Image className="w-9" src={DigitalWellbeing} alt="Wellbeing" />
            <div className="ml-5">
              <p className="font-['Raleway_Bold']">Enjoy the experience</p>
              <p className="text-xs">Start your experience and let your care person what you need</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-[50vw]">
          <Image className="w-80 h-auto" src={QuermiAppScreen} alt="Quermi app screen" />
        </div>
      </div>
    </div>
  );
};
