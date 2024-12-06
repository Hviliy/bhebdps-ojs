document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slider__item'));
    const arrowPrev = document.querySelector('.slider__arrow_prev');
    const arrowNext = document.querySelector('.slider__arrow_next');
    const dots = Array.from(document.querySelectorAll('.slider__dot'));
  
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      slides.forEach(slide => slide.classList.remove('slider__item_active'));
      slides[currentIndex].classList.add('slider__item_active');
  
      if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove('slider__dot_active'));
        dots[currentIndex].classList.add('slider__dot_active');
      }
    }
  
    arrowPrev.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  
    arrowNext.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });

    showSlide(currentIndex);
  });
  