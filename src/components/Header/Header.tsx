import { useState } from 'react';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import logoBlack from '../../assets/images/logoBlack.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logoBlack} alt="Nixsol Logo" />
        </div>

        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#services" onClick={closeMenu}>
                IT Services <span className={styles.navDot}></span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            </li>
            <li className={styles.navItem}>
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  closeMenu();
                }} 
                className={styles.navBtn}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
