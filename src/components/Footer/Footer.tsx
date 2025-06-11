import { FormEvent } from 'react';
import styles from './Footer.module.css';
import logoWhite from '../../assets/images/logoWhite.png';
import facebook from '../../assets/images/Footer_Facebook.png';
import instagram from '../../assets/images/Footer_Instagram.png';
import twitter from '../../assets/images/Footer_Twitter.png';

const Footer = () => {
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log('Subscribe form submitted');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.floatingLogo}>
        <img src={logoWhite} alt="Nixsol Logo" />
      </div>

      <div className={`${styles.main} container`}>
        <div className={styles.contact}>
          <p><span>📞</span> +92 300 1234567</p>
          <p><span>✉</span> info@nixxsol.com</p>
          <p><span>📍</span> Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className={styles.navSubscribe}>
          <div className={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact us</a>
          </div>
          
          <div className={styles.subscribe}>
            <h3 className={styles.subscribeTitle}>Stay in Connection</h3>
            <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className={styles.subscribeInput}
              />
              <button type="submit" className={styles.subscribeBtn}>Contact Us</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.bottomText}>© 2022 Nixxsol All Rights Reserved.</p>
        <div className={styles.bottomSocial}>
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
