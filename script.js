//Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect when page loads
    window.addEventListener('load', typeWriter);
}
// Generate Project Cards
const projects = [
    {
        title: "API Weather Website",
        image: "./assets/images/api-weather-website.jpg",
        description: `A responsive weather dashboard built with HTML, CSS, and JavaScript. It fetches real-time data from WeatherAPI.com for a preset list of cities and allows users to mark favorites for quick access. Features include temperature, conditions, humidity, and wind speed, all displayed in a clean, mobile-friendly layout.`,
        liveLink: "https://kimdevpro.github.io/api-weather-website",
        codeLink: "https://github.com/kimdevpro/api-weather-website",
        techTags: ['HTML', 'CSS', 'JavaScript', 'API']
    },
    {
        title: "SaaS Landing Page",
        image: "./assets/images/saas-landing-page.jpg",
        description: "A visually engaging landing page built with pure HTML and CSS, designed to promote a software-as-a-service product. It features a responsive layout, smooth scrolling navigation, feature sections, pricing cards, and a contact form. This project demonstrates a strong understanding of layout design, typography, and responsive styling without relying on JavaScript.",
        codeLink: "https://github.com/kimdevpro/saas-landing-page",
        techTags: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: "HTML Images Gallery",
        image: "./assets/images/html-image-gallery.jpg",
        description: "A responsive image gallery crafted using HTML and CSS, showcasing an elegant grid layout for displaying photographs or visual content. This project demonstrates the use of CSS Grid and Flexbox for layout structure, along with hover effects to enhance interactivity. It is fully responsive, ensuring a seamless experience across various screen sizes and devices.",
        liveLink: "https://kimdevpro.github.io/html-images-gallery",
        codeLink: "https://github.com/kimdevpro/html-images-gallery",
        techTags: ['HTML', 'CSS', 'Responsive']
    },
    {
        title: "Ransom Note Generator",
        image: "./assets/images/ransom-note-generator.jpg",
        description: "A playful JavaScript project that transforms user-entered text into a ransom note-style layout with randomized fonts, sizes, and colors. This application highlights DOM manipulation, event handling, and dynamic styling. It allows users to input custom text and instantly see a visually chaotic, stylized output rendered in real-time.",
        liveLink: "https://kimdevpro.github.io/ransom-note-generator",
        codeLink: "https://github.com/kimdevpro/ransom-note-generator",
        techTags: ['HTML', 'CSS', 'JavaScript']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" />
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" class="btn btn-small btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.codeLink}" class="btn btn-small btn-secondary" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
                <div class="tech-stack">
                    ${project.techTags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);

        // Set up animation initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

//Fade in animation for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
