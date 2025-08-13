# Friday Night Funkin - Cookie Banner

Цей проект містить банер куків у стилі гри Friday Night Funkin з сучасним дизайном та анімаціями.

## Особливості банера куків

### 🎨 Дизайн
- **Гейміфікований стиль** - банер оформлений у тематиці гри Friday Night Funkin
- **Градієнтні кольори** - використовуються теплі коричневі тони з помаранчевими акцентами
- **Анімації** - плавні переходи, ефекти появи/зникнення, пульсація рамки
- **Адаптивність** - оптимізовано для всіх пристроїв

### ⚡ Функціональність
- **Дві кнопки дій**: Accept All, Reject
- **Автоматичне збереження** налаштувань у localStorage
- **Повідомлення** про прийняття/відхилення куків
- **Клавіатурні скорочення** (Escape для закриття)
- **Затримка показу** - банер з'являється через 2 секунди

### 🎯 Типи куків
- **Necessary** - завжди активні (необхідні для роботи сайту)
- **Analytics** - для аналітики та статистики
- **Marketing** - для реклами та маркетингу

## Файли проекту

### HTML
- `index.html` - головна сторінка з підключеним банером
- `funkin-cookies.html` - сторінка політики куків

### CSS
- `css/cookie-bar.css` - стилі для банера куків

### JavaScript
- `js/cookie-bar.js` - логіка роботи банера

## Встановлення та використання

### 1. Підключення CSS
```html
<link rel="stylesheet" href="css/cookie-bar.css" />
```

### 2. Підключення JavaScript
```html
<script src="js/cookie-bar.js"></script>
```

### 3. Автоматична ініціалізація
Банер автоматично створюється та показується після завантаження DOM.

## API

### Методи класу CookieBanner

```javascript
// Отримання екземпляра
const banner = window.cookieBanner;

// Перевірка дозволів
banner.isAllowed('analytics'); // true/false

// Скидання налаштувань (для тестування)
banner.resetPreferences();

// Примусове показування
banner.showBanner();
```

### Налаштування куків

```javascript
// Структура налаштувань
{
  analytics: false,      // Аналітичні куки
  marketing: false,      // Маркетингові куки
  necessary: true,       // Необхідні куки (завжди true)
  hasInteracted: false,  // Чи взаємодіяв користувач
  showBanner: true       // Чи показувати банер
}
```

## Кастомізація

### Зміна кольорів
Відредагуйте CSS змінні в `css/cookie-bar.css`:

```css
.cookie-banner {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%);
  border: 3px solid #YOUR_ACCENT_COLOR;
}
```

### Зміна тексту
Відредагуйте HTML в методі `createBanner()` в `js/cookie-bar.js`:

```javascript
const bannerHTML = `
  <div id="cookie-banner" class="cookie-banner">
    <div class="cookie-content">
      <div class="cookie-icon">🍪</div>
      <div class="cookie-text">
        <h3>YOUR_TITLE</h3>
        <p>YOUR_DESCRIPTION</p>
      </div>
      <div class="cookie-buttons">
        <button id="accept-cookies" class="cookie-btn accept-btn">Accept All</button>
        <button id="reject-cookies" class="cookie-btn reject-btn">Reject</button>
      </div>
    </div>
  </div>
`;
```

### Зміна затримки показу
```javascript
// В методі init()
setTimeout(() => {
  this.showBanner();
}, 5000); // 5 секунд замість 2
```

## Анімації

### Доступні анімації
- `slideUp` - поява знизу
- `slideDown` - зникнення вниз
- `borderGlow` - пульсація рамки
- `bounce` - підстрибування іконки
- `spin` - обертання іконки при наведенні

### Додавання нових анімацій
```css
@keyframes yourAnimation {
  0% { /* початковий стан */ }
  100% { /* кінцевий стан */ }
}

.element {
  animation: yourAnimation 2s ease-in-out infinite;
}
```

## Адаптивність

### Breakpoints
- **Desktop**: > 768px - горизонтальне розташування кнопок
- **Mobile**: ≤ 768px - вертикальне розташування кнопок

### Мобільні оптимізації
- Зменшені відступи
- Кнопки на всю ширину
- Адаптивний розмір тексту

## Браузерна підтримка

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Ліцензія

Цей проект розповсюджується під MIT ліцензією.

## Підтримка

Для питань та пропозицій створюйте issues у репозиторії проекту.
