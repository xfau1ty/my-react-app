import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Интернет-магазин',
      description: 'Современный e-commerce сайт с интегрированной системой оплаты и управления заказами.',
      image: '🛒',
      link: '#'
    },
    {
      title: 'Корпоративный сайт',
      description: 'Представительский сайт компании с CMS для управления контентом.',
      image: '🏢',
      link: '#'
    },
    {
      title: 'Мобильное приложение',
      description: 'Cross-platform приложение для iOS и Android с современным дизайном.',
      image: '📱',
      link: '#'
    },
    {
      title: 'Веб-приложение',
      description: 'SPA приложение с реальным временем обновления данных.',
      image: '⚡',
      link: '#'
    },
    {
      title: 'Лендинг страница',
      description: 'Высококонверсионная посадочная страница с оптимизацией под поисковики.',
      image: '🎯',
      link: '#'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Наше портфолио</h2>
        <p className="portfolio__subtitle">
          Примеры успешно реализованных проектов разной сложности
        </p>
        <div className="portfolio__slider">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio__slide">
                  <div className="portfolio__slide-image">
                    {project.image}
                  </div>
                  <div className="portfolio__slide-content">
                    <h3 className="portfolio__slide-title">{project.title}</h3>
                    <p className="portfolio__slide-description">{project.description}</p>
                    <a href={project.link} className="portfolio__slide-link">Подробнее →</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;