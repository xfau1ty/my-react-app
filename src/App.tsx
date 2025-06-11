import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import BookMeeting from './components/BookMeeting/BookMeeting';
import Certifications from './components/Certifications/Certifications';
import './assets/styles/global.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <BookMeeting />
      <Certifications />
    </Layout>
  );
}

export default App;
