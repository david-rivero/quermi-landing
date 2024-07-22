import React, { PropsWithChildren } from 'react';

import { Header } from './Header';

interface HeroProps {
  extraClassNames?: string;
  whiteMode?: boolean;
}

export const Hero: React.FC<PropsWithChildren<HeroProps>> = ({ children, extraClassNames, whiteMode }) => {
  const heroClassNames = `flex flex-col ${extraClassNames}`;

  return (
    <div id="hero" className={heroClassNames}>
      <Header whiteMode={!!whiteMode} />
      { children }
    </div>
  );
}
