import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import servicesData from '../data/services.json';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  limit?: number;
  showViewAllButton?: boolean;
}

const Services: React.FC<ServicesProps> = ({ limit = 3, showViewAllButton = true }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // API запрос
    // const fetchServices = async () => {
    //   const response = await fetch('/api/services');
    //   const data = await response.json();
    //   setServices(data.slice(0, limit));
    // };
    
    // локальные данные
    setServices(servicesData.slice(0, limit));
  }, [limit]);

  const getServiceIcon = (id: number) => {
    const icons = ['💻', '📱', '🎨', '⚡', '🔧', '📊', '🛡️', '🔌', '🔒', '⚙️', 
                   '🎯', '📈', '🆘', '🚀', '⛓️', '🤖', '📡', '💳', '🔄', '💼'];
    return icons[id - 1] || '⭐';
  };

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Наши услуги</h2>
        <p className="services__subtitle">
          Предлагаем полный спектр услуг для развития вашего цифрового присутствия
        </p>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__card-icon">{getServiceIcon(service.id)}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
            </div>
          ))}
        </div>
        {showViewAllButton && (
          <div className="services__view-all">
            <Link href="/cards" className="services__view-all-btn">
              Посмотреть все услуги
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;