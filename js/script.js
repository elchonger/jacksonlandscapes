document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.image-gallery img');
  const dots = document.querySelectorAll('.dot');
  const gallery = document.querySelector('.image-gallery');

  function updateActiveDot() {
      const scrollLeft = gallery.scrollLeft;
      const index = Math.round(scrollLeft / window.innerWidth); // Determine visible image index
      if (index !== currentIndex) {
          currentIndex = index;
          dots.forEach(dot => dot.classList.remove('activeDot'));
          dots[currentIndex].classList.add('activeDot');
      }
  }

  function showSlide(index) {
      if (index >= images.length) index = 0;
      if (index < 0) index = images.length - 1;

      currentIndex = index;

      gallery.scrollTo({
          left: currentIndex * window.innerWidth,
          behavior: 'smooth'
      });
  }

  function currentSlide(index) {
      showSlide(index);
  }

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => currentSlide(index));
  });

  gallery.addEventListener("scroll", updateActiveDot); // Detect scroll & update dots
});

// Fullscreen functionality
function openFullscreen(image) {
  const modal = document.getElementById('fullscreen-modal');
  const fullscreenImg = document.getElementById('fullscreen-img');
  
  fullscreenImg.src = image.src;
  modal.style.display = 'flex';
}

function closeFullscreen() {
  const modal = document.getElementById('fullscreen-modal');
  modal.style.display = 'none';
}

// Initialize gallery
showSlide(currentIndex);
