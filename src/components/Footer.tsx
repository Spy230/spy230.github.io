import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/spy230.github.io/images/works/samotcvet.jpg"
                alt="Самоцвет Логотип" 
                className="h-10 w-10 rounded-full object-cover border-2 border-red-600 bg-white"
              />
              <h3 className="text-xl font-bold">Самоцвет</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональный автосервис с 2014 года. Качественный ремонт и обслуживание автомобилей.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection('certificates')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Сертификаты
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Контакты
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Телефоны</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Основной телефон</p>
                <a
                  href="tel:+79099806800"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+7 (909) 980-68-00</span>
                </a>
              </div>
              <div className="space-y-1">
                <a
                  href="tel:+74993910051"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+7 (499) 391-00-51</span>
                </a>
                <a
                  href="tel:+79253910051"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+7 (925) 391-00-51</span>
                </a>
              </div>
              <a
                href="mailto:samotsvett@yandex.ru"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>samotsvett@yandex.ru</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Москва, Зеленоград,</p>
                  <p>улица Андреевка, 31</p>
                  <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                    Открыть на карте →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-white font-medium">Ежедневно: 9:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Самоцвет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;