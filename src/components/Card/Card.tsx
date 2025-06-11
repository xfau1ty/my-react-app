import styles from './Card.module.css';

interface CardProps {
  icon: string;
  title: string;
  text: string;
  animationDelay?: number;
}

const Card = ({ icon, title, text, animationDelay = 0 }: CardProps) => {
  return (
    <div
      className={`${styles.card} ${styles.visible}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <img src={icon} alt={`${title} icon`} className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default Card;