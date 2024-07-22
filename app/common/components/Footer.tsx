import Image from 'next/image';
import React from 'react';

import QuermiIcon from '@/public/icons/quermi-white-icon.svg';
import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import Twitter from '@/public/icons/twitter.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="p-8 bg-q-footer text-q-background flex">
      <div className="footer-left">
        <div className="pb-32">
        <Image className="w-8" src={QuermiIcon} alt="Quermi" />
        <p className="my-4">Giving care at the palm of your hand</p>
        <div className="flex">
          <Image className="w-8 mr-4" src={Instagram} alt="Instagram" />
          <Image className="w-8 mr-4" src={Facebook} alt="Facebook" />
          <Image className="w-8 mr-4" src={Twitter} alt="Twitter" />
        </div>
        </div>
        <p>© 2021 Quermi Öu. All rights reserved.</p>
        <p>Project created by David Rivero,</p>
      </div>
      <div className="footer-right flex m-auto">
        <div className="mr-20">
          <p className="font-['Raleway_Bold'] mb-3">Product</p>
          <ul>
            <li className="mb-1.5">For providers</li>
            <li className="mb-1.5">Features</li>
            <li className="mb-1.5">Pricing</li>
          </ul>
        </div>
        <div className="mr-20">
          <p className="font-['Raleway_Bold'] mb-3">Company</p>
          <ul>
            <li className="mb-1.5">About</li>
            <li className="mb-1.5">Blog</li>
            <li className="mb-1.5">Press</li>
            <li className="mb-1.5">Contact</li>
          </ul>
        </div>
        <div className="mr-20">
          <p className="font-['Raleway_Bold'] mb-3">Legal</p>
          <ul>
            <li className="mb-1.5">Terms of service</li>
            <li className="mb-1.5">Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
