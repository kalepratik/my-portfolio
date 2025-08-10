# Customization Guide

## Overview

This guide provides detailed instructions for customizing your portfolio website to match your personal brand and requirements. All customizations can be made without advanced technical knowledge.

## 🎨 Visual Customization

### Color Scheme

#### Primary Colors
The website uses a modern color palette that can be easily customized in `styles.css`:

```css
/* Current Color Scheme */
:root {
  --primary-color: #2563eb;      /* Blue */
  --secondary-color: #fbbf24;    /* Yellow */
  --accent-color: #667eea;       /* Purple */
  --text-color: #333;            /* Dark Gray */
  --light-text: #6b7280;         /* Light Gray */
  --background: #f9fafb;         /* Light Background */
  --white: #ffffff;              /* White */
}
```

#### Customizing Colors
1. **Open `styles.css`**
2. **Find the `:root` section** (around line 1-10)
3. **Replace color values** with your preferred colors:

```css
:root {
  --primary-color: #your-color;      /* Your brand color */
  --secondary-color: #your-color;    /* Accent color */
  --accent-color: #your-color;       /* Highlight color */
  /* ... other colors */
}
```

#### Color Palette Suggestions
- **Professional Blue**: `#2563eb`, `#1d4ed8`, `#1e40af`
- **Creative Purple**: `#7c3aed`, `#6d28d9`, `#5b21b6`
- **Modern Green**: `#059669`, `#047857`, `#065f46`
- **Warm Orange**: `#ea580c`, `#dc2626`, `#b91c1c`

### Typography

#### Font Family
The website uses Inter font family. To change:

1. **Update Google Fonts link** in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Update font-family** in `styles.css`:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

#### Font Size and Weight
Customize typography in `styles.css`:

```css
/* Hero Title */
.hero-title {
  font-size: 3.5rem;        /* Adjust size */
  font-weight: 700;         /* Adjust weight */
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;        /* Adjust size */
  font-weight: 700;         /* Adjust weight */
}

/* Body Text */
body {
  font-size: 1rem;          /* Base font size */
  line-height: 1.6;         /* Line spacing */
}
```

### Layout and Spacing

#### Container Width
Adjust the maximum width of content sections:

```css
.container {
  max-width: 1200px;        /* Change to your preferred width */
  margin: 0 auto;
  padding: 0 20px;
}
```

#### Section Padding
Customize spacing between sections:

```css
section {
  padding: 80px 0;          /* Vertical padding */
}
```

#### Grid Layouts
Modify grid layouts for different sections:

```css
/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;                /* Adjust gap between cards */
}
```

## 📝 Content Customization

### Personal Information

#### Name and Title
Update your name and professional title in `index.html`:

```html
<!-- Navigation Logo -->
<div class="nav-logo">
  <h2>Your Name</h2>
</div>

<!-- Hero Section -->
<h1 class="hero-title">
  Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">
  Your Professional Title
</p>
```

#### About Section
Customize your personal description:

```html
<div class="about-text">
  <p>
    Your personal description here. Make it engaging and professional.
  </p>
  <p>
    Additional information about your approach and expertise.
  </p>
</div>
```

#### Skills and Expertise
Update your skills in the about section:

```html
<div class="skill-tags">
  <span class="skill-tag">Your Skill 1</span>
  <span class="skill-tag">Your Skill 2</span>
  <span class="skill-tag">Your Skill 3</span>
  <!-- Add more skills as needed -->
</div>
```

#### Statistics
Update your achievements and experience:

```html
<div class="about-stats">
  <div class="stat-item">
    <h3>50+</h3>                    <!-- Your number -->
    <p>Projects Completed</p>        <!-- Your metric -->
  </div>
  <div class="stat-item">
    <h3>5+</h3>                     <!-- Your number -->
    <p>Years Experience</p>          <!-- Your metric -->
  </div>
  <div class="stat-item">
    <h3>100%</h3>                   <!-- Your number -->
    <p>Client Satisfaction</p>       <!-- Your metric -->
  </div>
</div>
```

### Services Section

#### Service Cards
Customize your services by editing each service card:

```html
<div class="service-card">
  <div class="service-icon">
    <i class="fas fa-code"></i>      <!-- Change icon -->
  </div>
  <h3>Your Service Title</h3>        <!-- Your service name -->
  <p>Your service description here.</p> <!-- Your description -->
</div>
```

#### Available Icons
Use Font Awesome icons for service cards:
- `fa-code` - Web Development
- `fa-palette` - Design
- `fa-chart-line` - Strategy
- `fa-mobile-alt` - Mobile Development
- `fa-database` - Backend Development
- `fa-cloud` - Cloud Services
- `fa-shield-alt` - Security
- `fa-rocket` - Optimization

### Portfolio Section

#### Portfolio Items
Add your projects to the portfolio section:

```html
<div class="portfolio-item">
  <div class="portfolio-image">
    <!-- Add your project image here -->
    <img src="images/your-project.jpg" alt="Project Name">
  </div>
  <div class="portfolio-content">
    <h3>Your Project Name</h3>
    <p>Project description and details.</p>
    <div class="portfolio-tags">
      <span class="tag">Technology 1</span>
      <span class="tag">Technology 2</span>
      <span class="tag">Technology 3</span>
    </div>
  </div>
</div>
```

### Contact Information

#### Contact Details
Update your contact information:

```html
<div class="contact-details">
  <div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
  </div>
  <div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
  </div>
  <div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, State</span>
  </div>
</div>
```

#### Social Media Links
Update your social media profiles:

