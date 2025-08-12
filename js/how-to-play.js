// How to Play section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initHowToPlay();
});

function initHowToPlay() {
  const howToPlayPlaceholder = document.getElementById(
    "how-to-play-placeholder"
  );
  if (howToPlayPlaceholder) {
    howToPlayPlaceholder.innerHTML = `
            <section class="how-to-play">
                <div class="how-to-play-container">
                    <h2 class="section-title">How to Play Friday Night Funkin</h2>
                    <div class="how-to-play-grid">
                        <div class="how-to-play-card">
                            <div class="step-number">1</div>
                            <h3 class="how-to-play-title">Choose Your Character</h3>
                            <p class="how-to-play-description">
                                Select from a variety of funky characters, each with their own unique style and personality. 
                                Whether you're Boyfriend, Girlfriend, or one of the many challengers, get ready to show off your moves!
                            </p>
                        </div>
                        <div class="how-to-play-card">
                            <div class="step-number">2</div>
                            <h3 class="how-to-play-title">Master the Rhythm</h3>
                            <p class="how-to-play-description">
                                Watch for the arrows that appear on screen and tap the corresponding keys in perfect sync with the beat. 
                                The better your timing, the higher your score and the more impressive your performance!
                            </p>
                        </div>
                        <div class="how-to-play-card">
                            <div class="step-number">3</div>
                            <h3 class="how-to-play-title">Face the Challenge</h3>
                            <p class="how-to-play-description">
                                Each opponent brings their own unique music style and difficulty level. 
                                Start with easier songs and work your way up to become the ultimate rhythm master!
                            </p>
                        </div>
                    </div>
                    <div class="controls-section">
                        <h3>Game Controls</h3>
                        <div class="controls-grid">
                            <div class="control-item">
                                <div class="control-key">←</div>
                                <span class="control-description">Left Arrow</span>
                            </div>
                            <div class="control-item">
                                <div class="control-key">↓</div>
                                <span class="control-description">Down Arrow</span>
                            </div>
                            <div class="control-item">
                                <div class="control-key">↑</div>
                                <span class="control-description">Up Arrow</span>
                            </div>
                            <div class="control-item">
                                <div class="control-key">→</div>
                                <span class="control-description">Right Arrow</span>
                            </div>
                        </div>
                        <p class="pro-tip">
                            <strong>Pro Tip:</strong> Practice makes perfect! Start with slower songs to get the hang of the timing, 
                            then gradually increase the difficulty as you improve your skills.
                        </p>
                    </div>
                </div>
            </section>
        `;

    // Initialize how-to-play interactions
    initHowToPlayInteractions();
  }
}

function initHowToPlayInteractions() {
  const howToPlayCards = document.querySelectorAll(".how-to-play-card");
  const controlItems = document.querySelectorAll(".control-item");

  // Add staggered animation delay to cards
  howToPlayCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;

    // Add hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    // Add click effect
    card.addEventListener("click", function () {
      this.style.transform = "translateY(-2px) scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-5px) scale(1.02)";
      }, 150);
    });

    // Add step number animation
    const stepNumber = card.querySelector(".step-number");
    if (stepNumber) {
      card.addEventListener("mouseenter", function () {
        stepNumber.style.transform = "scale(1.1) rotate(5deg)";
      });

      card.addEventListener("mouseleave", function () {
        stepNumber.style.transform = "scale(1) rotate(0deg)";
      });
    }
  });

  // Add control item interactions
  controlItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;

    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.05)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
    });

    // Add key press effect
    item.addEventListener("click", function () {
      this.style.transform = "translateX(5px) scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateX(10px) scale(1.05)";
      }, 150);
    });
  });

  // Add controls section hover effect
  const controlsSection = document.querySelector(".controls-section");
  if (controlsSection) {
    controlsSection.addEventListener("mouseenter", function () {
      this.style.boxShadow = "var(--shadow-lg)";
    });

    controlsSection.addEventListener("mouseleave", function () {
      this.style.boxShadow = "var(--shadow-md)";
    });
  }
}
