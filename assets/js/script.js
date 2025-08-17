// Projects data
const projects = [
  {
    title: "AWS → OCI Data Lake Migration",
    summary: "Cross‑cloud move for a multinational FMCG: staged cutover, tiered storage, ADW federation. Enterprise Power BI with gateway/RLS and API automations for refresh & ops. ~30% lower cost, 99.9% pipeline uptime.",
    tags: ["OCI", "AWS", "ADW", "Object Storage", "Data Lake", "Power BI", "APIs"],
    links: [{ href: "https://github.com/kpratik64", label: "Case Notes" }],
    icon: 'fas fa-cloud'
  },
  {
    title: "ITVCMS Platform",
    summary: "Training ops platform with auth, mentor mapping, and integrations for Udemy and YouTube metadata.",
    tags: ["Django", "React", "Postgres", "OAuth2"],
    links: [{ href: "https://github.com/kpratik64", label: "Repo" }],
    icon: 'fas fa-laptop-code'
  },
  {
    title: "Oracle Analytics Server on OCI for Logistics",
    summary: "Upgrade journey: OBIEE 10g → OAS on OCI with hardened networking, automated deploys, RCU setup, and catalog migration for a PAN‑India logistics firm.",
    tags: ["OAS", "OBIEE", "RCU", "Linux", "OCI", "Logistics"],
    links: [{ href: "https://github.com/kpratik64", label: "Runbook" }],
    icon: 'fas fa-chart-line'
  },
  {
    title: "RAG Chatbot on OCI",
    summary: "Multi‑lingual retrieval with vector search, prompt safety, and observability hooks; applied only where it adds value.",
    tags: ["RAG", "Vector DB", "LLM", "OCI"],
    links: [{ href: "https://github.com/kpratik64", label: "Architecture" }],
    icon: 'fas fa-robot'
  },
  {
    title: "Google Workspace Automations",
    summary: "End‑to‑end lead pipeline: Forms → Sheets segmentation by stage, lead routing, calendar sync, and notifications with Apps Script — lightweight in‑house CRM.",
    tags: ["Apps Script", "Sheets", "Gmail", "Calendar", "CRM"],
    links: [{ href: "https://github.com/kpratik64", label: "Samples" }],
    icon: 'fas fa-gears'
  },
  {
    title: "Odoo Partnership Implementations",
    summary: "Partnered to implement Odoo for multiple customers. Converted business workflows into technical processes, data pipelines, and reporting.",
    tags: ["Odoo", "ETL", "Analytics", "Workflows"],
    links: [{ href: "https://github.com/kpratik64", label: "Toolkit" }],
    icon: 'fas fa-toolbox'
  },
  {
    title: "OCI Data Lake for Pharma",
    summary: "Data warehouse to monitor drug development lifecycle with FDA compliance. ODI for ETL, Tableau for realtime monitoring, Python automations, Tableau APIs for metadata & logging.",
    tags: ["OCI", "ODI", "Tableau", "Python", "Pharma"],
    links: [{ href: "https://github.com/kpratik64", label: "Architecture" }],
    icon: 'fas fa-prescription-bottle'
  },
  {
    title: "dbt Enablement — BFSI (3‑week)",
    summary: "Hands‑on enablement for a large BFSI on dbt best practices: Git workflows, tests, lineage, environments, and CI.",
    tags: ["dbt", "BFSI", "Enablement"],
    links: [{ href: "https://github.com/kpratik64", label: "Curriculum" }],
    icon: 'fas fa-chalkboard-teacher'
  },
  {
    title: "Redshift ELT with dbt — Modernization (BFSI)",
    summary: "Leaping from S3 → EMR → Redshift ETL to dbt + Redshift ELT: zero EMR overhead, faster delivery, lower costs, governance built‑in, and future‑ready platform.",
    tags: ["AWS", "Redshift", "dbt", "ELT", "BFSI"],
    links: [{ href: "https://github.com/kpratik64", label: "Solution Notes" }],
    icon: 'fas fa-rocket',
    hidden: true
  }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const projectSearch = document.getElementById('projectSearch');
const tagFilter = document.getElementById('tagFilter');
const resetFilters = document.getElementById('resetFilters');
const projectsGrid = document.getElementById('projectsGrid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const techFilterToggle = document.getElementById('techFilterToggle');
const techFilterMenu = document.getElementById('techFilterMenu');
const techFilterLabel = document.getElementById('techFilterLabel');

// Active technology filter state (for custom menu)
let activeTech = '';

// Config Loader
async function loadSiteConfig() {
  try {
    // Cache-bust to ensure GitHub Pages/CDN serves the latest config
    const response = await fetch(`config.json?v=${Date.now()}`, { cache: 'no-store' });
    const cfg = await response.json();
    applyConfig(cfg);
  } catch (err) {
    console.error('Failed to load config.json', err);
  }
}

function applyConfig(cfg) {
  if (!cfg) return;

  // Document title (optional short tab title)
  if (cfg.hero && cfg.hero.tabTitle) {
    document.title = cfg.hero.tabTitle;
  }

  // Hero title (two lines)
  if (cfg.hero && cfg.hero.line1 && cfg.hero.line2) {
    const heroTitleEl = document.querySelector('.hero-title');
    if (heroTitleEl) {
      heroTitleEl.innerHTML = `${cfg.hero.line1}<br/><span class="highlight">${cfg.hero.line2}</span>`;
    }
  }

  // Hero description
  if (cfg.personal && cfg.personal.description) {
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = cfg.personal.description;
  }

  // Profile card
  if (cfg.personal) {
    const nameEl = document.querySelector('.profile-info h3');
    if (nameEl && cfg.personal.name) nameEl.textContent = cfg.personal.name;

    const subtitleEl = document.querySelector('.profile-info p:not(.location)');
    if (subtitleEl && cfg.personal.title) subtitleEl.textContent = cfg.personal.title;

    const locEl = document.querySelector('.profile-info .location');
    if (locEl && cfg.personal.location) {
      // Keep icon and only update text
      const icon = locEl.querySelector('i');
      locEl.textContent = ` ${cfg.personal.location}`;
      if (icon) locEl.prepend(icon);
    }

    const avatarImg = document.querySelector('.profile-avatar .profile-image');
    if (avatarImg && cfg.personal.profileImage) {
      avatarImg.src = cfg.personal.profileImage;
      avatarImg.alt = cfg.personal.name || 'Profile';
    }
  }

  // About section
  if (cfg.about) {
    const aboutParas = document.querySelectorAll('#about .about-content p');
    if (aboutParas.length >= 1 && cfg.about.story) {
      aboutParas[0].textContent = cfg.about.story;
    }
    if (aboutParas.length >= 2 && cfg.about.approach) {
      aboutParas[1].textContent = cfg.about.approach;
    }
    const introEl = document.querySelector('#about .section-intro');
    if (introEl && cfg.about.intro) introEl.textContent = cfg.about.intro;
  }
}

// Theme Management
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  
  document.documentElement.classList.toggle('dark', isDark);
  updateThemeIcon(isDark);
  updateFavicon(isDark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
  updateFavicon(isDark);
}

function updateThemeIcon(isDark) {
  const icon = themeToggle.querySelector('i');
  icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function updateFavicon(isDark) {
  const mode = isDark ? 'dark' : 'light';
  const faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="apple-touch-icon-precomposed"]');
  const manifestLinks = document.querySelectorAll('link[rel="manifest"]');
  const msApplicationMeta = document.querySelectorAll('meta[name="msapplication-TileColor"], meta[name="msapplication-TileImage"], meta[name="msapplication-config"]');
  
  // Update favicon links
  faviconLinks.forEach(link => {
    if (link.href.includes('favicon_io')) {
      const currentMode = link.href.includes('dark mode') ? 'dark' : 'light';
      if (currentMode !== mode) {
        link.href = link.href.replace(
          currentMode === 'dark' ? 'dark mode' : 'light mode',
          mode === 'dark' ? 'dark mode' : 'light mode'
        );
      }
    }
  });
  
  // Update manifest links
  manifestLinks.forEach(link => {
    if (link.href.includes('favicon_io')) {
      const currentMode = link.href.includes('dark mode') ? 'dark' : 'light';
      if (currentMode !== mode) {
        link.href = link.href.replace(
          currentMode === 'dark' ? 'dark mode' : 'light mode',
          mode === 'dark' ? 'dark mode' : 'light mode'
        );
      }
    }
  });
  
  // Update Microsoft application meta tags
  msApplicationMeta.forEach(meta => {
    if (meta.content && meta.content.includes('favicon_io')) {
      const currentMode = meta.content.includes('dark mode') ? 'dark' : 'light';
      if (currentMode !== mode) {
        meta.content = meta.content.replace(
          currentMode === 'dark' ? 'dark mode' : 'light mode',
          mode === 'dark' ? 'dark mode' : 'light mode'
        );
      }
    }
    if (meta.name === 'msapplication-TileColor') {
      meta.content = isDark ? '#1a1a1a' : '#ffffff';
    }
  });
}

// Project Filtering
function renderProjects(filteredProjects = projects) {
  projectsGrid.innerHTML = filteredProjects.map(project => `
    <div class="project-card">
      <div class="project-header">
        <div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
        </div>
        <div class="project-icon">${project.icon ? `<i class="${project.icon}"></i>` : '<i class="fas fa-folder"></i>'}</div>
      </div>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.links.map(link => `
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="project-link">
            ${link.label} <i class="fas fa-external-link-alt"></i>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function filterProjects() {
  const query = (projectSearch?.value || '').toLowerCase();
  const selectedTagRaw = tagFilter ? tagFilter.value : activeTech;
  const selectedTag = (selectedTagRaw || '').toLowerCase();
  
  const filtered = projects.filter(project => {
    // Skip hidden projects
    if (project.hidden) return false;
    
    const matchesQuery = !query || 
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query));
    
    const matchesTag = !selectedTag || project.tags.some(t => t.toLowerCase() === selectedTag);
    
    return matchesQuery && matchesTag;
  });
  
  renderProjects(filtered);
  
  // Show/hide reset button
  if (resetFilters) {
    resetFilters.style.display = (query || selectedTag) ? 'inline-flex' : 'none';
  }
}

function resetProjectFilters() {
  if (projectSearch) projectSearch.value = '';
  if (tagFilter) tagFilter.value = '';
  activeTech = '';
  if (techFilterLabel) techFilterLabel.textContent = 'All technologies';
  filterProjects();
}

// Mobile Navigation
function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for Animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.project-card, .skill-card, .contact-card, .timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Render initial projects
  renderProjects();
  // Sync reset button visibility on first load
  filterProjects();

  // Load site configuration and apply dynamic content
  loadSiteConfig();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Initialize animations
  initAnimations();
  
  // Event listeners
  themeToggle.addEventListener('click', toggleTheme);
  projectSearch.addEventListener('input', filterProjects);
  // Built-in select (kept for fallback if present)
  if (tagFilter) tagFilter.addEventListener('change', filterProjects);
  // Custom tech filter menu
  if (techFilterToggle && techFilterMenu) {
    techFilterToggle.addEventListener('click', () => {
      techFilterMenu.hidden = !techFilterMenu.hidden;
    });
    techFilterMenu.addEventListener('click', (e) => {
      const btn = e.target.closest('.tech-item');
      if (!btn) return;
      const value = btn.getAttribute('data-value') || '';
      // Update label
      techFilterLabel.textContent = value || 'All technologies';
      // Set state and reuse shared filter function
      activeTech = value;
      filterProjects();
      techFilterMenu.hidden = true;
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!techFilterToggle.contains(e.target) && !techFilterMenu.contains(e.target)) {
        techFilterMenu.hidden = true;
      }
    });
  }
  resetFilters.addEventListener('click', resetProjectFilters);
  hamburger.addEventListener('click', toggleMobileMenu);
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Add mobile menu styles dynamically
const mobileMenuStyles = `
  @media (max-width: 767px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 4rem;
      flex-direction: column;
      background-color: rgb(var(--background) / 0.95);
      backdrop-filter: blur(10px);
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      padding: 2rem 0;
      border-bottom: 1px solid rgb(var(--border) / 0.6);
    }
    
    .nav-menu.active {
      left: 0;
    }
    
    .nav-menu .nav-link {
      padding: 1rem 0;
      font-size: 1.1rem;
    }
    
    .hamburger.active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);
