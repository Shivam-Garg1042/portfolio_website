
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CustomerCare from './components/CustomerCare';
import AboutUs from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      
        <Hero />
        <AboutUs/>
        <Products />
        <Contact />
      <CustomerCare/>
      <Footer />
      <FloatingContact/>
    </>
  );
};

export default App;