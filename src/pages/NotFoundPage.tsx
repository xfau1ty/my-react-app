import React from 'react';
import { Link } from 'wouter';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <div className="not-found__number">404</div>
          <h1 className="not-found__title">Страница не найдена</h1>
          <p className="not-found__description">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
          <div className="not-found__actions">
            <Link href="/" className="not-found__btn not-found__btn_primary">
              На главную
            </Link>
            <Link href="/cards" className="not-found__btn not-found__btn_secondary">
              Наши услуги
            </Link>
          </div>
        </div>
        <div className="not-found__illustration">
          <div className="not-found__icon">🔍</div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;