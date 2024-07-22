import React, { PropsWithChildren } from 'react';

export const SectionTitle: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <h2 className="text-center text-4xl mb-12 font-['Raleway_Bold']">{children}</h2>
  );
};
