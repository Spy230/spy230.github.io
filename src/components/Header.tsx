import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-900 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <img 
                  src="/spy230.github.io/images/works/samotcvet.jpg"
                  alt="Самоцвет Логотип" 
                  className="h-12 w-12 rounded-full object-contain bg-white border-2 border-red-600 p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white hover:text-red-500 transition-colors">
                  Самоцвет
                </span>
                <span className="text-xs text-gray-400 -mt-1">
                  Автосервис
                </span>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Сертификаты
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          <a
            href="tel:+79099806800"
            className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Phone size={18} />
            <span className="font-semibold">+7 (909) 980-68-00</span>
          </a>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-red-600">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Сертификаты
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left py-2 text-gray-300 hover:text-red-500 transition-colors font-medium"
            >
              Контакты
            </button>
            <a
              href="tel:+79099806800"
              className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors mt-4"
            >
              <Phone size={18} />
              <span className="font-semibold">+7 (909) 980-68-00</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;