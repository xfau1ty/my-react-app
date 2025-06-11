import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
