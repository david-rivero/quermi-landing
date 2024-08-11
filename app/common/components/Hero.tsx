import React, { PropsWithChildren } from 'react';

import { Header } from './Header';

interface HeroProps {
  extraClassNames?: string;
  whiteMode?: boolean;
  showMenu?: boolean;
}

export const Hero: React.FC<PropsWithChildren<HeroProps>> = ({ children, extraClassNames, whiteMode, showMenu = true }) => {
  const heroClassNames = `flex flex-col ${extraClassNames}`;

  return (
    <div id="hero" className={heroClassNames}>
      <Header whiteMode={!!whiteMode} showMenu={showMenu} />
      { children }
    </div>
  );
}
