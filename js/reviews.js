// Reviews section JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initReviews();
});

function initReviews() {
  const reviewsPlaceholder = document.getElementById("reviews-placeholder");
  if (reviewsPlaceholder) {
    reviewsPlaceholder.innerHTML = `
            <section class="reviews">
                <div class="reviews-container">
                    <h2 class="section-title">What Players Say</h2>
                    <div class="reviews-grid">
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-1">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">Alex Thompson</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                This game is absolutely addictive! The music is incredible and the rhythm mechanics are so satisfying. 
                                I've been playing for hours and still can't get enough of those funky beats!
                            </p>
                            <div class="review-date">January 15, 2025</div>
                        </div>
                        
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">Sarah Chen</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                The pixel art style is gorgeous and the character designs are so creative. 
                                Each song has its own personality and the difficulty progression is perfect for learning.
                            </p>
                            <div class="review-date">February 12, 2025</div>
                        </div>
                        
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-3">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">Mike Rodriguez</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                As a rhythm game fan, this is exactly what I've been looking for. 
                                The controls are responsive and the music selection is diverse. 
                                Can't wait for more songs to be added!
                            </p>
                            <div class="review-date">March 10, 2025</div>
                        </div>
                        
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-4">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">Emma Wilson</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                The game runs perfectly on my device and the unblocked version means I can play anywhere. 
                                The community is great and there are so many mods to explore!
                            </p>
                            <div class="review-date">April 8, 2025</div>
                        </div>
                        
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-5">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">David Kim</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                Perfect for quick gaming sessions! The songs are catchy and the gameplay is smooth. 
                                I love how each character has their own unique style and music genre.
                            </p>
                            <div class="review-date">May 5, 2025</div>
                        </div>
                        
                        <div class="review-card">
                            <div class="review-header">
                                <div class="review-avatar avatar-6">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                    </svg>
                                </div>
                                <div class="review-info">
                                    <h4 class="review-name">Lisa Anderson</h4>
                                    <div class="review-rating">
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                        <span class="star">⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="review-text">
                                This game brings back the nostalgia of classic rhythm games while adding modern touches. 
                                The difficulty curve is well-balanced and the music is absolutely fire!
                            </p>
                            <div class="review-date">July 3, 2025</div>
                    </div>
                </div>
            </section>
        `;

    // Initialize reviews interactions
    initReviewsInteractions();
  }
}

function initReviewsInteractions() {
  const reviewCards = document.querySelectorAll(".review-card");
  const reviewAvatars = document.querySelectorAll(".review-avatar");

  // Add staggered animation delay to cards
  reviewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;

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
  });

  // Add avatar interactions
  reviewAvatars.forEach((avatar, index) => {
    avatar.style.animationDelay = `${index * 0.1}s`;

    avatar.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
    });

    avatar.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });

    // Add click effect
    avatar.addEventListener("click", function () {
      this.style.transform = "scale(0.9) rotate(-5deg)";
      setTimeout(() => {
        this.style.transform = "scale(1.1) rotate(5deg)";
      }, 150);
    });
  });

  // Add star rating interactions
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)";
      this.style.color = "#ffed4e";
    });

    star.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.color = "#ffd700";
    });
  });

  // Add review text quote animation
  const reviewTexts = document.querySelectorAll(".review-text");
  reviewTexts.forEach((text) => {
    text.addEventListener("mouseenter", function () {
      const quote = this.querySelector("::before");
      if (quote) {
        quote.style.opacity = "0.6";
        quote.style.transform = "scale(1.1)";
      }
    });

    text.addEventListener("mouseleave", function () {
      const quote = this.querySelector("::before");
      if (quote) {
        quote.style.opacity = "0.3";
        quote.style.transform = "scale(1)";
      }
    });
  });
}
