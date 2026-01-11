import { Target, Users, Wrench, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Автотехцентр Самоцвет - где починить авто в Зеленограде
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ремонт и обслуживание авто, техобслуживание автомобиля в Зеленограде и Андреевке. Где ближайший автосервис? Автосервис рядом со мной - автосервис Москва.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="lg:col-span-1">
            <img
              src="/spy230.github.io/images/works/photo_2025-12-25_13-09-14.jpg"
              alt="Автосервис Зеленоград - ремонт и обслуживание авто, техобслуживание автомобиля, автотехцентр Самоцвет, где починить авто, автосервис рядом со мной"
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
              Более 10 лет - лучший автосервис в Москве
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Автосервис "Самоцвет" в Зеленограде и Андреевке - это ремонт и обслуживание авто, 
              техобслуживание автомобиля всех марок. Автотехцентр с современным диагностическим 
              оборудованием. Где починить авто? Автосервис рядом со мной - автосервис на карте 
              в Зеленограде. Автосервис открытый сейчас!
            </p>
            <p className="text-gray-300 leading-relaxed">
              Как починить машину в Москве? Наш автосервис Москва предлагает полный спектр услуг: 
              диагностика машины рядом, автосервис для ремонта двигателя, где отремонтировать кузов авто, 
              где заменить масло в авто, шиномонтаж рядом со мной. Сколько стоит ТО в автосервисе - 
              прозрачные цены на все виды работ.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Где ближайший автосервис? Автосервис Андреевка и ремонт Зеленоград - мы находимся 
              рядом с вами. Автосервис авто с гарантией качества. Ремонт авто в Зеленограде от 
              профессионалов!
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