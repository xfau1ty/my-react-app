import React, { useState, useEffect } from 'react';
import { useModal } from '../context/ModalContext';

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Имя обязательно';
    if (!email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Некорректный email';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    console.log('Форма отправлена:', { name, email });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setErrors({});
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
      resetForm();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('page__no-scroll');
    } else {
      document.body.classList.remove('page__no-scroll');
    }

    return () => document.body.classList.remove('page__no-scroll');
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="modal modal_opened" onClick={handleOverlayClick}>
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">Напишите нам</h2>
          <button 
            className="modal__close" 
            onClick={() => {
              closeModal();
              resetForm();
            }}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
        <div className="modal__content">
          <form className="modal__form" onSubmit={handleSubmit} noValidate>
            <div className="modal__field">
              <label className="modal__label" htmlFor="name">Имя</label>
              <input
                className={`modal__input ${errors.name ? 'modal__input_error' : ''}`}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="modal__error">{errors.name}</p>
              )}
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="email">Email</label>
              <input
                className={`modal__input ${errors.email ? 'modal__input_error' : ''}`}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="modal__error">{errors.email}</p>
              )}
            </div>
            <div className="modal__buttons">
              <button 
                type="submit" 
                className="modal__button modal__button_primary"
              >
                Отправить
              </button>
              <button 
                type="button" 
                className="modal__button modal__button_secondary"
                onClick={() => {
                  closeModal();
                  resetForm();
                }}
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