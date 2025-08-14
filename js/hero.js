// Hero section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initHero();
});

function initHero() {
  const heroPlaceholder = document.getElementById("hero-placeholder");
  if (heroPlaceholder) {
    heroPlaceholder.innerHTML = `
            <section class="hero">
                <div class="hero-container">
                    <div class="hero-content">
                        <h1 class="hero-title">Friday Night Funkin Unblocked</h1>
                        <p class="hero-subtitle">Get Ready to Funk!</p>
                        <p class="hero-description">
                            Experience the ultimate rhythm battle in this wildly popular casual arcade music game. 
                            Immerse yourself in crazy beats and supercharged duels. Tap the arrows in sync with the beats 
                            to nail every note and stay on rhythm!
                        </p>
                        <div class="hero-buttons">
                            <a href="#features" class="btn hero-btn hero-btn-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="img/funkin-hero.jpg" alt="Friday Night Funkin Game" loading="lazy">
                    </div>
                </div>
            </section>
        `;

    // Add scroll effect to hero buttons
    initHeroScrollEffects();
  }
}

function initHeroScrollEffects() {
  const heroButtons = document.querySelectorAll(".hero-btn");

  heroButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    // Add click effect
    button.addEventListener("click", function () {
      this.style.transform = "translateY(0) scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateY(0) scale(1)";
      }, 150);
    });
  });

  // Parallax effect for hero image on scroll
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector(".hero-image");

    if (heroImage && window.innerWidth > 768) {
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateX(${rate}px)`;
    }
  });
}
