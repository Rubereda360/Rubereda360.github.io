document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase_first');
ScrollReveal().reveal('.showcase_second', { delay: 100 });
ScrollReveal().reveal('.news-cards', { delay: 300 });