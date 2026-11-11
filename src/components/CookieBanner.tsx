import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie_notice_accepted';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== 'yes') {
        setVisible(true);
      }
    } catch {
      // localStorage недоступен (приватный режим и т. п.) — просто показываем плашку
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'yes');
    } catch {
      // ничего страшного: плашка появится снова при следующем визите
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookie"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4"
    >
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-gray-300 text-sm flex-1">
          Мы используем файлы cookie и сервис Яндекс Метрика, чтобы анализировать
          посещаемость и улучшать работу сайта. Продолжая пользоваться сайтом, вы
          соглашаетесь с обработкой этих данных в соответствии с{' '}
          <a
            href="/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline"
          >
            Политикой обработки персональных данных
          </a>
          . Отключить cookie можно в настройках браузера.
        </p>
        <button
          onClick={accept}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
