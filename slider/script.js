let slider = document.querySelector('.slider');
let sliderSlides = document.querySelector('.main-slides');
let sliderPrev = document.querySelector('.prev');
let sliderNext = document.querySelector('.next');

let currentSlide = 0;
let slideWidth = slider.offsetWidth;

function updateSlider() {
    sliderSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


sliderPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderSlides.children.length) % sliderSlides.children.length;
    updateSlider();
});

sliderNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderSlides.children.length;
    updateSlider();
});


updateSlider();