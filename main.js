const tradeShows = document.querySelector(".trade");
const body = document.body;
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("li");
const slideCount = slides.length;
const links = document.querySelectorAll("a");
let activeSlide = 0;

tradeShows.addEventListener("mouseover", () => {
  body.classList.add("show-trades");
});
tradeShows.addEventListener("mouseout", () => {
  body.classList.remove("show-trades");
});

ham.addEventListener("click", (event) => {
  body.classList.toggle("active");
  body.classList.toggle("cross");
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.remove("active");
    body.classList.remove("cross")
  });
});

setInterval(() => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
}, 1000);

