// Cookie Banner JavaScript - Friday Night Funkin Style

class CookieBanner {
  constructor() {
    this.banner = null;
    this.isVisible = false;
    this.cookiePreferences = this.getCookiePreferences();
    this.init();
  }

  init() {
    // Перевіряємо, чи користувач вже прийняв куки
    if (this.cookiePreferences.hasInteracted) {
      console.log("Cookies already accepted, banner will not be shown");
      return;
    }

    // Створюємо банер динамічно
    this.createBanner();

    // Показуємо банер через 2 секунди після завантаження сторінки
    setTimeout(() => {
      this.showBanner();
    }, 2000);

    // Додаємо обробники подій
    this.addEventListeners();
  }

  createBanner() {
    const bannerHTML = `
      <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-content">
          <div class="cookie-icon">🍪</div>
          <div class="cookie-text">
            <h3>Beat the Cookie Rhythm! 🎵</h3>
            <p>We use cookies to make your gaming experience funky fresh! By continuing to play, you agree to our cookie policy.</p>
          </div>
          <div class="cookie-buttons">
            <button id="accept-cookies" class="cookie-btn accept-btn">Accept All</button>
            <button id="reject-cookies" class="cookie-btn reject-btn">Reject</button>
          </div>
        </div>
        <div class="cookie-close" id="cookie-close">×</div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", bannerHTML);
    this.banner = document.getElementById("cookie-banner");
  }

  addEventListeners() {
    // Обробник для кнопки "Accept All"
    document.getElementById("accept-cookies").addEventListener("click", () => {
      this.acceptAllCookies();
    });

    // Обробник для кнопки "Reject"
    document.getElementById("reject-cookies").addEventListener("click", () => {
      this.rejectAllCookies();
    });

    // Обробник для кнопки закриття
    document.getElementById("cookie-close").addEventListener("click", () => {
      this.hideBanner();
    });

    // Обробник для клавіші Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isVisible) {
        this.hideBanner();
      }
    });
  }

  showBanner() {
    // Перевіряємо, чи користувач вже взаємодіяв з банером
    if (
      this.cookiePreferences.showBanner &&
      !this.cookiePreferences.hasInteracted
    ) {
      this.banner.style.display = "block";
      this.isVisible = true;

      // Додаємо анімацію появи
      setTimeout(() => {
        this.banner.classList.remove("hidden");
      }, 100);
    } else {
      // Якщо користувач вже прийняв куки, приховуємо банер
      this.banner.style.display = "none";
      this.isVisible = false;
    }
  }

  hideBanner() {
    this.banner.classList.add("hidden");
    setTimeout(() => {
      this.banner.style.display = "none";
      this.isVisible = false;
    }, 600);
  }

  acceptAllCookies() {
    this.cookiePreferences.analytics = true;
    this.cookiePreferences.marketing = true;
    this.cookiePreferences.necessary = true;
    this.cookiePreferences.hasInteracted = true;
    this.cookiePreferences.showBanner = false;

    this.saveCookiePreferences();
    this.showAcceptanceMessage();
    this.hideBanner();
  }

  rejectAllCookies() {
    this.cookiePreferences.analytics = false;
    this.cookiePreferences.marketing = false;
    this.cookiePreferences.necessary = true; // Необхідні куки завжди активні
    this.cookiePreferences.hasInteracted = true;
    this.cookiePreferences.showBanner = false;

    this.saveCookiePreferences();
    this.showRejectionMessage();
    this.hideBanner();
  }

  showAcceptanceMessage() {
    this.showNotification(
      "🎉 Cookies accepted! Your gaming experience is now enhanced!",
      "success"
    );
  }

  showRejectionMessage() {
    this.showNotification(
      "ℹ️ Only necessary cookies are enabled. Some features may be limited.",
      "info"
    );
  }

  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `cookie-notification ${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">×</button>
      </div>
    `;

    // Додаємо стилі для повідомлення
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${
        type === "success"
          ? "linear-gradient(45deg, #4caf50, #66bb6a)"
          : "linear-gradient(45deg, #2196f3, #42a5f5)"
      };
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Анімація появи
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Обробник закриття
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      });

    // Автоматичне закриття через 5 секунд
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }
    }, 5000);
  }

  getCookiePreferences() {
    const stored = localStorage.getItem("cookie-preferences");
    if (stored) {
      return JSON.parse(stored);
    }

    // Значення за замовчуванням
    return {
      analytics: false,
      marketing: false,
      necessary: true,
      hasInteracted: false,
      showBanner: true,
    };
  }

  saveCookiePreferences() {
    localStorage.setItem(
      "cookie-preferences",
      JSON.stringify(this.cookiePreferences)
    );
  }

  // Метод для перевірки, чи дозволені певні типи куків
  isAllowed(cookieType) {
    return this.cookiePreferences[cookieType] || false;
  }

  // Метод для скидання налаштувань (корисний для тестування)
  resetPreferences() {
    this.cookiePreferences = {
      analytics: false,
      marketing: false,
      necessary: true,
      hasInteracted: false,
      showBanner: true,
    };
    this.saveCookiePreferences();
    this.showBanner();
  }
}

// Ініціалізація банера куків після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  window.cookieBanner = new CookieBanner();
});

// Експорт для використання в інших модулях
if (typeof module !== "undefined" && module.exports) {
  module.exports = CookieBanner;
}

// Глобальні функції для тестування
window.resetCookiePreferences = function () {
  if (window.cookieBanner) {
    window.cookieBanner.resetPreferences();
  }
};

window.showCookieBanner = function () {
  if (window.cookieBanner) {
    window.cookieBanner.showBanner();
  }
};
