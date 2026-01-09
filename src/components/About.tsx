import { Target, Users, Wrench, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              src="/spy230.github.io/images/works/photo_2025-12-25_13-09-14.jpg"
              alt="Наш автосервис - мастер рядом с автомобилем"
              loading="eager"
              className="rounded-xl shadow-lg w-full border border-gray-700"
              onLoad={() => {
                console.log('✅ Изображение photo_2025-12-25_13-09-14.jpg загружено успешно!');
              }}
              onError={(e) => {
                console.error('❌ Ошибка загрузки изображения photo_2025-12-25_13-09-14.jpg');
                console.log('Пробуем fallback изображение...');
                // Fallback на одно из доступных изображений
                const target = e.target as HTMLImageElement;
                target.src = '/spy230.github.io/images/works/samotcvet.jpg';
                target.onerror = () => {
                  target.src = '/spy230.github.io/images/works/attachment-0.jpeg';
                };
              }}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Более 10 лет на рынке автосервисных услуг
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Автосервис "Самоцвет" специализируется на комплексном техническом обслуживании
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
          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700">
            <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">лет опыта</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
            <p className="text-gray-400">довольных клиентов</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700">
            <Wrench className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
            <p className="text-gray-400">мастеров</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-700">
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