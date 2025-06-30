import React from 'react';
import { Link, useLocation } from 'wouter';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [location] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">TechNest</Link>
        <nav className="header__nav">
          <button 
            className="header__nav-link" 
            onClick={() => scrollToSection('home')}
          >
            Главная
          </button>
          <button 
            className="header__nav-link" 
            onClick={() => scrollToSection('services')}
          >
            Услуги
          </button>
          <button 
            className="header__nav-link" 
            onClick={() => scrollToSection('portfolio')}
          >
            Портфолио
          </button>
          <button 
            className="header__nav-link" 
            onClick={() => scrollToSection('testimonials')}
          >
            Отзывы
          </button>
        </nav>
        <button className="header__contact-btn" onClick={onContactClick}>
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;