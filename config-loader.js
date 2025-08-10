// Configuration Loader for Portfolio Website
class PortfolioConfig {
    constructor() {
        this.config = null;
        this.init();
    }

    async init() {
        try {
            // Load configuration
            const response = await fetch('./config.json');
            this.config = await response.json();
            
            // Apply configuration to website
            this.applyConfig();
        } catch (error) {
            console.error('Error loading configuration:', error);
        }
    }

    applyConfig() {
        if (!this.config) return;

        // Update personal information
        this.updatePersonalInfo();
        
        // Update about section
        this.updateAboutSection();
        
        // Update services
        this.updateServices();
        
        // Update portfolio
        this.updatePortfolio();
        
        // Update social links
        this.updateSocialLinks();
        
        // Update contact section
        this.updateContactSection();
        
        // Update footer
        this.updateFooter();
    }

    updatePersonalInfo() {
        const { personal } = this.config;
        
        // Update name throughout the site
        document.querySelectorAll('.hero-title .highlight, .footer-name').forEach(el => {
            el.textContent = personal.name;
        });
        
        // Update title
        const titleEl = document.querySelector('.hero-subtitle');
        if (titleEl) titleEl.textContent = personal.title;
        
        // Update description
        const descEl = document.querySelector('.hero-description');
        if (descEl) descEl.textContent = personal.description;
        
        // Update contact info
        const emailEl = document.querySelector('.contact-email');
        if (emailEl) {
            emailEl.textContent = personal.email;
            emailEl.href = `mailto:${personal.email}`;
        }
        
        const phoneEl = document.querySelector('.contact-phone');
        if (phoneEl) {
            phoneEl.textContent = personal.phone;
            phoneEl.href = `tel:${personal.phone}`;
        }
        
        const locationEl = document.querySelector('.contact-location');
        if (locationEl) locationEl.textContent = personal.location;
        
        // Update profile image if exists
        if (personal.profileImage && personal.profileImage !== 'images/profile.jpg') {
            const profileEl = document.querySelector('.hero-placeholder');
            if (profileEl) {
                profileEl.innerHTML = `<img src="${personal.profileImage}" alt="${personal.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            }
        }
    }

    updateAboutSection() {
        const { about } = this.config;
        
        // Update story
        const storyEl = document.querySelector('.about-description');
        if (storyEl) storyEl.textContent = about.story;
        
        // Update approach
        const approachEl = document.querySelector('.about-approach');
        if (approachEl) approachEl.textContent = about.approach;
        
        // Update skills
        const skillsContainer = document.querySelector('.skills-list');
        if (skillsContainer && about.skills) {
            skillsContainer.innerHTML = about.skills.map(skill => 
                `<li>${skill}</li>`
            ).join('');
        }
        
        // Update stats
        const statsEls = document.querySelectorAll('.stat-number');
        if (statsEls.length >= 3) {
            statsEls[0].textContent = about.stats.projects + '+';
            statsEls[1].textContent = about.stats.experience + '+';
            statsEls[2].textContent = about.stats.satisfaction + '%';
        }
    }

    updateServices() {
        const { services } = this.config;
        const servicesContainer = document.querySelector('.services-grid');
        
        if (servicesContainer && services) {
            servicesContainer.innerHTML = services.map(service => `
                <div class="service-card">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `).join('');
        }
    }

    updatePortfolio() {
        const { portfolio } = this.config;
        const portfolioContainer = document.querySelector('.portfolio-grid');
        
        if (portfolioContainer && portfolio) {
            portfolioContainer.innerHTML = portfolio.map(project => `
                <div class="portfolio-item">
                    <div class="portfolio-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="portfolio-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="portfolio-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <a href="${project.link}" class="portfolio-link">View Project</a>
                    </div>
                </div>
            `).join('');
        }
    }

    updateSocialLinks() {
        const { social } = this.config;
        
        // Update social links in footer
        Object.keys(social).forEach(platform => {
            const linkEl = document.querySelector(`.social-${platform}`);
            if (linkEl && social[platform] !== `https://${platform}.com/yourusername`) {
                linkEl.href = social[platform];
            }
        });
    }

    updateContactSection() {
        const { contact } = this.config;
        
        const messageEl = document.querySelector('.contact-message');
        if (messageEl) messageEl.textContent = contact.message;
        
        const formEl = document.querySelector('.contact-form');
        if (formEl && contact.formAction !== '#') {
            formEl.action = contact.formAction;
        }
    }

    updateFooter() {
        const { footer } = this.config;
        
        const taglineEl = document.querySelector('.footer-tagline');
        if (taglineEl) taglineEl.textContent = footer.tagline;
    }
}

// Initialize configuration when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioConfig();
});
