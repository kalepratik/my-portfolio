# Pratik Kumar Kale - Professional Portfolio Website

A modern, responsive portfolio website. Live: https://kalepratik.github.io/my-portfolio/

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient hero section
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Interactive Elements**: Mobile navigation, form validation, and dynamic effects
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Fast Loading**: Optimized assets and minimal dependencies

## 📁 Project Structure

```
My_Website/
├── index.html                     # Main site
├── assets/
│   ├── css/styles.css             # Styles (light/dark, layout, components)
│   ├── js/script.js               # Projects data, filters, theming, UX
│   └── images/                    # Images (profile, etc.)
├── resume/
│   ├── resume.md                  # Source resume (markdown)
│   ├── resume.html                # Printable HTML resume
│   ├── resume.pdf                 # Downloaded by the site
│   └── auto_convert_simple.py     # Local HTML → PDF converter
├── .github/workflows/resume.yaml  # Manual-only resume build (optional)
├── config.json                    # Text content (hero/about/profile)
├── README.md                      # This guide
├── LICENSE                        # MIT
└── docs/                          # Extra docs
    ├── technical/
    ├── functional/
    └── user-guides/
```

## 🛠️ Setup Instructions

### Option 1: Simple Setup (No Build Tools)
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start customizing the content

### Option 2: Local Development Server
- Python (built-in):
  - Run: `python -m http.server 5500`
  - Visit: `http://localhost:5500/`
- VS Code Live Server also works.

### Option 3: Production Deployment
1. Upload all files to your web hosting service
2. Configure your domain to point to the hosting
3. Your website will be live!

## 🎨 Customization Guide

### Personal Information
Update the following in `index.html`:
- Replace "Your Name" with your actual name
- Update contact information (email, phone, location)
- Modify the hero section content
- Update social media links

### Content Customization
- **Hero/About/Profile**: edit text in `config.json` (applied at runtime)
- **Experience**: edit timeline in `index.html` (supports in-card role promotions)
- **Projects**:
  - Add/update entries in `assets/js/script.js` inside the `projects` array
  - Tags in each project drive the Technologies filter
- **Technologies filter (menu)**:
  - Options are defined in `index.html` under the `.tech-menu`
  - Keep list concise (actual tools/tech only); items are matched case-insensitively

### Styling Customization
In `styles.css`, you can modify:
- Color scheme (primary colors, gradients)
- Typography (fonts, sizes, weights)
- Layout spacing and grid systems
- Animation timings and effects

### Adding Images
Place images under `assets/images/` and reference as `assets/images/<name>`.

## 🚀 Deployment Options

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on every push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### GitHub Pages
1. Push to `master` (site root)
2. Settings → Pages → Source: `master /root` (already configured for this repo)

### Traditional Hosting
1. Upload all files via FTP/SFTP
2. Configure your domain DNS
3. Your website is live!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

This project includes comprehensive documentation in the `docs/` folder:

### 📖 Available Documentation
- **[Getting Started Guide](docs/user-guides/getting-started.md)** - Quick start for new users
- **[Architecture Overview](docs/technical/architecture.md)** - System design and patterns
- **[File Structure](docs/technical/file-structure.md)** - Detailed project organization
- **[Customization Guide](docs/functional/customization.md)** - Personalization options
- **[Deployment Guide](docs/functional/deployment.md)** - Hosting and deployment strategies

### 📋 Documentation Status
- ✅ **Completed**: Core technical docs, customization, deployment, getting started
- 🔄 **In Progress**: Additional technical and functional guides
- 📝 **Planned**: Development setup, testing, content management guides

For the complete documentation structure, see [docs/README.md](docs/README.md).

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

## 🧭 Collaboration & Workflow (use this when starting a new chat)

- Branching
  - For content-only changes: `content-updates`
  - For UI/structure changes: `ui-updates/<short-topic>`
  - Create the branch, implement, then PR to `master`
- Commit style: `type(scope): summary`, e.g., `content(experience): add ITVersity role promotions`
- Local test checklist
  - Start server: `python -m http.server 5500`
  - Hard refresh (Ctrl+F5) to bust caches
  - Verify dark/light theme toggle
  - Test Projects search, Technologies filter, and Reset behavior
  - Download resume link points to `resume/resume.pdf`
- Assistant collaboration rules
  - Don’t commit without explicit instruction
  - Prefer small focused edits; keep indentation and style
  - After any process change, update this README

## 📄 Resume Update Process (local preferred)

1. Update content in `resume/resume.html` (source for PDF)
2. Generate PDF locally:
   - Run: `python resume/auto_convert_simple.py`
   - Output overwrites `resume/resume.pdf`
3. Commit `resume/resume.pdf` and push

Notes
- The GitHub Action in `.github/workflows/resume.yaml` is manual-only (no auto on push). Use it only if you need a remote build.


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing or deploying your website, feel free to reach out!

---

**Note**: This is a static website template. For dynamic features like a blog or CMS, you'll need to integrate with a backend service or use a static site generator.

## 📄 Resume Update Workflow

When updating the resume, follow this order to keep artifacts in sync:

1. Edit the source Markdown (`resume/resume.md`).
2. Build the HTML (`resume/resume.html`).
3. Convert HTML to PDF (`resume/resume.pdf`). You can use the helper script `resume/auto_convert_simple.py` or trigger the GitHub Action “Build Resume (MD -> HTML -> PDF)”.
4. Verify formatting, then commit and push the changes to the repo (the Action can auto‑commit outputs).

Only push after PDF is regenerated, so the website and downloadable file match.
