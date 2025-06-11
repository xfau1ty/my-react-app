import styles from './Hero.module.css';
import heroIllustration from '../../assets/images/hero-illustration.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleBlack}>Bridging</span>
          <span className={styles.titleRed}>the gap between ideas and reality</span>
        </h1>
      </div>
      <div className={styles.illustration}>
        <img src={heroIllustration} alt="Bridging ideas and reality illustration" />
      </div>
    </section>
  );
};

export default Hero;
