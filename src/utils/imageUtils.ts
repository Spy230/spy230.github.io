// Утилиты для работы с изображениями
import { useState, useEffect } from 'react';

export interface WorkImage {
  id: number;
  src: string;
  alt: string;
  thumbnail?: string;
}

// Функция для получения правильного базового пути
export const getBasePath = (): string => {
  return '/';
};

// Функция для генерации полного пути к изображению
export const getImagePath = (imagePath: string): string => {
  const basePath = getBasePath();
  // Убираем начальный слеш если он есть
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}${cleanPath}`;
};

// Функция для генерации массива изображений работ из папки public/images/works
export const generateWorkImages = (): WorkImage[] => {
  const basePath = getBasePath();
  const images: WorkImage[] = [
    {
      id: 1,
      src: `${basePath}images/works/attachment-0.jpeg`,
      alt: 'Работа 1',
      thumbnail: `${basePath}images/works/attachment-0.jpeg`
    },
    {
      id: 2,
      src: `${basePath}images/works/attachment-1.jpeg`,
      alt: 'Работа 2',
      thumbnail: `${basePath}images/works/attachment-1.jpeg`
    },
    {
      id: 3,
      src: `${basePath}images/works/attachment-2.jpeg`,
      alt: 'Работа 3',
      thumbnail: `${basePath}images/works/attachment-2.jpeg`
    },
    {
      id: 4,
      src: `${basePath}images/works/attachment-3.jpeg`,
      alt: 'Работа 4',
      thumbnail: `${basePath}images/works/attachment-3.jpeg`
    },
    {
      id: 5,
      src: `${basePath}images/works/attachment-4.jpeg`,
      alt: 'Работа 5',
      thumbnail: `${basePath}images/works/attachment-4.jpeg`
    },
    {
      id: 6,
      src: `${basePath}images/works/attachment-5.jpeg`,
      alt: 'Работa 6',
      thumbnail: `${basePath}images/works/attachment-5.jpeg`
    },
    {
      id: 7,
      src: `${basePath}images/works/attachment-6.jpeg`,
      alt: 'Работа 7',
      thumbnail: `${basePath}images/works/attachment-6.jpeg`
    },
    {
      id: 8,
      src: `${basePath}images/works/attachment-7.jpeg`,
      alt: 'Работа 8',
      thumbnail: `${basePath}images/works/attachment-7.jpeg`
    },
    {
      id: 9,
      src: `${basePath}images/works/attachment-8.jpeg`,
      alt: 'Работа 9',
      thumbnail: `${basePath}images/works/attachment-8.jpeg`
    },
    {
      id: 10,
      src: `${basePath}images/works/attachment-9.jpeg`,
      alt: 'Работа 10',
      thumbnail: `${basePath}images/works/attachment-9.jpeg`
    },
    {
      id: 11,
      src: `${basePath}images/works/attachment-10.jpeg`,
      alt: 'Работа 11',
      thumbnail: `${basePath}images/works/attachment-10.jpeg`
    },
    {
      id: 12,
      src: `${basePath}images/works/attachment-11.jpeg`,
      alt: 'Работа 12',
      thumbnail: `${basePath}images/works/attachment-11.jpeg`
    },
    {
      id: 13,
      src: `${basePath}images/works/IMG_6651.jpg`,
      alt: 'Работа 13',
      thumbnail: `${basePath}images/works/IMG_6651.jpg`
    },
    {
      id: 14,
      src: `${basePath}images/works/IMG_6653.jpg`,
      alt: 'Работа 14',
      thumbnail: `${basePath}images/works/IMG_6653.jpg`
    },
    {
      id: 15,
      src: `${basePath}images/works/IMG_6656.jpg`,
      alt: 'Работа 15',
      thumbnail: `${basePath}images/works/IMG_6656.jpg`
    },
    {
      id: 16,
      src: `${basePath}images/works/IMG_6657.jpg`,
      alt: 'Работа 16',
      thumbnail: `${basePath}images/works/IMG_6657.jpg`
    },
    {
      id: 17,
      src: `${basePath}images/works/photo_2025-12-25_13-09-14.jpg`,
      alt: 'Работа 17',
      thumbnail: `${basePath}images/works/photo_2025-12-25_13-09-14.jpg`
    },
    {
      id: 18,
      src: `${basePath}images/works/photo_2026-01-21_18-35-11.jpg`,
      alt: 'Работа 18',
      thumbnail: `${basePath}images/works/photo_2026-01-21_18-35-11.jpg`
    },
    {
      id: 19,
      src: `${basePath}images/works/samotcvet.jpg`,
      alt: 'Работа 19',
      thumbnail: `${basePath}images/works/samotcvet.jpg`
    }
  ];
  
  return images;
};

// Функция для проверки существования изображения
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Функция для оптимизации загрузки изображений
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};


// Мобильная точка разрыва
const MOBILE_BREAKPOINT = 768;

// Функция для определения мобильного устройства
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= MOBILE_BREAKPOINT;
};

// Функция для получения правильного изображения (мобильное или десктопное)
export const getResponsiveImage = (desktopPath: string, mobilePath?: string): string => {
  if (isMobileDevice() && mobilePath) {
    return mobilePath;
  }
  return desktopPath;
};

// Хук для отслеживания мобильной ширины
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем при монтировании
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    
    // Слушаем изменения размера окна
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Хук для использования в компонентах React
export const useResponsiveImage = (desktopPath: string, mobilePath?: string): string => {
  const [imagePath, setImagePath] = useState<string>(desktopPath);
  
  useEffect(() => {
    const updateImage = () => {
      if (isMobileDevice() && mobilePath) {
        setImagePath(mobilePath);
      } else {
        setImagePath(desktopPath);
      }
    };
    
    updateImage();
    window.addEventListener('resize', updateImage);
    
    return () => window.removeEventListener('resize', updateImage);
  }, [desktopPath, mobilePath]);
  
  return imagePath;
};

// Функция для получения фонового изображения с учетом мобильных устройств
// Вызывается при каждом рендере для актуальной проверки
export const getBackgroundImageStyle = (desktopImage: string, mobileImage?: string): React.CSSProperties => {
  // Всегда используем десктопное изображение - оно достаточно большое для всех устройств
  const imagePath = desktopImage;
  
  // Предзагружаем изображение
  if (typeof window !== 'undefined') {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => console.log(`✅ Background loaded: ${imagePath}`);
    img.onerror = () => console.error(`❌ Failed to load background: ${imagePath}`);
  }
  
  return {
    backgroundImage: `url("${imagePath}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
    imageRendering: 'auto', // auto для лучшего качества на Retina
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)'
  };
};

