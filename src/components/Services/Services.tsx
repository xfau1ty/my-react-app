import styles from './Services.module.css';
import CardList from '../CardList/CardList';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <h2 className={styles.title}>Services</h2>
      </div>
      <CardList />
    </section>
  );
};

export default Services;