```html
<div class="social-links">
  <a href="https://linkedin.com/in/yourprofile" class="social-link">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://twitter.com/yourhandle" class="social-link">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com/yourprofile" class="social-link">
    <i class="fab fa-instagram"></i>
  </a>
</div>
```

## 🖼️ Image Customization

### Adding Your Photos

#### Hero Section Image
Replace the placeholder icon with your photo:

```html
<div class="hero-image">
  <img src="images/your-photo.jpg" alt="Your Name" class="hero-photo">
</div>
```

Add corresponding CSS:
```css
.hero-photo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
}
```

#### Portfolio Images
Add project screenshots:

```html
<div class="portfolio-image">
  <img src="images/project-1.jpg" alt="Project Name">
</div>
```

### Image Optimization
- **Format**: Use WebP or JPEG for photos, PNG for graphics
- **Size**: Optimize images to under 500KB each
- **Dimensions**: Use appropriate sizes (hero: 600x600px, portfolio: 800x600px)
- **Alt Text**: Always include descriptive alt text for accessibility

## 🎭 Animation Customization

### Hover Effects
Customize hover animations in `styles.css`:

```css
/* Service Card Hover */
.service-card:hover {
  transform: translateY(-5px);      /* Adjust lift distance */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Adjust shadow */
}

/* Button Hover */
.btn-primary:hover {
  background: #f59e0b;              /* Change hover color */
  transform: translateY(-2px);      /* Adjust lift */
}
```

### Transition Speeds
Adjust animation timing:

```css
/* Global transition speed */
* {
  transition: all 0.3s ease;        /* Change from 0.3s to your preference */
}
```

### Fade-in Animations
Customize scroll animations:

```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);      /* Adjust starting position */
  transition: all 0.6s ease;        /* Adjust duration */
}
```

## 📱 Responsive Customization

### Mobile Breakpoints
Adjust responsive breakpoints in `styles.css`:

```css
/* Tablet */
@media (min-width: 768px) {
  /* Your tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Your desktop styles */
}

/* Large Desktop */
@media (min-width: 1200px) {
  /* Your large desktop styles */
}
```

### Mobile-Specific Adjustments
Customize mobile layout:

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;              /* Adjust mobile font size */
  }
  
  .hero-buttons {
    flex-direction: column;         /* Stack buttons on mobile */
    gap: 1rem;
  }
}
```

## 🔧 Advanced Customization

### CSS Variables
Use CSS custom properties for easy theming:

```css
:root {
  --border-radius: 8px;             /* Global border radius */
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); /* Global shadow */
  --transition: all 0.3s ease;      /* Global transition */
}
```

### Custom Components
Add new sections or components by following the existing patterns:

```html
<!-- New Section Template -->
<section id="new-section" class="new-section">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <div class="section-content">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

### JavaScript Customization
Add custom functionality in `script.js`:

```javascript
// Custom function example
function customFunction() {
  // Your custom code here
}

// Event listener example
document.addEventListener('DOMContentLoaded', function() {
  // Your custom initialization
});
```

## 🎯 Branding Guidelines

### Logo Integration
Add your logo to the navigation:

```html
<div class="nav-logo">
  <img src="images/your-logo.png" alt="Your Brand" class="logo">
</div>
```

### Brand Colors
Ensure consistency across all elements:
- **Primary**: Use for main actions and highlights
- **Secondary**: Use for accents and secondary elements
- **Neutral**: Use for text and backgrounds
- **Accent**: Use sparingly for special highlights

### Typography Hierarchy
Maintain consistent typography:
- **H1**: Hero titles and main headings
- **H2**: Section titles
- **H3**: Subsection titles
- **Body**: Regular text content
- **Small**: Captions and metadata

## 📋 Customization Checklist

### Essential Updates
- [ ] Update personal name and title
- [ ] Replace contact information
- [ ] Add social media links
- [ ] Update about section content
- [ ] Customize services offered
- [ ] Add portfolio projects
- [ ] Update skills and expertise
- [ ] Add personal photos

### Visual Customization
- [ ] Choose brand colors
- [ ] Select typography
- [ ] Add logo/branding
- [ ] Customize animations
- [ ] Adjust spacing and layout
- [ ] Test responsive design

### Content Updates
- [ ] Write compelling hero copy
- [ ] Create detailed service descriptions
- [ ] Add project case studies
- [ ] Include testimonials (if applicable)
- [ ] Update statistics and achievements
- [ ] Add call-to-action buttons

### Technical Optimization
- [ ] Optimize images
- [ ] Test loading speed
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test contact form
- [ ] Review accessibility

## 🆘 Troubleshooting

### Common Issues
1. **Colors not updating**: Clear browser cache
2. **Fonts not loading**: Check Google Fonts URL
3. **Images not displaying**: Verify file paths
4. **Layout breaking**: Check CSS syntax
5. **Mobile issues**: Test on actual devices

### Getting Help
- Check browser console for errors
- Validate HTML/CSS using online validators
- Test in different browsers
- Use browser developer tools for debugging

## 📚 Additional Resources

### Design Inspiration
- [Dribbble](https://dribbble.com) - Design inspiration
- [Behance](https://behance.net) - Portfolio examples
- [Awwwards](https://awwwards.com) - Web design trends

### Color Tools
- [Coolors](https://coolors.co) - Color palette generator
- [Adobe Color](https://color.adobe.com) - Color wheel
- [Paletton](https://paletton.com) - Color scheme designer

### Typography Resources
- [Google Fonts](https://fonts.google.com) - Free web fonts
- [FontPair](https://fontpair.co) - Font combinations
- [Typewolf](https://typewolf.com) - Typography inspiration
