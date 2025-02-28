document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.gallery-container').forEach(galleryContainer => {
      let gallery = galleryContainer.querySelector('.image-gallery');
      let images = gallery.querySelectorAll('img');
      let dots = galleryContainer.querySelectorAll('.dot');
      let currentIndex = 0;

      function updateActiveDot() {
          let scrollLeft = gallery.scrollLeft;
          let imageWidth = gallery.scrollWidth / images.length; // Dynamic width based on number of images
          let index = Math.round(scrollLeft / imageWidth); // Determine visible image index

          if (index !== currentIndex) {
              currentIndex = index;
              dots.forEach(dot => dot.classList.remove('activeDot'));
              if (dots[currentIndex]) {
                  dots[currentIndex].classList.add('activeDot');
              }
          }
      }

      function showSlide(index) {
          if (index >= images.length) index = 0;
          if (index < 0) index = images.length - 1;

          currentIndex = index;

          gallery.scrollTo({
              left: currentIndex * gallery.clientWidth, // Use gallery width, not window width
              behavior: 'smooth'
          });
      }

      function currentSlide(index) {
          showSlide(index);
      }

      dots.forEach((dot, index) => {
          dot.addEventListener("click", () => currentSlide(index));
      });

      gallery.addEventListener("scroll", updateActiveDot);

      // Initialize the first dot as active
      if (dots.length > 0) dots[0].classList.add('activeDot');
  });
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
