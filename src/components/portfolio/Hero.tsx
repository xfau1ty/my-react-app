import React from 'react';
import heroImage from '/frame_1751208832684.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">TechNest - Ваше технологическое гнездо</h1>
          <p className="hero__subtitle">
            Создаем инновационные IT-решения для развития вашего бизнеса
          </p>
          <button className="hero__cta">Узнать больше</button>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="TechNest - инновационные IT-решения" />
        </div>
      </div>
    </section>
  );
};

export default Hero;