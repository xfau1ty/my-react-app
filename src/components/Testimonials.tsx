import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Анна Петрова',
      position: 'Директор компании "Успех"',
      text: 'Отличная команда профессионалов! Создали для нас современный сайт, который превзошел все ожидания. Рекомендуем!',
      avatar: 'АП'
    },
    {
      name: 'Михаил Иванов',
      position: 'CEO StartupTech',
      text: 'Работали над мобильным приложением. Результат превосходный - интуитивный интерфейс и стабильная работа.',
      avatar: 'МИ'
    },
    {
      name: 'Елена Сидорова',
      position: 'Маркетинг-директор',
      text: 'Лендинг получился просто великолепный! Конверсия выросла в 3 раза. Спасибо за профессиональный подход.',
      avatar: 'ЕС'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Владелец интернет-магазина',
      text: 'Полностью переделали наш e-commerce сайт. Теперь продажи растут каждый месяц. Очень довольны сотрудничеством.',
      avatar: 'ДК'
    },
    {
      name: 'Ольга Морозова',
      position: 'IT-директор',
      text: 'Команда показала высокий уровень экспертизы в веб-разработке. Проект сдан в срок и без замечаний.',
      avatar: 'ОМ'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Отзывы клиентов</h2>
        <p className="testimonials__subtitle">
          Что говорят о нашей работе довольные клиенты
        </p>
        <div className="testimonials__slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true} 
            autoplay={{
              delay: 5000, 
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonials__slide">
                  <div className="testimonials__slide-avatar">
                    {testimonial.avatar}
                  </div>
                  <p className="testimonials__slide-text">"{testimonial.text}"</p>
                  <div className="testimonials__slide-author">{testimonial.name}</div>
                  <div className="testimonials__slide-position">{testimonial.position}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;