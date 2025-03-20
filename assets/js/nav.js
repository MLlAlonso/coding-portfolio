window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav_links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav_active");
    });
});