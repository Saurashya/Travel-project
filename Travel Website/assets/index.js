const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video");
const contents = document.querySelectorAll(".main-content");
let currentSlideIndex = 0; 
let autoplayIntervalId; 

var sliderNav = function (manual) {
  btns.forEach((btn, i) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  contents.forEach((content, i) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");

  currentSlideIndex = manual; // Update the current slide index after navigation
  resetAutoplayInterval(); // Reset the autoplay interval after manual slide change
};

const totalSlides = slides.length;
const autoplayInterval = 8000; // Set the time interval for autoplay (in milliseconds)

const autoplaySlides = () => {
  // Calculate the next slide index
  const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
  sliderNav(nextSlideIndex);
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

const resetAutoplayInterval = () => {
  clearInterval(autoplayIntervalId);
  autoplayIntervalId = setInterval(autoplaySlides, autoplayInterval);
};
autoplayIntervalId = setInterval(autoplaySlides, autoplayInterval);
