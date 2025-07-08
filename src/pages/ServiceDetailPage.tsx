import React from 'react';
import { Link } from 'wouter';
import useFetch from '../hooks/useFetch';
import { Service } from '../types';
import { getServiceIcon } from '../utils/icons';
import Card from '../components/ui/Card';

const ServiceDetailPage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const { data: services, loading, error } = useFetch<Service[]>('/data/services.json');
  
  const service = services?.find(s => s.id === parseInt(serviceId, 10));

  if (loading) return <div className="service-detail__loading">Загрузка...</div>;
  
  if (error) return <div className="service-detail__error">Ошибка: {error.message}</div>;
  
  if (!service) return <div className="service-detail__not-found">Услуга не найдена</div>;

  return (
    <div className="service-detail">
      <div className="service-detail__container">
        <Link href="/cards" className="service-detail__back-btn">
          ← Все услуги
        </Link>
        
        <Card
          icon={<div className="service-detail__icon">{getServiceIcon(service.id)}</div>}
          title={service.title}
          description={service.description}
          className="service-detail__card"
        >
          <div className="service-detail__meta">
            <div className="service-detail__meta-item">
              <strong>ID услуги:</strong> {service.id}
            </div>
            <div className="service-detail__meta-item">
              <strong>Категория:</strong> IT-услуги
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetailPage;