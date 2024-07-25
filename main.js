const tradeShows = document.querySelector(".trade");
const body = document.body;
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
console.log(nav)

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



const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("li");

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
}, 2000);