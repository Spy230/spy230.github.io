import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GallerySimple from './components/GallerySimple';
import Certificates from './components/Certificates';
import Reviews from './components/Reviews';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <GallerySimple />
        <Certificates />
        <Reviews />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;