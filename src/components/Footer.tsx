import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <h3 className="footer__section-title">О компании</h3>
            <p className="footer__section-text">
              Мы создаем современные веб-решения, которые помогают бизнесу развиваться в цифровой среде.
            </p>
          </div>
          <div>
            <h3 className="footer__section-title">Услуги</h3>
            <a href="#" className="footer__link">Веб-разработка</a>
            <a href="#" className="footer__link">Мобильные приложения</a>
            <a href="#" className="footer__link">UI/UX Дизайн</a>
            <a href="#" className="footer__link">Техподдержка</a>
          </div>
          <div>
            <h3 className="footer__section-title">Контакты</h3>
            <p className="footer__section-text">Email: info@TechNest.com</p>
            <p className="footer__section-text">Телефон: +7 (999) 123-45-67</p>
            <p className="footer__section-text">Адрес: г. Москва, ул. Примерная, 123</p>
          </div>
          <div>
            <h3 className="footer__section-title">Социальные сети</h3>
            <a href="#" className="footer__link">Facebook</a>
            <a href="#" className="footer__link">Instagram</a>
            <a href="#" className="footer__link">LinkedIn</a>
            <a href="#" className="footer__link">Telegram</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 TechNest. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;