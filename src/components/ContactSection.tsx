import React from 'react';
import { useModal } from '../context/ModalContext';

const ContactSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">
        <div className="contact-section__content">
          <h2 className="contact-section__title">Свяжитесь с нами</h2>
          <p className="contact-section__text">
            Готовы начать проект? Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время
          </p>
          <button 
            className="contact-section__button"
            onClick={openModal}
          >
            Отправить заявку
          </button>
        </div>
        <div className="contact-section__info">
          <div className="contact-section__info-item">
            <div className="contact-section__info-icon">✉️</div>
            <div>
              <h3 className="contact-section__info-title">Email</h3>
              <p className="contact-section__info-text">info@technest.com</p>
            </div>
          </div>
          <div className="contact-section__info-item">
            <div className="contact-section__info-icon">📞</div>
            <div>
              <h3 className="contact-section__info-title">Телефон</h3>
              <p className="contact-section__info-text">+7 (999) 123-45-67</p>
            </div>
          </div>
          <div className="contact-section__info-item">
            <div className="contact-section__info-icon">📍</div>
            <div>
              <h3 className="contact-section__info-title">Адрес</h3>
              <p className="contact-section__info-text">г. Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;