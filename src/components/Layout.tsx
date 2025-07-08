import React from 'react';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page">
      <Preloader />
      <Header />
      <main className="page__container">{children}</main>
      <Footer />
      <Modal />
    </div>
  );
};

export default Layout;