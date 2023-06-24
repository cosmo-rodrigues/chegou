'use client';

import NavBar from '../components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body id='__next' suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
