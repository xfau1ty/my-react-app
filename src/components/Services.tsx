import React from 'react';
import { Link } from 'wouter';
import servicesData from '../data/services.json';
import { Service } from '../types';
import { getServiceIcon } from '../utils/icons';
import Card from './ui/Card';

interface ServicesProps {
  limit?: number;
  showViewAllButton?: boolean;
}

const Services: React.FC<ServicesProps> = ({ 
  limit = 3, 
  showViewAllButton = true 
}) => {
  const services = servicesData.slice(0, limit) as Service[];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Наши услуги</h2>
        <p className="services__subtitle">
          Предлагаем полный спектр услуг для развития вашего цифрового присутствия
        </p>
        <div className="services__grid">
          {services.map((service) => (
            <Card
              key={service.id}
              icon={<div className="services__card-icon">{getServiceIcon(service.id)}</div>}
              title={service.title}
              description={service.description}
              className="services__card"
            />
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