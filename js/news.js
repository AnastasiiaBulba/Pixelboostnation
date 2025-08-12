// News page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initNews();
});

let additionalContent = [
  {
    title: "Community Spotlight: Top Players",
    excerpt:
      "Meet the rhythm masters who are dominating the Friday Night Funkin leaderboards this month.",
    date: "2025-01-22",
    category: "Game Updates",
  },
  {
    title: "Modding Community Update",
    excerpt:
      "Discover the latest custom songs and character mods created by our amazing community.",
    date: "2025-01-21",
    category: "Trail Diaries",
  },
  {
    title: "Upcoming Events Calendar",
    excerpt:
      "Mark your calendars for exciting tournaments and community events coming in the new year.",
    date: "2025-01-19",
    category: "Game Updates",
  },
  {
    title: "Developer Q&A Session",
    excerpt:
      "Get answers to your burning questions about Friday Night Funkin's development and future plans.",
    date: "2025-01-17",
    category: "Trail Diaries",
  },
];

let loadedGameUpdatesCount = 0;
let loadedTrailDiariesCount = 0;

// Separate content by category
let gameUpdatesContent = additionalContent.filter(
  (item) => item.category === "Game Updates"
);
let trailDiariesContent = additionalContent.filter(
  (item) => item.category === "Trail Diaries"
);

function initNews() {
  loadInitialNews();
}

function loadInitialNews() {
  // Load game updates
  const gameUpdatesGrid = document.getElementById("game-updates-grid");
  if (gameUpdatesGrid) {
    const gameUpdates = [
      {
        title: "New Song Pack Released",
        excerpt:
          "Get ready for the hottest new tracks in our latest update! We've added 5 brand new songs with varying difficulty levels.",
        date: "2025-01-20",
        category: "Game Updates",
      },
      {
        title: "Performance Improvements",
        excerpt:
          "We've optimized the game engine for smoother gameplay and better performance across all devices.",
        date: "2025-01-18",
        category: "Game Updates",
      },
    ];

    gameUpdates.forEach((update) => {
      gameUpdatesGrid.appendChild(createNewsCard(update));
    });
  }

  // Load trail diaries
  const trailDiariesGrid = document.getElementById("trail-diaries-grid");
  if (trailDiariesGrid) {
    const trailDiaries = [
      {
        title: "Behind the Scenes: Character Design",
        excerpt:
          "Take a peek into our creative process as we design the latest characters for Friday Night Funkin.",
        date: "2025-01-16",
        category: "Trail Diaries",
        image: "funkin-block1.jpg",
      },
      {
        title: "Music Production Secrets",
        excerpt:
          "Discover how we create the infectious beats and melodies that make Friday Night Funkin so memorable.",
        date: "2025-01-14",
        category: "Trail Diaries",
        image: "funkin-block2.jpg",
      },
    ];

    trailDiaries.forEach((diary) => {
      trailDiariesGrid.appendChild(createNewsCard(diary));
    });
  }
}

function createNewsCard(newsItem) {
  const card = document.createElement("div");
  card.className = "news-card";

  let imageHtml = "";
  if (newsItem.image) {
    imageHtml = `
            <div class="news-card-image">
                <img src="img/${newsItem.image}" alt="${newsItem.title}" loading="lazy">
            </div>
        `;
  }

  card.innerHTML = `
        <div class="news-card-category">${newsItem.category}</div>
        ${imageHtml}
        <h3 class="news-card-title">${newsItem.title}</h3>
        <p class="news-card-excerpt">${newsItem.excerpt}</p>
        <div class="news-card-date">${formatDate(newsItem.date)}</div>
        <button class="btn btn-primary read-more-btn">
            Read More
        </button>
    `;

  // Add click event listener for Read More button
  const readMoreBtn = card.querySelector(".read-more-btn");
  readMoreBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent card click event
    openNewsModal(
      newsItem.title,
      newsItem.excerpt,
      newsItem.category,
      newsItem.date,
      newsItem.image || ""
    );
  });

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

  return card;
}

