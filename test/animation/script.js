let slideIndex = 1;

showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.add("inactive");
  }
  slides[slideIndex-1].classList.remove("inactive");
  slides[slideIndex-1].classList.add("active");
}
