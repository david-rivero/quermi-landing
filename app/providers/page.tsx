import React from 'react';

import {
  Footer,
  Features,
  Steps,
  Price,
  CTA,
  Hero,
} from '@/app/common/components';

const CareGiversPage: React.FC = () => {
  return (
    <>
      <Hero extraClassNames="inset-0 -z-10 h-screen w-screen bg-q-third text-q-background" whiteMode={true}>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-bold mb-5 font-['Raleway_Bold'] text-q-background">Give care services for the people</h1>
          <p>Install Quermi on your phone and start providing your care services for thousand of people.</p>
        </div>
      </Hero>
      <section>
        <Features bgColor="q-second" />
        <Steps />
        <Price bgColor="bg-q-fourth" color="text-q-background" borderColor="border-q-background" lightMode={true} />
        <CTA bgColor="bg-q-second" />
      </section>
      <Footer />
    </>
  );
}

export default CareGiversPage;
