import { CheckCircle, Clock, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-red-500">Самоцвет</span>
            <span className="block text-white mt-2">Профессиональный автосервис</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Качественный сервис с гарантией, современное оборудование и опытные мастера.
            Все виды работ по диагностике и ремонту автомобилей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Посмотреть услуги
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="bg-gray-700 text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl border-2 border-red-500"
            >
              Связаться с нами
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500">
              <CheckCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Гарантия качества</h3>
              <p className="text-gray-400">На все виды работ предоставляется гарантия</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Быстрое обслуживание</h3>
              <p className="text-gray-400">Оперативный ремонт без задержек</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500">
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Сертифицированные мастера</h3>
              <p className="text-gray-400">Опытные специалисты с подтвержденной квалификацией</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Более 1000 клиентов</h3>
              <p className="text-gray-400">Доверяют нам обслуживание своих авто</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
