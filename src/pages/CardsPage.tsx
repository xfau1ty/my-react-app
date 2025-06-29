import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import Header from '../components/portfolio/Header';
import Footer from '../components/portfolio/Footer';
import Modal from '../components/portfolio/Modal';
import servicesData from '../data/services.json';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CardsPage: React.FC = () => {
  const [location, setLocation] = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Получаем параметры из URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const limitParam = urlParams.get('limit');
    
    if (limitParam === '5') {
      setItemsPerPage(5);
    } else if (limitParam === '20') {
      setItemsPerPage(20);
    } else {
      setItemsPerPage(10);
    }
    
    setServices(servicesData);
  }, [location]);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const getServiceIcon = (id: number) => {
    const icons = ['💻', '📱', '🎨', '⚡', '🔧', '📊', '🛡️', '🔌', '🔒', '⚙️', 
                   '🎯', '📈', '🆘', '🚀', '⛓️', '🤖', '📡', '💳', '🔄', '💼'];
    return icons[id - 1] || '⭐';
  };

  const handleLimitChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
    
    // Обновляем URL без перезагрузки страницы
    const newUrl = newLimit === 10 ? '/cards' : `/cards?limit=${newLimit}`;
    window.history.pushState({}, '', newUrl);
  };

  // Рассчитываем данные для пагинации
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <Header onContactClick={handleContactClick} />
      <main className="cards-page">
        <div className="cards-page__container">
          <div className="cards-page__header">
            <Link href="/" className="cards-page__back-btn">
              ← Вернуться на главную
            </Link>
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
              <div key={service.id} className="cards-page__card">
                <div className="cards-page__card-icon">{getServiceIcon(service.id)}</div>
                <h3 className="cards-page__card-title">{service.title}</h3>
                <p className="cards-page__card-description">{service.description}</p>
              </div>
            ))}
          </div>

          {itemsPerPage === 5 && totalPages > 1 && (
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
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default CardsPage;