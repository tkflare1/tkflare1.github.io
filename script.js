function toggleMenu() {
    document.querySelector(".menu-links").classList.toggle("open");
    document.querySelector(".hamburger-icon").classList.toggle("open");
}

document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger-menu");
    if (menu && hamburger && !hamburger.contains(e.target) && menu.classList.contains("open")) {
        menu.classList.remove("open");
        document.querySelector(".hamburger-icon").classList.remove("open");
    }
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
});

const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section, .featured, .archive-row, .hero__inner").forEach((el) => {
        el.classList.add("fade-in");
        observer.observe(el);
    });
});

const navEls = document.querySelectorAll("body > nav");
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;
    navEls.forEach((n) => {
        n.style.background = scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.85)";
        n.style.boxShadow = scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none";
    });
});

const sections = document.querySelectorAll("main > .section[id], main > .hero[id]");
const links = document.querySelectorAll("#desktop-nav .nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    links.forEach((l) => {
        l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
});
