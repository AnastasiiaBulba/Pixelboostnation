// Field Description section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initFieldDescription();
});

function initFieldDescription() {
  const fieldDescriptionPlaceholder = document.getElementById(
    "field-description-placeholder"
  );
  if (fieldDescriptionPlaceholder) {
    fieldDescriptionPlaceholder.innerHTML = `
            <section class="field-description">
                <div class="field-description-container">
                    <h2 class="section-title">Game Field & Environment</h2>
                    <div class="field-description-content">
                        <div class="field-description-text">
                            <h3 class="field-description-title">The Ultimate Rhythm Battlefield</h3>
                            <p class="field-description-subtitle">Where Music Meets Challenge</p>
                            <p class="field-description-description">
                                Step into the vibrant and dynamic world of Friday Night Funkin, where every stage is designed 
                                to enhance your musical journey. From neon-lit cityscapes to mystical forests, each environment 
                                brings its own unique atmosphere and challenges.
                            </p>
                            <div class="field-features">
                                <div class="field-feature">
                                    <div class="field-feature-icon">🎯</div>
                                    <span class="field-feature-text">Dynamic Backgrounds</span>
                                </div>
                                <div class="field-feature">
                                    <div class="field-feature-icon">🌈</div>
                                    <span class="field-feature-text">Vibrant Color Schemes</span>
                                </div>
                                <div class="field-feature">
                                    <div class="field-feature-icon">🎭</div>
                                    <span class="field-feature-text">Character Animations</span>
                                </div>
                                <div class="field-feature">
                                    <div class="field-feature-icon">⚡</div>
                                    <span class="field-feature-text">Smooth Transitions</span>
                                </div>
                                <div class="field-feature">
                                    <div class="field-feature-icon">🎨</div>
                                    <span class="field-feature-text">Pixel Art Excellence</span>
                                </div>
                            </div>
                        </div>
                        <div class="field-description-image">
                            <img src="img/funkin-baner2.jpg" alt="Friday Night Funkin Game Field" loading="lazy">
                        </div>
                    </div>
                </div>
            </section>
        `;

    // Initialize field description interactions
    initFieldDescriptionInteractions();
  }
}

function initFieldDescriptionInteractions() {
  const fieldFeatures = document.querySelectorAll(".field-feature");
  const fieldImage = document.querySelector(".field-description-image");

  // Add staggered animation delay to features
  fieldFeatures.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.1}s`;

    // Add hover effects
    feature.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.05)";
      this.style.background = "var(--accent-color)";
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
    const icon = feature.querySelector(".field-feature-icon");
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
  if (fieldImage) {
    fieldImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "var(--shadow-lg)";
    });

    fieldImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "var(--shadow-lg)";
    });

    // Add click effect
    fieldImage.addEventListener("click", function () {
      this.style.transform = "scale(1.02)";
      setTimeout(() => {
        this.style.transform = "scale(1.05)";
      }, 150);
    });
  }

  // Add title underline animation
  const title = document.querySelector(".field-description-title");
  if (title) {
    title.addEventListener("mouseenter", function () {
      const underline = this.querySelector("::after");
      if (underline) {
        underline.style.width = "80px";
      }
    });
  }

  // Add subtitle color animation
  const subtitle = document.querySelector(".field-description-subtitle");
  if (subtitle) {
    subtitle.addEventListener("mouseenter", function () {
      this.style.color = "var(--secondary-color)";
    });

    subtitle.addEventListener("mouseleave", function () {
      this.style.color = "var(--accent-color)";
    });
  }
}
