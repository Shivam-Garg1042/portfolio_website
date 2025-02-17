
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const App = () => {
  return (
    <>
      <Navbar />
      
        <Hero />
        <Products />
        <Contact />
     
      <Footer />
      <FloatingContact/>
    </>
  );
};

export default App;