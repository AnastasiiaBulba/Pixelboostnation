// Cookie Bar JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initCookieBar();
});

function initCookieBar() {
  const cookieBar = document.getElementById("cookie-bar");
  if (cookieBar) {
    // Check if user has already accepted cookies
    if (localStorage.getItem("cookiesAccepted") !== "true") {
      cookieBar.innerHTML = `
                <div class="cookie-bar-content">
                    <div class="cookie-text">
                        <strong>We use cookies</strong> to enhance your gaming experience and analyze site traffic. 
                        By continuing to use this site, you consent to our use of cookies. 
                        <a href="funkin-cookies.html" class="cookie-link">Learn more</a>
                    </div>
                    <div class="cookie-buttons">
                        <button class="cookie-btn cookie-btn-accept" onclick="acceptCookies()">
                            Accept
                        </button>
                        <button class="cookie-btn cookie-btn-decline" onclick="declineCookies()">
                            Decline
                        </button>
                    </div>
                </div>
            `;

      // Show cookie bar after a short delay
      setTimeout(() => {
        cookieBar.classList.add("show");
      }, 1000);
    } else {
      // Hide cookie bar if cookies are already accepted
      cookieBar.style.display = "none";
    }
  }
}

// Accept cookies function
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  hideCookieBar();

  // Show success message
  showCookieMessage("Thank you! Cookies have been accepted.", "success");
}

// Decline cookies function
function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  hideCookieBar();

  // Show message
  showCookieMessage(
    "Cookies have been declined. Some features may be limited.",
    "info"
  );
}

// Hide cookie bar with animation
function hideCookieBar() {
  const cookieBar = document.getElementById("cookie-bar");
  if (cookieBar) {
    cookieBar.classList.remove("show");
    setTimeout(() => {
      cookieBar.style.display = "none";
    }, 300);
  }
}

// Show cookie message
function showCookieMessage(message, type = "info") {
  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `cookie-message cookie-message-${type}`;
  messageElement.innerHTML = `
        <div class="cookie-message-content">
            <span class="cookie-message-text">${message}</span>
            <button class="cookie-message-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  // Add styles
  messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success" ? "var(--secondary-color)" : "var(--accent-color)"
        };
        color: white;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--border-radius-sm);
        box-shadow: var(--shadow-md);
        z-index: 1002;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;

  // Add close button styles
  const closeButton = messageElement.querySelector(".cookie-message-close");
  if (closeButton) {
    closeButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: var(--spacing-sm);
            padding: 0;
            line-height: 1;
        `;
  }

  // Add message content styles
  const messageContent = messageElement.querySelector(
    ".cookie-message-content"
  );
  if (messageContent) {
    messageContent.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
        `;
  }

  // Add slide in animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  // Add to page
  document.body.appendChild(messageElement);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (messageElement.parentElement) {
      messageElement.remove();
    }
  }, 5000);
}

// Check if cookies are accepted
function areCookiesAccepted() {
  return localStorage.getItem("cookiesAccepted") === "true";
}

// Reset cookie preferences (for testing)
function resetCookiePreferences() {
  localStorage.removeItem("cookiesAccepted");
  location.reload();
}

// Export functions for global use
window.acceptCookies = acceptCookies;
window.declineCookies = declineCookies;
window.resetCookiePreferences = resetCookiePreferences;
window.areCookiesAccepted = areCookiesAccepted;
