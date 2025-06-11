import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted');
    onClose();
  };

  return (
    <div 
      className={`${styles.modal} ${isOpen ? styles.active : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.wrapper}>
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        <h2 className={styles.title}>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="modal-name">Your Name</label>
            <input 
              type="text" 
              id="modal-name" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="modal-phone">Your Phone</label>
            <input 
              type="tel" 
              id="modal-phone" 
              name="phone" 
              placeholder="Enter your phone" 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="modal-email">Email Address</label>
            <input 
              type="email" 
              id="modal-email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="modal-message">Message</label>
            <textarea 
              id="modal-message" 
              name="message" 
              placeholder="Write your message" 
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
