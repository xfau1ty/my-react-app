import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    
    onClose();
    setFormData({ name: '', email: '' });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('page__no-scroll');
    } else {
      document.body.classList.remove('page__no-scroll');
    }

    return () => {
      document.body.classList.remove('page__no-scroll');
    };
  }, [isOpen]);

  return (
    <div 
      className={`modal ${isOpen ? 'modal_opened' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">Свяжитесь с нами</h2>
          <button className="modal__close" onClick={onClose}>×</button>
        </div>
        <div className="modal__content">
          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__field">
              <label className="modal__label" htmlFor="name">Имя</label>
              <input
                className="modal__input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="email">Email</label>
              <input
                className="modal__input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="modal__buttons">
              <button type="submit" className="modal__button modal__button_primary">
                ОК
              </button>
              <button 
                type="button" 
                className="modal__button modal__button_secondary"
                onClick={onClose}
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;