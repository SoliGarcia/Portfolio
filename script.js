const form = document.getElementById('contactForm');
const banner = document.getElementById('thankYouBanner');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from actually submitting
  banner.style.display = 'block'; // show thank-you banner
  form.reset(); // clear form fields
});
