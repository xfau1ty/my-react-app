import styles from './Clients.module.css';
import logo1 from '../../assets/images/logo_black1.png';
import logo2 from '../../assets/images/logo_black2.png';
import logo3 from '../../assets/images/logo_black3.png';
import logo4 from '../../assets/images/logo_black4.png';
import logo5 from '../../assets/images/logo_black5.png';

const Clients = () => {
  const clients = [
    { src: logo1, alt: 'MentorCity' },
    { src: logo2, alt: 'Postal Methods' },
    { src: logo3, alt: 'hstay' },
    { src: logo4, alt: 'Subway' },
    { src: logo5, alt: 'HomeVisit' },
  ];

  return (
    <section className={styles.clients}>
      <div className={styles.grid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.item}>
            <img src={client.src} alt={client.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
