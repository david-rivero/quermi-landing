import Image from 'next/image';
import React from 'react';

import { SectionTitle } from './SectionTitle';

import SearchIcon from '@/public/icons/search.svg';
import CalendarIcon from '@/public/icons/calendar-month.svg';
import RateReview from '@/public/icons/rate-review.svg';

export const Features: React.FC = () => {
  return (
    <div id="feature" className="py-16 bg-q-primary text-q-background">
      <div>
        <p className="text-center">Find caregivers safer and faster</p>
        <SectionTitle>The platform you were looking for</SectionTitle>
      </div>
      <div className="m-auto flex text-center justify-between w-2/3">
        <div className="w-1/4">
          <Image className="w-20 m-auto mb-6" src={SearchIcon} alt="Search" />
          <p className="font-['Raleway_Bold'] mb-3">Find the best match</p>
          <p>Our intelligent matching system ensures you find the perfect caregiver tailored to your specific
            needs. Whether you require specialized care or general assistance, our platform connects you with professionals
            best suited to provide comfort and care to your loved ones.</p>
        </div>
        <div className="w-1/4">
          <Image className="w-20 m-auto mb-6" src={CalendarIcon} alt="Calendar" />
          <p className="font-['Raleway_Bold'] mb-3">Schedule the days</p>
          <p>Flexibility at your fingertips! Easily schedule and manage caregiving sessions through our user-friendly calendar interface.
            Plan ahead or arrange last-minute assistance, ensuring your elderly family members receive the care they need, whenever they need it.</p>
        </div>
        <div className="w-1/4">
          <Image className="w-20 m-auto mb-6" src={RateReview} alt="Rate review" />
          <p className="font-['Raleway_Bold'] mb-3">Rate your experience</p>
          <p>Your feedback matters! After each session, you have the opportunity to rate your experience.
            This helps us maintain high standards and improve our services. Your reviews also assist others in making informed decisions when choosing their caregivers.</p>
        </div>
      </div>
    </div>
  );
};
