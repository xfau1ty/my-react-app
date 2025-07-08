import React from 'react';
import { Switch, Route } from 'wouter';
import { ModalProvider } from './context/ModalContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyLogos from './components/CompanyLogos';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CardsPage from './pages/CardsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactSection from './components/ContactSection';
import './styles/style.css';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Services showViewAllButton={true} />
    <CompanyLogos />
    <Portfolio />
    <Testimonials />
    <ContactSection />
  </>
);

function App() {
  return (
    <ModalProvider>
      <Switch>
        <Route path="/" component={() => <Layout><HomePage /></Layout>} />
        <Route path="/cards" component={() => <Layout><CardsPage /></Layout>} />
        
        <Route path="/services/:id">
          {(params) => <Layout><ServiceDetailPage serviceId={params.id} /></Layout>}
        </Route>
        
        <Route path="/:rest*" component={NotFoundPage} />
      </Switch>
    </ModalProvider>
  );
}

export default App;