// Функция для получения фонового изображения Hero секции
// Использует x1465493-641690240.png для мобильных, десктопное для больших экранов
export const getHeroBackgroundStyle = (): React.CSSProperties => {
  const desktopImage = '/images/works/Hero 1920x1080.png';
  const mobileImage = '/images/works/Hero 1920x1080.png';
  
  // Проверяем мобильное устройство только на клиенте после монтирования
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  }
  
  const imagePath = isMobile ? mobileImage : desktopImage;
  
  // Предзагружаем изображение
  if (typeof window !== 'undefined') {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => console.log(`✅ Hero background loaded: ${imagePath}`);
    img.onerror = () => console.error(`❌ Failed to load Hero background: ${imagePath}`);
  }
  
  return {
    backgroundImage: `url("${imagePath}")`,
    backgroundSize: '100% 100%', // Растягиваем на всю ширину и высоту
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    imageRendering: 'auto',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    willChange: isMobile ? 'auto' : 'transform',
    // На мобильных - полный экран
    ...(isMobile && {
      minHeight: '100vh',
      width: '100%',
      height: '100%'
    })
  };
};

// Функция для получения фонового изображения About секции
export const getAboutBackgroundStyle = (): React.CSSProperties => {
  const desktopImage = '/images/works/About 1280x960.png';
  // Используем десктопное изображение - оно достаточно большое для всех устройств
  return getBackgroundImageStyle(desktopImage);
};

// Функция для получения фонового изображения Services секции
export const getServicesBackgroundStyle = (): React.CSSProperties => {
  const desktopImage = '/images/works/Services 600x800 vol 6.png';
  
  // Проверяем мобильное устройство
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  }
  
  // Используем десктопное изображение - оно достаточно большое
  const style = getBackgroundImageStyle(desktopImage);
  
  // Добавляем фиксацию фона для предотвращения "падения" при раскрытии прайса
  return {
    ...style,
    backgroundAttachment: isMobile ? 'scroll' : 'fixed'
  };
};

// Функция для получения фонового изображения Certificates секции
export const getCertificatesBackgroundStyle = (): React.CSSProperties => {
  const desktopImage = '/images/works/Certificates 1366x1024.png';
  // Используем десктопное изображение - оно достаточно большое
  return getBackgroundImageStyle(desktopImage);
};
