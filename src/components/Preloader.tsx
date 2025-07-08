import React, { useState, useEffect } from 'react';

// Константа для времени показа прелоадера
const PRELOADER_DELAY = 1500;

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), PRELOADER_DELAY);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;