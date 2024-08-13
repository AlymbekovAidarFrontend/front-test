let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-currentSlideIndex * slideWidth}px)`;
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});
