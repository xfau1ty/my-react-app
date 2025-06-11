import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const countTo = +(el.dataset.count || 0);
          let current = 0;

          const step = () => {
            current += Math.ceil(countTo / 50);
            if (current < countTo) {
              el.textContent = `${current}+`;
              requestAnimationFrame(step);
            } else {
              el.textContent = `${countTo}+`;
            }
          };

          step();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.6 });

    counters?.forEach(counter => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.title}>About Company</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien. 
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. 
          Tellus nunc scelerisque dictum sagittis eiusmod urna egestas quam. 
          In ornare nisl leo odio magna.
        </p>
      </div>
      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-count="100">0+</span>
          <span className={styles.statText}>Happy Clients</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-count="5">0+</span>
          <span className={styles.statText}>Years in Business</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-count="50">0+</span>
          <span className={styles.statText}>Total Members</span>
        </div>
      </div>
    </section>
  );
};

export default About;
