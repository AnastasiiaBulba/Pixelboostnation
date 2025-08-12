// Game Section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initGameSection();
});

function initGameSection() {
  const gameSectionPlaceholder = document.getElementById(
    "game-section-placeholder"
  );
  if (gameSectionPlaceholder) {
    gameSectionPlaceholder.innerHTML = `
            <section class="game-section">
                <div class="game-section-container">
                    <h2 class="section-title">Join the Funky Revolution</h2>
                    <div class="game-section-content">
                        <div class="game-section-text">
                            <h3 class="game-section-title">Ready to Show Your Moves?</h3>
                            <p class="game-section-subtitle">The Ultimate Rhythm Challenge Awaits</p>
                            <p class="game-section-description">
                                Friday Night Funkin isn't just a game – it's a musical journey that will test your rhythm skills 
                                and get your feet tapping. With its unique blend of catchy tunes, challenging gameplay, and 
                                vibrant visuals, this game has captured the hearts of millions of players worldwide.
                            </p>
                            <div class="game-section-features">
                                <div class="game-section-feature">
                                    <div class="game-section-feature-icon">🎶</div>
                                    <span class="game-section-feature-text">Original Soundtrack</span>
                                </div>
                                <div class="game-section-feature">
                                    <div class="game-section-feature-icon">🎭</div>
                                    <span class="game-section-feature-text">Unique Characters</span>
                                </div>
                                <div class="game-section-feature">
                                    <div class="game-section-feature-icon">🏆</div>
                                    <span class="game-section-feature-text">Competitive Leaderboards</span>
                                </div>
                                <div class="game-section-feature">
                                    <div class="game-section-feature-icon">🌍</div>
                                    <span class="game-section-feature-text">Global Community</span>
                                </div>
                                <div class="game-section-feature">
                                    <div class="game-section-feature-icon">📱</div>
                                    <span class="game-section-feature-text">Cross-Platform Play</span>
                                </div>
                            </div>
                        </div>
                        <div class="game-section-image">
                            <img src="img/funkin-baner3.jpg" alt="Friday Night Funkin Game Experience" loading="lazy">
                        </div>
                    </div>
                </div>
            </section>
        `;

    // Initialize game section interactions
    initGameSectionInteractions();
  }
}

function initGameSectionInteractions() {
  const gameFeatures = document.querySelectorAll(".game-section-feature");
  const gameImage = document.querySelector(".game-section-image");

  // Add staggered animation delay to features
  gameFeatures.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.1}s`;

    // Add hover effects
    feature.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.05)";
      this.style.background = "var(--primary-color)";
      this.style.color = "var(--white)";
    });

    feature.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
      this.style.background = "var(--light-color)";
      this.style.color = "var(--dark-color)";
    });

    // Add click effect
    feature.addEventListener("click", function () {
      this.style.transform = "translateX(5px) scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateX(10px) scale(1.05)";
      }, 150);
    });

    // Add icon animation
    const icon = feature.querySelector(".game-section-feature-icon");
    if (icon) {
      feature.addEventListener("mouseenter", function () {
        icon.style.transform = "scale(1.2) rotate(10deg)";
      });

      feature.addEventListener("mouseleave", function () {
        icon.style.transform = "scale(1) rotate(0deg)";
      });
    }
  });

  // Add image interactions
  if (gameImage) {
    gameImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "var(--shadow-lg)";
    });

    gameImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "var(--shadow-lg)";
    });

    // Add click effect
    gameImage.addEventListener("click", function () {
      this.style.transform = "scale(1.02)";
      setTimeout(() => {
        this.style.transform = "scale(1.05)";
      }, 150);
    });
  }

  // Add title underline animation
  const title = document.querySelector(".game-section-title");
  if (title) {
    title.addEventListener("mouseenter", function () {
      const underline = this.querySelector("::after");
      if (underline) {
        underline.style.width = "80px";
      }
    });
  }

  // Add subtitle color animation
  const subtitle = document.querySelector(".game-section-subtitle");
  if (subtitle) {
    subtitle.addEventListener("mouseenter", function () {
      this.style.color = "var(--secondary-color)";
    });

    subtitle.addEventListener("mouseleave", function () {
      this.style.color = "var(--primary-color)";
    });
  }

  // Add description text animation
  const description = document.querySelector(".game-section-description");
  if (description) {
    description.addEventListener("mouseenter", function () {
      this.style.opacity = "1";
      this.style.transform = "scale(1.02)";
    });

    description.addEventListener("mouseleave", function () {
      this.style.opacity = "0.8";
      this.style.transform = "scale(1)";
    });
  }
}
