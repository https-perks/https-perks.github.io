// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveSlide(dir) {
      currentIndex = (currentIndex + dir + totalSlides) % totalSlides;
      updateSlide();
    }

    // Auto slide
    setInterval(() => moveSlide(1), 5000);

    // Manual controls
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
  });
