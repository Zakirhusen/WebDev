console.log("This is Arrow slider");
let slides = document.querySelectorAll(".slider");
let totalSlides = slides.length;
// console.log(slides);
let prevSlide = document.querySelector(".leftSlide");
let nextSlide = document.querySelector(".rightSlide");
// console.log(nextSlide);
nextSlide.addEventListener("click", () => {
  next("next");
});
prevSlide.addEventListener("click", () => {
  next("prev");
});

let index = 0;
function next(direction) {
  if (direction == "next") {
    //   console.log(index);
      index++;
    if (index == totalSlides) {
      console.log(index);
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides;
    }
    index--;
  }
  slides.forEach((element) => {
    //   console.log(element);
    element.classList.remove("active");
  });
  slides[index].classList.add("active");
}
