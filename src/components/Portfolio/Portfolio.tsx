import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './Portfolio.module.css';

// Импортируйте изображения
import portfolioImage1 from '../../assets/images/portfolio-image1.png';
import portfolioImage2 from '../../assets/images/portfolio-image2.png';

const Portfolio = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [previewIndex, setPreviewIndex] = useState(1);

  const portfolioImages = [
    { src: portfolioImage1, alt: 'Portfolio project 1' },
    { src: portfolioImage2, alt: 'Portfolio project 2' },
  ];

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        const nextIndex = (swiper.realIndex + 1) % portfolioImages.length;
        setPreviewIndex(nextIndex);
      });
    }
  }, [swiper, portfolioImages.length]);

  return (
    <section className={styles.portfolio}>
      <div className={styles.content}>
        <h2 className={styles.title}>Portfolio</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.
        </p>
        <a href="#" className={styles.btn}>More Portfolio →</a>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryMain}>
          <Swiper
            onSwiper={setSwiper}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className={styles.swiper}
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className={styles.galleryImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.galleryPreviewWrapper}>
          <div className={styles.galleryPreview}>
            <img 
              src={portfolioImages[previewIndex].src} 
              alt={portfolioImages[previewIndex].alt} 
              className={styles.galleryImage} 
            />
          </div>
          <div className={styles.galleryNavButtons}>
            <button 
              className={styles.galleryNavButton} 
              onClick={() => swiper?.slidePrev()}
            >
              ←
            </button>
            <button 
              className={styles.galleryNavButton} 
              onClick={() => swiper?.slideNext()}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
