window.addEventListener('load', function () {
    var loaderOverlay = document.getElementById('loader-overlay');
    loaderOverlay.style.display = 'none';
  });

// Get the Swiper instance
const swiper = document.querySelector('.mySwiper').swiper;

// Get the Next button
const nextButton = document.querySelector('.next');

// Add an event listener to the Next button
nextButton.addEventListener('click', (event) => {
  // Prevent the default behavior of the <a> tag
  event.preventDefault();

  // Check if the last slide is active
  if (swiper.isEnd) {
    // Redirect to login.php
    window.location.href = 'loginn.php';
  } else {
    // Navigate to the next slide
    swiper.slideNext();
  }
});