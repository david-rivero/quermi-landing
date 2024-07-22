import Image from 'next/image';
import React from 'react';

import GooglePlay from '@/public/icons/google-play-cta.svg';
import AppStore from '@/public/icons/app-store-cta.svg';

export const CTA: React.FC = () => {
  return (
    <div id="cta" className="py-16 bg-q-primary">
      <h2 className="text-3xl text-center text-q-background">Download the app and start your experience</h2>
      <div className="flex justify-center mt-6">
        <Image className="w-48 mr-4" src={GooglePlay} alt="Google Play" />
        <Image className="w-48" src={AppStore} alt="App Store" />
      </div>
    </div>
  )
};
