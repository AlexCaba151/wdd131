const products = [
    { id: 1, name: "apple iphone 14" },
    { id: 2, name: "samsung galaxy s23" },
    { id: 3, name: "google pixel 7" },
    { id: 4, name: "apple Iphone 15"},
  ]
  
  document.addEventListener("DOMContentLoaded", () => {
    // Populate product select options
    const productSelect = document.getElementById("product")
  
    products.forEach((product) => {
      const option = document.createElement("option")
      option.value = product.id
      option.textContent = product.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      productSelect.appendChild(option)
    })
  })
  

    // Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Last modified date
document.getElementById('lastModified').textContent = document.lastModified;

  