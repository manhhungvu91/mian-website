import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';

export const metadata: Metadata = {
  title: 'MIAN Apparel — Full-Service Manufacturing Partner',
  description:
    'Vietnam\u2019s full-service garment manufacturing partner. MOQ-flexible, CLO3D-ready, trusted by Zara, H\u0026M, and Costco.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
