const slides = document.querySelectorAll(".monitorizare .slide");
let slideIndex = 0;
let intervalId = null;

document.querySelector('.monitorizare').addEventListener('dblclick', initializeSlider);

function initializeSlider() {
    if (intervalId !== null) {
        return;
    }
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 3000);
    console.log(intervalId);
}

function nextSlide() {
    slides[slideIndex].classList.remove("displaySlide");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("displaySlide");
}