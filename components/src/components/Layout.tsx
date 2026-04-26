import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}