import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Award, FileText, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Certificates = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Используем правильный базовый путь для GitHub Pages
  const basePath = '/spy230.github.io/';
  const certificates = [
    { id: 1, src: `${basePath}images/works/image_2025-12-29_19-25-29.png`, alt: 'Сертификат 1' },
    { id: 2, src: `${basePath}images/works/image_2025-12-29_19-25-43.png`, alt: 'Сертификат 2' },
    { id: 3, src: `${basePath}images/works/image_2025-12-29_19-26-00.png`, alt: 'Сертификат 3' },
    { id: 4, src: `${basePath}images/works/image_2025-12-29_19-26-05.png`, alt: 'Сертификат 4' },
    { id: 5, src: `${basePath}images/works/image_2025-12-29_19-26-15.png`, alt: 'Сертификат 5' },
    { id: 6, src: `${basePath}images/works/image_2025-12-29_19-26-20.png`, alt: 'Сертификат 6' },
    { id: 7, src: `${basePath}images/works/image_2025-12-29_19-26-25.png`, alt: 'Сертификат 7' },
    { id: 8, src: `${basePath}images/works/image_2025-12-29_19-26-31.png`, alt: 'Сертификат 8' },
    { id: 9, src: `${basePath}images/works/image_2025-12-29_19-26-37.png`, alt: 'Сертификат 9' },
  ];

  const handleImageClick = useCallback((imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxNext = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  }, [certificates.length]);

  const handleLightboxPrev = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  }, [certificates.length]);

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Сертификаты и лицензии
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Наша деятельность подтверждена необходимыми документами и сертификатами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <ShieldCheck className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Гарантия качества
            </h3>
            <p className="text-gray-300 text-sm">
              Все работы выполняются с соблюдением стандартов качества
            </p>
          </div>

          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Сертифицированные мастера
            </h3>
            <p className="text-gray-300 text-sm">
              Наши специалисты регулярно проходят обучение и аттестацию
            </p>
          </div>

          <div className="bg-red-900 bg-opacity-30 p-6 rounded-xl text-center border border-red-600">
            <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Официальная деятельность
            </h3>
            <p className="text-gray-300 text-sm">
              Работаем с полным пакетом разрешительных документов
            </p>
          </div>
        </div>

        {/* Карусель сертификатов */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            navigation={{
              prevEl: '.swiper-button-prev-certificates',
              nextEl: '.swiper-button-next-certificates',
            }}
            className="certificates-swiper"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={cert.id}>
                <div 
                  className="max-w-lg mx-auto aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group shadow-xl"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации */}
          <button 
            className="swiper-button-prev-certificates absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-red-600 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
            aria-label="Предыдущий сертификат"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            className="swiper-button-next-certificates absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-red-600 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
            aria-label="Следующий сертификат"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Lightbox для полноэкранного просмотра */}
        <Lightbox
          images={certificates}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={handleLightboxClose}
          onNext={handleLightboxNext}
          onPrev={handleLightboxPrev}
        />
      </div>
    </section>
  );
};

export default Certificates;