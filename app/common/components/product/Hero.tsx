import Image from 'next/image';
import React from 'react';

import { Hero } from '@/app/common/components';
import Image1 from '@/public/picts/pexels-rdne-5637770.png';
import Image2 from '@/public/picts/pexels-pixabay-34761.png';
import Image3 from '@/public/picts/pexels-matthiaszomer-339620.png';

export const CareHero: React.FC = () => {
  return (
    <Hero extraClassNames="inset-0 -z-10 h-screen w-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="h-full flex items-center">
        <div className="hero-content__left w-1/2 flex justify-center">
          <div className="w-5/6">
            <h1 className="text-5xl font-bold mb-5 font-['Raleway_Bold']">Caring at the palm of your hand</h1>
            <p>Install Quermi in your phone and start taking care of the people you love most</p>
          </div>
        </div>
        <div className="hero-content__right w-1/2">
          <div className="flex items-center justify-center mb-6">
            <Image className="w-64 mr-6" src={Image1} alt="Image 1" />
            <Image className="w-48" src={Image2} alt="Image 2" />
          </div>
          <div className="flex justify-center">
            <Image className="w-96" src={Image3} alt="Image 3" />
          </div>
        </div>
      </div>
    </Hero>
  );
}
