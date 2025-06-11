import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import psLab from '../../assets/images/ps_lab.png';

interface Service {
  icon: string;
  title: string;
  text: string;
}

const CardList = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
      .then(response => {
        if (!response.ok) throw new Error('Failed to load services');
        return response.json();
      })
      .then(postsData => {
        const servicesData = postsData.map((post: any) => ({
          icon: psLab,
          title: post.title.substring(0, 20) + (post.title.length > 20 ? '...' : ''),
          text: post.body.substring(0, 60) + (post.body.length > 60 ? '...' : ''),
        }));
        setServices(servicesData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Unable to load services. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading services...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.grid}>
      {services.map((service, index) => (
        <Card
          key={index}
          icon={service.icon}
          title={service.title}
          text={service.text}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};

export default CardList;