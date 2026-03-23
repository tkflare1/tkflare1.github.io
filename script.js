function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger-menu");
    if (menu && hamburger && !hamburger.contains(e.target) && menu.classList.contains("open")) {
        menu.classList.remove("open");
        document.querySelector(".hamburger-icon").classList.remove("open");
    }
});

function getHashTarget(href) {
    if (!href || href === "#") return null;
    const i = href.indexOf("#");
    if (i === -1) return null;
    const id = href.slice(i + 1);
    if (!id) return null;
    return document.getElementById(id);
}

document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.startsWith("http") || href.startsWith("mailto:")) return;
        const target = getHashTarget(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(
        ".work-item, .about__grid, .page-header, .skill-sheet, .contact-block .layout-wrap"
    );
    animateElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity 0.55s ease ${index * 0.04}s, transform 0.55s ease ${index * 0.04}s`;
        observer.observe(el);
    });
});

const animStyle = document.createElement("style");
animStyle.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animStyle);

const navBars = document.querySelectorAll("body > nav");
window.addEventListener("scroll", () => {
    const y = window.scrollY;
    navBars.forEach((navEl) => {
        if (y > 80) {
            navEl.style.background = "rgba(6, 6, 5, 0.94)";
            navEl.style.boxShadow = "0 1px 0 rgba(255,255,255,0.06)";
        } else {
            navEl.style.background = "rgba(6, 6, 5, 0.82)";
            navEl.style.boxShadow = "none";
        }
    });
});

document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor-glow");
    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
cursorGlow.style.cssText = `
    position: fixed;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(212, 255, 77, 0.04) 0%, transparent 68%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: -1;
`;
document.body.appendChild(cursorGlow);

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 120) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        link.classList.remove("active");
        if (href === `#${current}`) link.classList.add("active");
    });
});

const activeStyle = document.createElement("style");
activeStyle.textContent = `
    .nav-links a.active { color: #eeebe6 !important; }
    .nav-links a.active::after { width: 100%; }
`;
document.head.appendChild(activeStyle);

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
    });
    btn.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

console.log("%cTKV portfolio", "font-weight:bold;color:#d4ff4d;font-size:14px");
