import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from './Lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GallerySimple = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Используем правильный базовый путь для GitHub Pages
  const basePath = '/spy230.github.io/';
  const workImages = [
    `${basePath}images/works/attachment-0.jpeg`,
    `${basePath}images/works/attachment-1.jpeg`,
    `${basePath}images/works/attachment-2.jpeg`,
    `${basePath}images/works/attachment-3.jpeg`,
    `${basePath}images/works/attachment-4.jpeg`,
    `${basePath}images/works/attachment-5.jpeg`,
    `${basePath}images/works/attachment-6.jpeg`,
    `${basePath}images/works/attachment-7.jpeg`,
    `${basePath}images/works/attachment-8.jpeg`,
    `${basePath}images/works/attachment-9.jpeg`,
    `${basePath}images/works/attachment-10.jpeg`,
    `${basePath}images/works/attachment-11.jpeg`,
  ];

  // Преобразуем массив строк в массив объектов для лайтбокса
  const lightboxImages = workImages.map((src, index) => ({
    id: index + 1,
    src,
    alt: `Работа ${index + 1}`
  }));

  const handleImageClick = useCallback((imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxNext = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === workImages.length - 1 ? 0 : prev + 1
    );
  }, [workImages.length]);

  const handleLightboxPrev = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? workImages.length - 1 : prev - 1
    );
  }, [workImages.length]);

  return (
    <section id="gallery" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Примеры выполненных работ нашими специалистами
          </p>
        </div>
        
        <div className="pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="gallery-swiper"
          >
            {workImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="aspect-square bg-gray-700 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Работа ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lightbox */}
        <Lightbox
          images={lightboxImages}
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

export default GallerySimple;