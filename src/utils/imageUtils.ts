// Утилиты для работы с изображениями

export interface WorkImage {
  id: number;
  src: string;
  alt: string;
  thumbnail?: string;
}

// Функция для получения правильного базового пути
export const getBasePath = (): string => {
  // В production используем базовый путь из vite.config.ts
  return import.meta.env.PROD ? '/spy230.github.io/' : '/';
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