function loadMoreGameUpdates() {
  const loadMoreBtn = document.getElementById("load-more-game-updates-btn");
  if (loadMoreBtn) {
    loadMoreBtn.textContent = "Loading...";
    loadMoreBtn.disabled = true;
  }

  // Simulate loading delay
  setTimeout(() => {
    const gameUpdatesGrid = document.getElementById("game-updates-grid");

    // Load additional game updates content
    if (loadedGameUpdatesCount < gameUpdatesContent.length) {
      const content = gameUpdatesContent[loadedGameUpdatesCount];
      gameUpdatesGrid.appendChild(createNewsCard(content));
      loadedGameUpdatesCount++;

      // Add animation to new card
      const newCard = gameUpdatesGrid.lastElementChild;
      if (newCard) {
        newCard.style.animationDelay = "0.1s";
        newCard.classList.add("fade-in-up");
      }
    }

    // Update button state
    if (loadMoreBtn) {
      if (loadedGameUpdatesCount >= gameUpdatesContent.length) {
        loadMoreBtn.textContent = "All Content Loaded";
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = "0.6";
      } else {
        loadMoreBtn.textContent = "Load More Content";
        loadMoreBtn.disabled = false;
      }
    }
  }, 1000);
}

function loadMoreTrailDiaries() {
  const loadMoreBtn = document.getElementById("load-more-trail-diaries-btn");
  if (loadMoreBtn) {
    loadMoreBtn.textContent = "Loading...";
    loadMoreBtn.disabled = true;
  }

  // Simulate loading delay
  setTimeout(() => {
    const trailDiariesGrid = document.getElementById("trail-diaries-grid");

    // Load additional trail diaries content
    if (loadedTrailDiariesCount < trailDiariesContent.length) {
      const content = trailDiariesContent[loadedTrailDiariesCount];
      trailDiariesGrid.appendChild(createNewsCard(content));
      loadedTrailDiariesCount++;

      // Add animation to new card
      const newCard = trailDiariesGrid.lastElementChild;
      if (newCard) {
        newCard.style.animationDelay = "0.1s";
        newCard.classList.add("fade-in-up");
      }
    }

    // Update button state
    if (loadMoreBtn) {
      if (loadedTrailDiariesCount >= trailDiariesContent.length) {
        loadMoreBtn.textContent = "All Content Loaded";
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = "0.6";
      } else {
        loadMoreBtn.textContent = "Load More Content";
        loadMoreBtn.disabled = false;
      }
    }
  }, 1000);
}

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-AU", options);
}

