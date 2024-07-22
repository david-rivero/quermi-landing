import React from 'react';
import '@/styles/globals.css';

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href="quermi-icon.ico" type="image/x-icon" />
        <title>Quermi</title>
      </head>
      <body className="font-['Raleway'] text-q-text">
        { children }
      </body>
    </html>
  );
}
