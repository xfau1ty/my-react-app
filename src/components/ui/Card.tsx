import React, { memo } from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = memo(({ 
  icon, 
  title, 
  description, 
  children,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`card bg-card rounded-xl p-6 shadow-md transition-all hover:shadow-lg ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="card__icon text-4xl mb-4">{icon}</div>
      <h3 className="card__title text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="card__description text-muted-foreground mb-4">{description}</p>
      {children}
    </div>
  );
});

export default Card;