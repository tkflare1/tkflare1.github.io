// ============================
// PORTFOLIO INTERACTIONS
// Dark Elite Theme
// ============================

// Toggle hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger-menu");
    
    if (menu && hamburger && !hamburger.contains(e.target) && menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.querySelector(".hamburger-icon").classList.remove('open');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes
    const animateElements = document.querySelectorAll(
        '.details-container, .color-container, article, .text-container, .contact-info-upper-container'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});

// Add animate-in class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navbar background on scroll
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class for navbar styling
    if (currentScrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
        nav.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
});

// Parallax effect for profile section
const profileSection = document.getElementById('profile');
const profilePic = document.querySelector('.profile-pic');

window.addEventListener('scroll', () => {
    if (profileSection && profilePic) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        
        if (scrolled < window.innerHeight) {
            profilePic.style.transform = `translateY(${rate * 0.1}px)`;
        }
    }
});

// Typing effect for title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Add cursor glow effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Create cursor glow element
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 212, 170, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(cursorGlow);

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links a.active {
        color: #00d4aa !important;
    }
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// Smooth button interactions
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console easter egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #00d4aa;');
console.log('%cThanks for checking out my portfolio. Feel free to reach out!', 'font-size: 14px; color: #a0a0a0;');
console.log('%c- Tawedzerwa Keith Vhurumuku', 'font-size: 12px; color: #666;');
