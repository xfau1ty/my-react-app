import React, { useCallback, useMemo } from 'react';
import { Link, useLocation } from 'wouter';
import { useModal } from '../context/ModalContext';

const Header: React.FC = () => {
  const [location] = useLocation();
  const { openModal } = useModal();
  
  const scrollToSection = useCallback((sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  const navItems = useMemo(() => [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'testimonials', label: 'Отзывы' }
  ], []);

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo">TechNest</Link>
        <nav className="header__nav">
          {navItems.map((item) => (
            <button 
              key={item.id}
              className="header__nav-link" 
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="header__contact-btn" onClick={openModal}>
          Заявка
        </button>
      </div>
    </header>
  );
};

export default Header;