// Features section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initFeatures();
});

function initFeatures() {
  const featuresPlaceholder = document.getElementById("features-placeholder");
  if (featuresPlaceholder) {
    featuresPlaceholder.innerHTML = `
            <section class="features" id="features">
                <div class="features-container">
                    <h2 class="section-title">Why Players Love Friday Night Funkin</h2>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🎵</div>
                            <h3 class="feature-title">Amazing Music</h3>
                            <p class="feature-description">
                                Super original beats and music tracks that will get you addicted to FNF's unique sound tour world!
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">⚡</div>
                            <h3 class="feature-title">Fast-Paced Action</h3>
                            <p class="feature-description">
                                The pace is getting faster and the challenges more exciting with each level you conquer!
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🎮</div>
                            <h3 class="feature-title">Easy Controls</h3>
                            <p class="feature-description">
                                Simple arrow key controls that are easy to learn but challenging to master perfectly.
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🏆</div>
                            <h3 class="feature-title">Competitive Fun</h3>
                            <p class="feature-description">
                                Face off against all kinds of funky foes in intense rhythm battles that test your skills.
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🎨</div>
                            <h3 class="feature-title">Unique Art Style</h3>
                            <p class="feature-description">
                                Distinctive pixel art graphics that bring the funky world to life with vibrant colors.
                            </p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🔄</div>
                            <h3 class="feature-title">Endless Replayability</h3>
                            <p class="feature-description">
                                Multiple difficulty levels and songs ensure you'll never get bored of the funky beats!
                            </p>
                        </div>
                    </div>
                    <div class="features-image">
                        <img src="img/funkin-baner1.jpg" alt="Friday Night Funkin Features" loading="lazy">
                    </div>
                </div>
            </section>
        `;

    // Initialize feature card interactions
    initFeatureCardInteractions();
  }
}

function initFeatureCardInteractions() {
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;

    // Add hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    // Add click effect
    card.addEventListener("click", function () {
      this.style.transform = "translateY(-5px) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-10px) scale(1.02)";
      }, 150);
    });

    // Add icon animation on hover
    const icon = card.querySelector(".feature-icon");
    if (icon) {
      card.addEventListener("mouseenter", function () {
        icon.style.transform = "scale(1.1) rotate(5deg)";
      });

      card.addEventListener("mouseleave", function () {
        icon.style.transform = "scale(1) rotate(0deg)";
      });
    }
  });

  // Add image hover effect
  const featuresImage = document.querySelector(".features-image");
  if (featuresImage) {
    featuresImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
    });

    featuresImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}
