# Улучшение качества изображений на мобильных устройствах

## Что было исправлено

### 1. CSS оптимизация для четкости изображений

Добавлены следующие CSS правила в `src/index.css`:

```css
/* Оптимизация изображений для мобильных - предотвращение размытия */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* Для фоновых изображений - улучшение четкости */
section[style*="background-image"] {
  image-rendering: -webkit-optimize-contrast;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
```

### 2. Улучшенные функции загрузки фоновых изображений

В `src/utils/imageUtils.ts` добавлены:

- **Предзагрузка изображений** - изображения загружаются заранее
- **Логирование загрузки** - можно отследить, какие изображения загружены
- **Аппаратное ускорение** - `transform: translateZ(0)` для GPU-ускорения
- **Оптимизация рендеринга** - `image-rendering: -webkit-optimize-contrast`

### 3. Debounce для resize событий

Добавлен debounce (задержка 150ms) для событий изменения размера окна, чтобы избежать множественных перерисовок:

```typescript
let timeoutId: NodeJS.Timeout;
const handleResize = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(checkMobile, 150);
};
```

### 4. Мета-теги для мобильных устройств

В `index.html` добавлены мета-теги для улучшения отображения:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

## Текущие мобильные изображения

| Файл | Размер | Назначение |
|------|--------|------------|
| `hero_mob.png` | 446.88 KB | Фон главной секции |
| `ABOUT_mob.png` | 196.77 KB | Фон секции "О компании" |
| `services_mob.png` | 221.88 KB | Фон секции "Услуги" |
| `sertif_mob.png` | 201.51 KB | Фон секции "Сертификаты" |

## Рекомендации по дальнейшему улучшению

### 1. Увеличить разрешение мобильных изображений

Для Retina-дисплаев (2x, 3x) рекомендуется создать изображения с удвоенным разрешением:

**Текущие размеры (предположительно):**
- hero_mob.png: ~640x400px

**Рекомендуемые размеры для Retina:**
- hero_mob.png: 1280x800px (2x)
- hero_mob@3x.png: 1920x1200px (3x для iPhone Pro Max)

### 2. Использовать современные форматы изображений

**WebP формат:**
- На 25-35% меньше размер при том же качестве
- Поддерживается всеми современными браузерами

**AVIF формат:**
- На 50% меньше размер чем JPEG
- Поддерживается Chrome 85+, Firefox 93+, Safari 16+

**Пример конвертации:**
```bash
# Конвертация в WebP
cwebp -q 85 hero_mob.png -o hero_mob.webp

# Конвертация в AVIF
avifenc --min 0 --max 63 -a end-usage=q -a cq-level=23 hero_mob.png hero_mob.avif
```

### 3. Использовать srcset для адаптивных изображений

Для обычных `<img>` тегов (не фоновых изображений):

```html
<img 
  src="hero_mob.png"
  srcset="
    hero_mob.png 640w,
    hero_mob@2x.png 1280w,
    hero_mob@3x.png 1920w
  "
  sizes="(max-width: 640px) 100vw, 640px"
  alt="Hero"
  loading="lazy"
/>
```

### 4. Использовать picture элемент для фоновых изображений

Вместо CSS background-image можно использовать:

```html
<picture>
  <source 
    media="(max-width: 640px)" 
    srcset="hero_mob.avif" 
    type="image/avif" 
  />
  <source 
    media="(max-width: 640px)" 
    srcset="hero_mob.webp" 
    type="image/webp" 
  />
  <source 
    media="(max-width: 640px)" 
    srcset="hero_mob.png" 
    type="image/png" 
  />
  <img src="hero_desktop.png" alt="Hero" />
</picture>
```

### 5. Оптимизация существующих изображений

**Инструменты для оптимизации:**

1. **ImageOptim** (Mac) - https://imageoptim.com/
2. **Squoosh** (Web) - https://squoosh.app/
3. **TinyPNG** (Web) - https://tinypng.com/
4. **ImageMagick** (CLI):
   ```bash
   # Изменить размер и оптимизировать
   magick hero_mob.png -resize 1280x800 -quality 85 hero_mob_2x.png
   ```

### 6. Проверка качества на реальных устройствах

**Тестирование:**
1. iPhone SE (375x667, 2x)
2. iPhone 12 (390x844, 3x)
3. iPhone 14 Pro Max (430x932, 3x)
4. Samsung Galaxy S21 (360x800, 3x)
5. iPad (768x1024, 2x)

**Инструменты для тестирования:**
- Chrome DevTools (F12 → Device Toolbar)
- BrowserStack - https://www.browserstack.com/
- LambdaTest - https://www.lambdatest.com/

## Проверка результатов

### 1. Откройте консоль браузера (F12)

Вы должны увидеть логи:
```
✅ Hero background loaded: /images/works/hero_mob.png
✅ Background loaded: /images/works/ABOUT_mob.png
✅ Background loaded: /images/works/services_mob.png
✅ Background loaded: /images/works/sertif_mob.png
```

### 2. Проверьте Network вкладку

- Убедитесь, что загружаются правильные изображения (мобильные на мобильных)
- Проверьте размер загруженных файлов
- Убедитесь, что изображения кэшируются

### 3. Проверьте производительность

Используйте Lighthouse (в Chrome DevTools):
1. Откройте DevTools (F12)
2. Перейдите на вкладку "Lighthouse"
3. Выберите "Mobile" и "Performance"
4. Нажмите "Analyze page load"

**Целевые показатели:**
- Performance: 90+
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## Дополнительные ресурсы

- [MDN: Image optimization](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Web.dev: Optimize images](https://web.dev/fast/#optimize-your-images)
- [Can I use: WebP](https://caniuse.com/webp)
- [Can I use: AVIF](https://caniuse.com/avif)
- [Squoosh: Image compression](https://squoosh.app/)

## Чек-лист

- [x] Добавлены CSS правила для четкости изображений
- [x] Добавлена предзагрузка фоновых изображений
- [x] Добавлен debounce для resize событий
- [x] Добавлены мета-теги для мобильных устройств
- [x] Добавлено аппаратное ускорение (GPU)
- [ ] Создать изображения @2x для Retina
- [ ] Создать изображения @3x для iPhone Pro
- [ ] Конвертировать в WebP формат
- [ ] Конвертировать в AVIF формат
- [ ] Протестировать на реальных устройствах
- [ ] Проверить производительность в Lighthouse

## Контакты для поддержки

Если изображения все еще размыты:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что мобильные изображения загружаются
3. Проверьте размер экрана (должен быть <= 768px)
4. Очистите кэш браузера (Ctrl+Shift+Delete)
