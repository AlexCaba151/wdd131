document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let isValid = true;
    const requiredFields = this.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
            
            // Remove existing error message if any
            const existingError = field.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Add error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'This field is required';
            field.parentElement.appendChild(errorMessage);
        } else {
            field.classList.remove('error');
            const existingError = field.parentElement.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
        }
    });

    if (!isValid) {
        return;
    }

    // If form is valid, show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Reset form
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

// Remove error styling on input
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('input', function() {
        this.classList.remove('error');
        const errorMessage = this.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
});


  // Copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Last modified date
  document.getElementById('lastModified').textContent = document.lastModified;
  
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