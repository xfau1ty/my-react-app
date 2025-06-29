import React, { useState } from 'react';
import { Switch, Route } from 'wouter';
import Header from './components/portfolio/Header';
import Hero from './components/portfolio/Hero';
import Services from './components/portfolio/Services';
import CompanyLogos from './components/portfolio/CompanyLogos';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/portfolio/Testimonials';
import Footer from './components/portfolio/Footer';
import Modal from './components/portfolio/Modal';
import Preloader from './components/portfolio/Preloader';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/portfolio/style.css';

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
