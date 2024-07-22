import React from 'react';

export const SectionTitle: React.FC = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <h2 className="text-center text-4xl mb-12 font-['Raleway_Bold']">{children}</h2>
  );
};
