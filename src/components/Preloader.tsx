import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      //  задержка
      setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      // Если документ уже загружен
      setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`preloader ${!isVisible ? 'preloader_hidden' : ''}`}>
      <div>
        <div className="preloader__spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;