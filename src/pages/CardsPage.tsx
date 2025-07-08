import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import servicesData from '../data/services.json';
import { getServiceIcon } from '../utils/icons';
import Card from '../components/ui/Card';

const CardsPage: React.FC = () => {
  const [location, setLocation] = useLocation();
  const [services] = useState(servicesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const limitParam = urlParams.get('limit');
    setItemsPerPage(limitParam ? parseInt(limitParam, 10) : 10);
  }, [location]);

  const handleLimitChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
    setLocation(`/cards${newLimit === 10 ? '' : `?limit=${newLimit}`}`);
  };

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <main className="cards-page">
        <div className="cards-page__container">
          <div className="cards-page__header">
            <h1 className="cards-page__title">Все наши услуги</h1>
            <p className="cards-page__subtitle">
              Полный список наших профессиональных услуг в области IT
            </p>
            
            <div className="cards-page__controls">
              <span className="cards-page__controls-label">Показать по:</span>
              <button 
                className={`cards-page__control-btn ${itemsPerPage === 5 ? 'cards-page__control-btn_active' : ''}`}
                onClick={() => handleLimitChange(5)}
              >
                5
              </button>
              <button 
                className={`cards-page__control-btn ${itemsPerPage === 10 ? 'cards-page__control-btn_active' : ''}`}
                onClick={() => handleLimitChange(10)}
              >
                10
              </button>
              <button 
                className={`cards-page__control-btn ${itemsPerPage === 20 ? 'cards-page__control-btn_active' : ''}`}
                onClick={() => handleLimitChange(20)}
              >
                20
              </button>
            </div>
          </div>

          <div className="cards-page__grid">
            {currentServices.map((service) => (
              <Card
                key={service.id}
                icon={<div className="cards-page__card-icon">{getServiceIcon(service.id)}</div>}
                title={service.title}
                description={service.description}
                className="cards-page__card"
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="cards-page__pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`cards-page__pagination-btn ${currentPage === page ? 'cards-page__pagination-btn_active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}

          <div className="cards-page__footer">
            <Link href="/" className="cards-page__back-btn">
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CardsPage;