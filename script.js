const navbar = document.getElementById("headerSection");
const arrowUpBtn = document.querySelector(".scrollToTop");

const scrollToTop = () => {
  navbar.scrollIntoView({ behavior: "smooth" });
};

arrowUpBtn.addEventListener("click", scrollToTop);

// Menu for mobile responsive
const menu = document.querySelector(".menu");
const navList = document.querySelector(".navItems");

const showNavItems = () => {
  navList.classList.toggle("active");
};
menu.addEventListener("click", showNavItems);

// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
