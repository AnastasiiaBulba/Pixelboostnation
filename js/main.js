// Main JavaScript file for Friday Night Funkin Unblocked website

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the website
  initWebsite();
});

// Initialize website components
function initWebsite() {
  // Load header and footer
  loadHeader();
  loadFooter();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Initialize intersection observer for animations
  initIntersectionObserver();
}

// Load header dynamically
function loadHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = `
            <header class="header">
                <div class="header-container">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">🎵</div>
                        <span>Friday Night Funkin</span>
                    </a>
                    <nav class="nav">
                        <a href="index.html" class="nav-link">Home</a>
                        <a href="funkin-news.html" class="nav-link">News</a>
                        <a href="funkin-contacts.html" class="nav-link">Contacts</a>
                        <a href="funkin-privacy.html" class="nav-link">Privacy</a>
                    </nav>
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <div class="nav-overlay"></div>
        `;

    // Initialize mobile menu
    initMobileMenu();
  }
}

// Load footer dynamically
function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    const currentYear = new Date().getFullYear();
    footerPlaceholder.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3 class="footer-section-title">Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="funkin-cookies.html" class="footer-link">Cookie Policy</a></li>
                                <li><a href="funkin-privacy.html" class="footer-link">Privacy Policy</a></li>
                                <li><a href="funkin-disclaimer.html" class="footer-link">Disclaimer</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3 class="footer-section-title">Contact Info</h3>
                            <div class="footer-contact-info">
                                <div class="contact-item">
                                    <div class="contact-icon">📧</div>
                                    <span>contact@pixelboostnation.com</span>
                                </div>
                                <div class="contact-item">
                                    <div class="contact-icon">📞</div>
                                    <span>+66 515 123 456</span>
                                </div>
                                <div class="contact-item">
                                    <div class="contact-icon">📍</div>
                                    <span>1 Cavill Avenue, Surfers Paradise QLD 4217, Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-bottom-content">
                            <div class="copyright">
                                © ${currentYear} Pixelboostnation.com. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
  }
}

// Initialize mobile menu functionality
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  const navOverlay = document.querySelector(".nav-overlay");

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
      if (navOverlay) {
        navOverlay.classList.toggle("active");
      }
      document.body.classList.toggle("menu-open");
    });

    // Close mobile menu when clicking on overlay
    if (navOverlay) {
      navOverlay.addEventListener("click", function () {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
        navOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    }

    // Close mobile menu when clicking on a link
    const navLinks = nav.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
        if (navOverlay) {
          navOverlay.classList.remove("active");
        }
        document.body.classList.remove("menu-open");
      });
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
        if (navOverlay) {
          navOverlay.classList.remove("active");
        }
        document.body.classList.remove("menu-open");
      }
    });
  }
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize intersection observer for animations
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".feature-card, .how-to-play-card, .review-card, .field-description-content, .game-section-content"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Utility function to load JSON data
async function loadJSONData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading JSON data:", error);
    return null;
  }
}

// Utility function to format date
function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-AU", options);
}

// Export functions for use in other modules
window.FunkinWebsite = {
  loadJSONData,
  formatDate,
  initWebsite,
};
