import styles from './Certifications.module.css';
import cert1 from '../../assets/images/img_white1.png';
import cert2 from '../../assets/images/img_white2.png';
import cert3 from '../../assets/images/img_white3.png';
import cert4 from '../../assets/images/img_white4.png';
import cert5 from '../../assets/images/img_white5.png';

const Certifications = () => {
  const certifications = [
    { src: cert1, alt: 'ISO 27001:2013' },
    { src: cert2, alt: 'ISO 9001:2015' },
    { src: cert3, alt: 'PSEB' },
    { src: cert4, alt: 'POSHA' },
    { src: cert5, alt: 'SECP' },
  ];

  return (
    <section className={styles.certifications}>
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.item}>
            <img src={cert.src} alt={cert.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