// Modal functions
function openNewsModal(title, excerpt, category, date, image) {
  const modal = document.getElementById("news-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalExcerpt = document.getElementById("modal-excerpt");
  const modalCategory = document.getElementById("modal-category");
  const modalDate = document.getElementById("modal-date");
  const modalImage = document.getElementById("modal-image");
  const modalFullContent = document.getElementById("modal-full-content");

  // Set modal content
  modalTitle.textContent = title;
  modalExcerpt.textContent = excerpt;
  modalCategory.textContent = category;
  modalDate.textContent = formatDate(date);

  // Handle image
  if (image) {
    modalImage.innerHTML = `<img src="img/${image}" alt="${title}" loading="lazy">`;
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
  }

  // Generate full content based on title
  const fullContent = generateFullContent(title, excerpt);
  modalFullContent.innerHTML = fullContent;

  // Show modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeNewsModal() {
  const modal = document.getElementById("news-modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function generateFullContent(title, excerpt) {
  // Generate expanded content based on the news title
  let fullContent = `<p>${excerpt}</p>`;

  if (title.includes("Song Pack")) {
    fullContent += `
      <p>The new song pack introduces 5 exciting tracks that will challenge even the most experienced rhythm gamers. Each song has been carefully crafted with multiple difficulty levels, ensuring that both beginners and veterans can enjoy the experience.</p>
      <p>Featured songs include:</p>
      <ul>
        <li><strong>Midnight Groove</strong> - A smooth jazz-inspired track perfect for warming up</li>
        <li><strong>Electric Dreams</strong> - High-energy electronic beats that will get your heart racing</li>
        <li><strong>Neon Nights</strong> - A synthwave masterpiece with retro vibes</li>
        <li><strong>Urban Funk</strong> - Modern hip-hop rhythms with infectious hooks</li>
        <li><strong>Cosmic Beats</strong> - An otherworldly experience with space-themed melodies</li>
      </ul>
      <p>Each track comes with unique visual effects and character animations that complement the music perfectly. The difficulty progression has been carefully balanced to provide a smooth learning curve.</p>
    `;
  } else if (title.includes("Performance")) {
    fullContent += `
      <p>Our development team has been working tirelessly to optimize the game engine for better performance across all devices. The latest update brings significant improvements in several key areas:</p>
      <ul>
        <li><strong>Frame Rate Optimization</strong> - Smoother gameplay with consistent 60 FPS on most devices</li>
        <li><strong>Memory Management</strong> - Reduced memory usage for better multitasking</li>
        <li><strong>Loading Times</strong> - Faster song loading and reduced wait times</li>
        <li><strong>Battery Life</strong> - Improved efficiency for mobile devices</li>
        <li><strong>Cross-Platform Compatibility</strong> - Better performance on various operating systems</li>
      </ul>
      <p>These optimizations ensure that Friday Night Funkin runs smoothly whether you're playing on a high-end gaming PC or a budget smartphone.</p>
    `;
  } else if (title.includes("Character Design")) {
    fullContent += `
      <p>Our character design process is a fascinating journey that combines creativity, technical expertise, and community feedback. Each character in Friday Night Funkin goes through several development stages:</p>
      <ul>
        <li><strong>Concept Art</strong> - Initial sketches and mood boards that capture the character's personality</li>
        <li><strong>Character Development</strong> - Detailed backstory and motivation creation</li>
        <li><strong>Animation Planning</strong> - Storyboarding key movements and expressions</li>
        <li><strong>Technical Implementation</strong> - Converting designs into game-ready assets</li>
        <li><strong>Testing and Refinement</strong> - Community feedback integration and final adjustments</li>
      </ul>
      <p>We believe that every character should have a unique story and visual style that contributes to the overall gaming experience.</p>
    `;
  } else if (title.includes("Music Production")) {
    fullContent += `
      <p>Creating the infectious beats and melodies for Friday Night Funkin is both an art and a science. Our music production process involves several key elements:</p>
      <ul>
        <li><strong>Rhythm Foundation</strong> - Building solid drum patterns that drive the gameplay</li>
        <li><strong>Melody Creation</strong> - Crafting memorable hooks that players will hum for days</li>
        <li><strong>Harmony Development</strong> - Adding depth with chord progressions and bass lines</li>
        <li><strong>Sound Design</strong> - Creating unique timbres that define each character's style</li>
        <li><strong>Mixing and Mastering</strong> - Ensuring perfect balance across all frequency ranges</li>
      </ul>
      <p>Every track is designed to be both enjoyable to listen to and challenging to play, creating the perfect balance of entertainment and skill development.</p>
    `;
  } else {
    // Default expanded content for other news items
    fullContent += `
      <p>This is just the beginning of what we have planned for Friday Night Funkin. Our development team is constantly working on new features, improvements, and content to enhance your gaming experience.</p>
      <p>Stay tuned for more updates, and don't forget to join our community discussions to share your thoughts and suggestions. Your feedback is invaluable in helping us shape the future of the game.</p>
      <p>We're committed to making Friday Night Funkin the best rhythm gaming experience possible, and we can't wait to share more exciting developments with you in the coming months.</p>
    `;
  }

  return fullContent;
}

// Add intersection observer for animations
document.addEventListener("DOMContentLoaded", function () {
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

  // Observe news cards
  const newsCards = document.querySelectorAll(".news-card");
  newsCards.forEach((card) => {
    observer.observe(card);
  });

  // Close modal when clicking outside
  const modal = document.getElementById("news-modal");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeNewsModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNewsModal();
    }
  });
});
