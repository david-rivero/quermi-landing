import '@/styles/globals.css';
import React from 'react';

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <body>
        { children }
      </body>
    </html>
  );
}
