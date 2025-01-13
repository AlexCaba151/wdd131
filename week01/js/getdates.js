// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Update the span with id 'currentyear' with the current year
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the paragraph with id 'lastModified' with the last modified date
document.getElementById("lastModified").textContent = ` Last Modified: ${lastModifiedDate}`;

