import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 sm:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Контакты автосервиса - где ближайший автосервис
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Автосервис рядом со мной в Зеленограде и Андреевке. Автосервис на карте - автосервис открытый сейчас. Как починить машину в Москве - приезжайте к нам!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-red-900 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-500" aria-label="Телефон автосервиса" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Телефоны автосервиса
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+79099806800"
                      className="block text-gray-300 hover:text-red-500 transition-colors"
                    >
                      +7 (909) 980-68-00 (основной)
                    </a>
                    <a
                      href="tel:+74993910051"
                      className="block text-gray-300 hover:text-red-500 transition-colors"
                    >
                      +7 (499) 391-00-51
                    </a>
                    <a
                      href="tel:+79253910051"
                      className="block text-gray-300 hover:text-red-500 transition-colors"
                    >
                      +7 (925) 391-00-51
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-red-900 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-500" aria-label="Адрес автосервиса на карте" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Адрес автосервиса - автосервис на карте
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Москва, Зеленоград, улица Андреевка, 31
                  </p>
                  <a
                    href="https://yandex.ru/maps/org/avtotekhtsentr_samotsvet/1115952380/?ll=37.148226%2C55.972388&z=15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Navigation size={16} />
                    <span>Открыть на карте Яндекс</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-red-900 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-500" aria-label="Режим работы автосервиса" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Режим работы - автосервис открытый сейчас
                  </h3>
                  <p className="text-gray-300">
                    Ежедневно: 9:00 - 20:00
                  </p>
                  <p className="text-red-500 text-sm mt-2">
                    Без выходных и праздников
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-red-900 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-500" aria-label="Email автосервиса" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email для связи
                  </h3>
                  <a
                    href="mailto:samotsvett@yandex.ru"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    samotsvett@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.148226%2C55.972388&mode=search&oid=1115952380&ol=biz&z=15"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="min-h-[400px] lg:min-h-[600px]"
              title="Автосервис Самоцвет на карте Зеленограда - автосервис рядом со мной, где ближайший автосервис"
            ></iframe>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Как добраться до автосервиса в Зеленограде
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg mb-3">
                <p className="text-white font-semibold">На автомобиле</p>
              </div>
              <p className="text-gray-300 text-sm">
                Удобный подъезд с улицы Андреевка. Бесплатная парковка для клиентов автосервиса.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg mb-3">
                <p className="text-white font-semibold">Общественный транспорт</p>
              </div>
              <p className="text-gray-300 text-sm">
                Остановка "Андреевка" - автобусы и маршрутки из Зеленограда. Автосервис рядом со мной.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-900 bg-opacity-30 p-4 rounded-lg mb-3">
                <p className="text-white font-semibold">Из Москвы</p>
              </div>
              <p className="text-gray-300 text-sm">
                По Ленинградскому шоссе до Зеленограда, далее по указателям на Андреевку. Автосервис Москва.
              </p>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Где починить авто в Зеленограде? Приезжайте к нам!
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Автосервис рядом со мной - автотехцентр Самоцвет. Ремонт и обслуживание авто, техобслуживание автомобиля, 
            диагностика машины рядом, шиномонтаж рядом со мной. Сколько стоит ТО в автосервисе - звоните!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79099806800"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Позвонить сейчас</span>
            </a>
            <a
              href="https://yandex.ru/maps/org/avtotekhtsentr_samotsvet/1115952380/?ll=37.148226%2C55.972388&z=15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 border-2 border-red-500"
            >
              <MapPin size={20} />
              <span>Посмотреть на карте</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
