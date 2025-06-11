import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './Testimonials.module.css';
import avatar1 from '../../assets/images/avatar-1.png';
import avatar2 from '../../assets/images/avatar-2.png';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: avatar1,
      name: 'Adam Smith',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed eiusmod est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.'
    },
    {
      avatar: avatar2,
      name: 'Jane Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed eiusmod est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada.'
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.content}>
        <h2 className={styles.title}>Testimonials</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.
        </p>
        <a href="#more" className={styles.btn}>Explore More &gt;</a>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className={styles.cardAvatar} 
                  />
                  <h3 className={styles.cardName}>{testimonial.name}</h3>
                  <p className={styles.cardQuote}>"{testimonial.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
