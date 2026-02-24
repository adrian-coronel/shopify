import { ReactNode } from 'react';
import { Header } from './Header';
import Navbar from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
