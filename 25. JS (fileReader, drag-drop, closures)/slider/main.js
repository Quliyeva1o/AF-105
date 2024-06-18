const form = document.querySelector("form");
const fileInp = document.querySelector("#slider-img");
const titleInp = document.querySelector(".title");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentSlide = 0;
nextBtn.addEventListener("click", () => {
  currentSlide++;
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (slides.length == currentSlide) {
    currentSlide = 0;
  }
  updateSlides(slides);
});
prevBtn.addEventListener("click", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (currentSlide == 0) {
    currentSlide = slides.length;
  }
  currentSlide--;
  updateSlides(slides);
});

function updateSlides(slidesArr) {
  slidesArr.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}
