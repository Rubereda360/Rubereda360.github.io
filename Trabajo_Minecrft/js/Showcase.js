document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards-banner-one', { delay: 100 });
ScrollReveal().reveal('.cards-banner-two', { delay: 300 });
ScrollReveal().reveal('.cards-banner-tree', { delay: 500 });
ScrollReveal().reveal('.cards-banner-four', { delay: 700 });