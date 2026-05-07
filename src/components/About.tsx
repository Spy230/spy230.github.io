import { useState, useEffect } from 'react';
import { Target, Users, Wrench, TrendingUp } from 'lucide-react';
import { getAboutBackgroundStyle } from '../utils/imageUtils';

const About = () => {
  const [bgStyle, setBgStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setBgStyle(getAboutBackgroundStyle());
    };
    
    // Проверяем сразу при монтировании
    checkMobile();
    
    // Добавляем debounce для resize
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-900 relative" style={bgStyle}>
      {/* Темный оверлей - очень прозрачный на мобильных */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isMobile 
          ? 'from-gray-900/10 via-gray-800/5 to-gray-900/10' 
          : 'from-gray-900/30 via-gray-800/25 to-gray-900/30'
      }`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            О компании Самоцвет
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Профессиональный подход к обслуживанию вашего автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="lg:col-span-1">
            <img
              src="/images/works/photo_2025-12-25_13-09-14.jpg"
              alt="АвтоТехЦентр Самоцвет - наш автосервис"
              loading="eager"
              className="rounded-xl shadow-lg w-full border border-gray-700"
              onLoad={() => {
                console.log('✅ Изображение загружено успешно!');
              }}
              onError={(e) => {
                console.error('❌ Ошибка загрузки изображения');
                const target = e.target as HTMLImageElement;
                target.src = '/images/works/samotcvet.jpg';
              }}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Более 10 лет на рынке услуг АвтоТехЦентра
            </h3>
            <p className="text-gray-300 leading-relaxed">
              АвтоТехЦентр "Самоцвет" специализируется на комплексном техническом обслуживании
              и ремонте автомобилей всех марок. Мы используем современное
              диагностическое оборудование и оригинальные запчасти, что гарантирует
              высокое качество выполненных работ.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Команда опытных механиков с профильным образованием и регулярным
              повышением квалификации обеспечивает профессиональный подход к решению
              любых технических задач. Мы ценим время наших клиентов и стремимся
              выполнять работы в согласованные сроки без потери качества.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Прозрачность ценообразования, гарантия на все виды работ и внимательное
              отношение к каждому автомобилю — основные принципы нашей работы.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700 bg-opacity-60">
            <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">лет опыта</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700 bg-opacity-60">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-400">довольных клиентов</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700 bg-opacity-60">
            <Wrench className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
            <p className="text-gray-400">мастеров</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700 bg-opacity-60">
            <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
            <p className="text-gray-400">положительных отзывов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;