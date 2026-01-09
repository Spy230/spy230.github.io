import { Wrench, Search, Settings, PaintBucket, Cog, ChevronDown, ChevronUp, Disc } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const mainServiceCategories = [
    {
      icon: Search,
      title: 'Диагностика и ТО',
      services: [
        { name: 'Компьютерная диагностика (комплексная)', price: '1 500 ₽' },
        { name: 'Замена масла ДВС', price: '800 ₽' },
        { name: 'Замена воздушного фильтра', price: '500 ₽' },
        { name: 'Замена салонного фильтра', price: '600 ₽' },
      ],
    },
    {
      icon: Wrench,
      title: 'Ремонт двигателя',
      services: [
        { name: 'Замена ремня ГРМ (4 цилиндра)', price: '8 000 ₽' },
        { name: 'Замена цепи ГРМ (4 цилиндра)', price: '12 000 ₽' },
        { name: 'Капитальный ремонт двигателя (4 цил.)', price: '75 000 ₽' },
        { name: 'Замена двигателя (4 цилиндра)', price: '25 000 ₽' },
      ],
    },
    {
      icon: Disc,
      title: 'Тормозная система',
      services: [
        { name: 'Проточка тормозных дисков', price: '4 500 ₽' },
        { name: 'Замена передних тормозных колодок', price: '1 600 ₽' },
        { name: 'Замена задних тормозных колодок', price: '1 800 ₽' },
        { name: 'Замена тормозной жидкости', price: '1 800 ₽' },
      ],
    },
    {
      icon: Settings,
      title: 'Ходовая часть',
      services: [
        { name: 'Замена передней стойки амортизатора', price: '2 400 ₽' },
        { name: 'Замена нижнего рычага передней подвески', price: '1 600 ₽' },
        { name: 'Замена ступицы переднего колеса', price: '2 800 ₽' },
        { name: 'Регулировка развал-схождения', price: '3 500 ₽' },
      ],
    },
    {
      icon: PaintBucket,
      title: 'Малярные работы',
      services: [
        { name: 'Окрас автомобиля', price: '200 000 ₽' },
        { name: 'Полировка кузова', price: '30 000 ₽' },
        { name: 'Окрас капота/крышки багажника', price: '20 000 ₽' },
        { name: 'Замена лобового стекла (вклейка)', price: '7 500 ₽' },
      ],
    },
    {
      icon: Cog,
      title: 'Трансмиссия',
      services: [
        { name: 'Замена сцепления', price: '8 000 ₽' },
        { name: 'Замена механической КПП', price: '15 000 ₽' },
        { name: 'Замена автоматической КПП', price: '20 000 ₽' },
        { name: 'Замена масла в АКПП', price: '2 000 ₽' },
      ],
    },
  ];

  const allServices = [
    {
      category: 'Тормозная система',
      services: [
        { name: 'Проточка тормозных дисков', price: '4 500 ₽' },
        { name: 'Замена передних тормозных колодок, дисковые тормоза', price: '1 600 ₽' },
        { name: 'Замена задних тормозных колодок-дисковых (комплект)', price: '1 800 ₽' },
        { name: 'Замена тормозной жидкости', price: '1 800 ₽' },
        { name: 'Замена передних тормозных дисков (комплект)', price: '2 600 ₽' },
      ]
    },
    {
      category: 'Малярные и кузовные работы',
      services: [
        { name: 'Окрас автомобиля', price: '200 000 ₽' },
        { name: 'Полировка кузова', price: '30 000 ₽' },
        { name: 'Окрас капота / крышки багажника', price: '20 000 ₽' },
        { name: 'Окрас бампера', price: '15 000 ₽' },
        { name: 'Замена лобового стекла (вклейка) с учетом клея', price: '7 500 ₽' },
      ]
    },
    {
      category: 'Рулевое управление',
      services: [
        { name: 'Замена рулевой рейки без снятия подрамника', price: '4 500 ₽' },
        { name: 'Регулировка развал-схождение (полный привод)', price: '3 500 ₽' },
        { name: 'Замена насоса ГУР', price: '3 000 ₽' },
        { name: 'Замена карданного вала рулевой колонки', price: '3 000 ₽' },
        { name: 'Замена рулевой тяги и наконечника', price: '1 800 ₽' },
      ]
    },
    {
      category: 'Трансмиссия',
      services: [
        { name: 'Замена автоматической КПП (полный привод)', price: '20 000 ₽' },
        { name: 'Замена гидротрансформатора автоматической коробки передач', price: '18 000 ₽' },
        { name: 'Замена механической КПП (полный привод)', price: '15 000 ₽' },
        { name: 'Замена сцепления механической коробки передач', price: '8 000 ₽' },
        { name: 'Замена раздаточной коробки', price: '5 500 ₽' },
      ]
    },
    {
      category: 'Двигатель',
      services: [
        { name: 'Капитальный ремонт двигателя (без запчастей, 4 цилиндра)', price: '75 000 ₽' },
        { name: 'Замена двигателя — снять / поставить (4 цилиндра)', price: '25 000 ₽' },
        { name: 'Замена прокладки головки блока цилиндров', price: '20 000 ₽' },
        { name: 'Замена маслосъемных колпачков без снятия ГБЦ', price: '15 000 ₽' },
        { name: 'Замена цепи ГРМ (4 цилиндра)', price: '12 000 ₽' },
      ]
    },
    {
      category: 'Охлаждение-кондиционер',
      services: [
        { name: 'Замена радиатора отопителя салона (со снятием приборной панели)', price: '12 000 ₽' },
        { name: 'Замена основного радиатора (со снятием бампера)', price: '8 000 ₽' },
        { name: 'Замена интеркуллера (со снятием бампера)', price: '5 500 ₽' },
        { name: 'Замена радиатора кондиционера', price: '3 500 ₽' },
        { name: 'Замена компрессора', price: '3 500 ₽' },
      ]
    },
    {
      category: 'Выхлопная система',
      services: [
        { name: 'Удаление катализатора (без прошивки)', price: '4 500 ₽' },
        { name: 'Замена гофры выхлопной системы', price: '3 500 ₽' },
        { name: 'Демонтаж/монтаж выпускного коллектора', price: '3 500 ₽' },
        { name: 'Замена резонатора', price: '2 000 ₽' },
        { name: 'Замена глушителя', price: '1 500 ₽' },
      ]
    },
    {
      category: 'Ходовая часть',
      services: [
        { name: 'Замена сайлентблоков задней балки', price: '7 000 ₽' },
        { name: 'Подрамник передней подвески — замена', price: '4 500 ₽' },
        { name: 'Замена ступицы заднего колеса в сборе с подшипником', price: '3 200 ₽' },
        { name: 'Замена ступицы переднего колеса в сборе с подшипником', price: '2 800 ₽' },
        { name: 'Демонтаж/монтаж передней стойки амортизатора (комплекс работ)', price: '2 400 ₽' },
      ]
    },
    {
      category: 'Электрооборудование',
      services: [
        { name: 'Замена стартера', price: '3 500 ₽' },
        { name: 'Замена подкапотного модуля предохранителей', price: '3 500 ₽' },
        { name: 'Замена генератора', price: '2 500 ₽' },
        { name: 'Проверка на утечку тока', price: '2 500 ₽' },
        { name: 'Компьютерная диагностика (комплексная)', price: '1 500 ₽' },
      ]
    },
    {
      category: 'Техническое обслуживание автомобиля',
      services: [
        { name: 'Замена масла в АКПП с фильтром в поддоне', price: '3 500 ₽' },
        { name: 'Замена топливного фильтра (в баке)', price: '2 500 ₽' },
        { name: 'Замена масла в АКПП', price: '2 000 ₽' },
        { name: 'Замена салонного фильтра со снятием педального узла', price: '1 500 ₽' },
        { name: 'Замена масла ДВС', price: '800 ₽' },
      ]
    },
    {
      category: 'Ремонт лобового стекла',
      services: [
        { name: 'Ремонт трещин и сколов на лобовом стекле', price: '1 500 ₽' },
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Услуги и цены
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей. Все цены указаны с учетом работы.
          </p>
        </div>

        {/* Основные категории услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainServiceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-700 hover:border-red-500"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-3">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-start border-b border-gray-700 pb-3 last:border-0"
                    >
                      <span className="text-gray-300 flex-1 pr-2">
                        {service.name}
                      </span>
                      <span className="text-red-500 font-semibold whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Кнопка "Показать все услуги" */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            {showAllServices ? 'Скрыть полный прайс' : 'Показать все услуги'}
            {showAllServices ? (
              <ChevronUp className="ml-2 w-5 h-5" />
            ) : (
              <ChevronDown className="ml-2 w-5 h-5" />
            )}
          </button>
        </div>

        {/* Полный список услуг */}
        {showAllServices && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Полный прайс-лист услуг
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allServices.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h4 className="text-lg font-bold text-red-500 mb-4 border-b border-gray-700 pb-2">
                    {category.category}
                  </h4>
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-start py-2 border-b border-gray-700/50 last:border-0"
                      >
                        <span className="text-gray-300 flex-1 pr-4 text-sm">
                          {service.name}
                        </span>
                        <span className="text-red-400 font-semibold whitespace-nowrap text-sm">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Точная стоимость работ определяется после диагностики автомобиля
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;