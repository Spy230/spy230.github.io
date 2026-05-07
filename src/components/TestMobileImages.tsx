import { useState, useEffect } from 'react';
import { isMobileDevice, getResponsiveImage } from '../utils/imageUtils';

const TestMobileImages = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice());
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const testImages = [
    {
      name: 'Hero',
      desktop: '/images/works/Hero 1920x1080.png',
      mobile: '/images/works/hero_mob.png',
      current: getResponsiveImage('/images/works/Hero 1920x1080.png', '/images/works/hero_mob.png')
    },
    {
      name: 'About',
      desktop: '/images/works/About 1280x960.png',
      mobile: '/images/works/ABOUT_mob.png',
      current: getResponsiveImage('/images/works/About 1280x960.png', '/images/works/ABOUT_mob.png')
    },
    {
      name: 'Services',
      desktop: '/images/works/Services 600x800 vol 6.png',
      mobile: '/images/works/services_mob.png',
      current: getResponsiveImage('/images/works/Services 600x800 vol 6.png', '/images/works/services_mob.png')
    },
    {
      name: 'Certificates',
      desktop: '/images/works/Certificates 1366x1024.png',
      mobile: '/images/works/sertif_mob.png',
      current: getResponsiveImage('/images/works/Certificates 1366x1024.png', '/images/works/sertif_mob.png')
    }
  ];
  
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Тест мобильных изображений</h2>
      <div className="mb-4">
        <p className="text-gray-300">
          Текущий режим: <span className={`font-bold ${isMobile ? 'text-green-400' : 'text-blue-400'}`}>
            {isMobile ? 'Мобильный' : 'Десктопный'}
          </span>
        </p>
        <p className="text-gray-400 text-sm">Ширина окна: {window.innerWidth}px</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testImages.map((img, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">{img.name}</h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-400 text-sm">Десктоп:</p>
                <p className="text-gray-300 text-xs truncate">{img.desktop}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Мобильное:</p>
                <p className="text-gray-300 text-xs truncate">{img.mobile}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Текущее:</p>
                <p className="text-green-300 text-xs truncate">{img.current}</p>
              </div>
              <div className="mt-2">
                <p className="text-gray-400 text-sm">Используется:</p>
                <p className={`font-bold ${img.current === img.mobile ? 'text-green-400' : 'text-blue-400'}`}>
                  {img.current === img.mobile ? 'Мобильная версия' : 'Десктопная версия'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-900 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Инструкция по тестированию:</h3>
        <ul className="text-gray-300 space-y-1 text-sm">
          <li>• Измените размер окна браузера до 768px или меньше для переключения в мобильный режим</li>
          <li>• На мобильных устройствах будут использоваться изображения с суффиксом `_mob`</li>
          <li>• На десктопах будут использоваться оригинальные изображения</li>
          <li>• Все изменения происходят автоматически при изменении размера окна</li>
        </ul>
      </div>
    </div>
  );
};

export default TestMobileImages;