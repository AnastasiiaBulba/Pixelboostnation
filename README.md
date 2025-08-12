# Friday Night Funkin Unblocked - Website

A modern, responsive website for the popular rhythm game "Friday Night Funkin Unblocked" built with pure HTML, CSS, and JavaScript.

## 🎮 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 360px, 768px, and 1280px
- **Modern UI/UX**: Beautiful animations, hover effects, and smooth transitions
- **Dynamic Content**: Header and footer loaded dynamically via JavaScript
- **Cookie Management**: Cookie consent bar with localStorage functionality
- **Form Validation**: Contact form with real-time validation
- **SEO Optimized**: Proper meta tags, descriptions, and keywords
- **Performance**: Optimized images and efficient CSS/JS

## 🏗️ Project Structure

```
Pixelboostnation/
├── css/
│   ├── main.css              # Main styles and CSS variables
│   ├── header.css            # Header navigation styles
│   ├── hero.css              # Hero section styles
│   ├── features.css          # Features section styles
│   ├── how-to-play.css       # How to play section styles
│   ├── field-description.css # Field description styles
│   ├── reviews.css           # Reviews section styles
│   ├── game-section.css      # Additional game section styles
│   ├── footer.css            # Footer styles
│   ├── cookie-bar.css        # Cookie consent bar styles
│   ├── news.css              # News page styles
│   ├── contacts.css          # Contact page styles
│   └── legal.css             # Legal pages styles
├── js/
│   ├── main.js               # Main JavaScript functionality
│   ├── hero.js               # Hero section interactions
│   ├── features.js           # Features section interactions
│   ├── how-to-play.js        # How to play interactions
│   ├── field-description.js  # Field description interactions
│   ├── reviews.js            # Reviews section interactions
│   ├── game-section.js       # Game section interactions
│   ├── cookie-bar.js         # Cookie management
│   ├── news.js               # News page functionality
│   └── contacts.js           # Contact form handling
├── img/                      # Game images and assets
├── index.html                # Main homepage
├── funkin-news.html          # News page
├── funkin-contacts.html      # Contact page
├── funkin-disclaimer.html    # Legal disclaimer
├── funkin-privacy.html       # Privacy policy
├── funkin-cookies.html       # Cookie policy
├── data.json                 # Content data for easy customization
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Local web server (for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local web server to avoid CORS issues

### Development Server

You can use any of these methods to run a local server:

**Python 3:**

```bash
python -m http.server 8000
```

**Node.js:**

```bash
npx http-server
```

**PHP:**

```bash
php -S localhost:8000
```

## 🎨 Customization

### Colors and Theme

Edit CSS variables in `css/main.css`:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --accent-color: #45b7d1;
  /* ... more variables */
}
```

### Content Updates

Modify `data.json` to update:

- Game features
- How to play instructions
- Reviews
- News content
- Contact information

### Adding New Sections

1. Create HTML structure in the main page
2. Add corresponding CSS file
3. Create JavaScript file for interactions
4. Link all files in the HTML

## 📱 Responsive Breakpoints

- **Mobile**: 360px and below
- **Tablet**: 768px and below
- **Desktop**: 1280px and below
- **Large Desktop**: Above 1280px

## 🔧 Technical Details

### CSS Features

- Flexbox layouts (no CSS Grid)
- CSS custom properties (variables)
- Smooth animations and transitions
- Mobile-first responsive design

### JavaScript Features

- ES6+ syntax
- Dynamic content loading
- Form validation
- Cookie management
- Intersection Observer for animations

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 Pages

### Homepage (`index.html`)

- Hero section with game introduction
- Features showcase
- How to play instructions
- Game field description
- Player reviews
- Additional game information

### News (`funkin-news.html`)

- Game updates
- Trail diaries
- Load more functionality

### Contacts (`funkin-contacts.html`)

- Contact form with validation
- Contact information
- Google Maps integration

### Legal Pages

- **Disclaimer**: Game usage terms and liability
- **Privacy Policy**: Data collection and usage
- **Cookie Policy**: Cookie usage and management

## 🍪 Cookie Management

The website includes a cookie consent bar that:

- Shows on first visit
- Stores user preference in localStorage
- Provides accept/decline options
- Links to detailed cookie policy

## 📧 Contact Form

Features include:

- Real-time validation
- Pattern matching for inputs
- Success message display
- Form reset after submission

## 🎯 SEO Features

- Proper meta descriptions and keywords
- Semantic HTML structure
- Optimized image alt texts
- Clean URL structure
- Fast loading times

## 🚀 Performance Tips

1. **Images**: All images are optimized and use lazy loading
2. **CSS**: Modular CSS files for better caching
3. **JavaScript**: Efficient event handling and minimal DOM manipulation
4. **Animations**: CSS-based animations for better performance

## 🔒 Security Features

- Form input validation
- XSS prevention
- Secure cookie handling
- No external dependencies

## 📝 License

This project is created for educational and commercial use. All game-related content belongs to their respective owners.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:

- Email: contact@pixelboostnation.com
- Phone: +66 515 123 456
- Address: 1 Cavill Avenue, Surfers Paradise QLD 4217, Australia

## 🔄 Updates

- **v1.0.0**: Initial release with all core features
- Responsive design implementation
- Cookie management system
- Contact form with validation
- Complete legal documentation

---

**Note**: This website is designed specifically for the Friday Night Funkin Unblocked game and follows modern web development best practices. All content is optimized for the Australian market and gaming community.
