// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact Form Submission
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
  