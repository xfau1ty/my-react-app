import React, { useState } from 'react';
import { Switch, Route } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyLogos from './components/CompanyLogos';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Preloader from './components/Preloader';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/style.css';

// Главная страница
const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page">
      <Preloader />
      <Header onContactClick={handleContactClick} />
      <main className="page__container">
        <Hero />
        <Services limit={3} showViewAllButton={true} />
        <CompanyLogos />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/cards" component={CardsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
