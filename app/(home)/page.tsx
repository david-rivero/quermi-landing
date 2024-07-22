import React from 'react';

import {
  Footer,
  CareHero,
  Features,
  Steps,
  Price,
  CTA,
} from '@/app/common/components';

const CarePage: React.FC = () => {
  return (
    <>
      <CareHero />
      <section>
        <Features />
        <Steps />
        <Price />
        <CTA />
      </section>
      <Footer />
    </>
  );
}

export default CarePage;
