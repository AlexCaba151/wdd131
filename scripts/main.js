
// Lazy loading for images
const lazyLoadImages = () => {
    const images = document.querySelectorAll("img[data-src]")
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.removeAttribute("data-src")
          imageObserver.unobserve(img)
        }
      })
    })
  
    images.forEach((img) => imageObserver.observe(img))
  }
  
  // Newsletter form submission
  const handleNewsletterSubmission = (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    console.log(`Subscribed with email: ${email}`)
    alert("Thank you for subscribing!")
    event.target.reset()
  }
  
  // Initialize the page
  const init = () => {
    const newsletterForm = document.getElementById("newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", handleNewsletterSubmission)
    }
  
    lazyLoadImages()
  }
  
  document.addEventListener("DOMContentLoaded", init);


  // Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Last modified date
document.getElementById('lastModified').textContent = document.lastModified;


  
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentSlide = 0;
  const totalSlides = items.length;

  // Create indicators
  items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
  });

  const indicators = indicatorsContainer.querySelectorAll('.indicator');

  function updateCarousel() {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentSlide);
      });
  }

  function goToSlide(n) {
      currentSlide = (n + totalSlides) % totalSlides;
      updateCarousel();
  }

  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  function prevSlide() {
      goToSlide(currentSlide - 1);
  }

  // Event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Initialize
  updateCarousel();

  // Optional: Auto-play functionality
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('nav') && navMenu.classList.contains('show')) {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('show');
    }
  });

  // Prevent clicks inside the menu from closing it
  navMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});


document.getElementById("goToDestinations").addEventListener("click", function () {
  window.location.href = "destinations.html";
});

