// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show');
    this.textContent = this.textContent === '☰' ? '✕' : '☰';
});

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Last modified date
document.getElementById('lastModified').textContent = document.lastModified;

