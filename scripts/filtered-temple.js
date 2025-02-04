// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('show');
  this.textContent = this.textContent === '☰' ? '✕' : '☰';
});

// Copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Lista de templos con 12 entradas
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Santo Domingo Temple",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1443.jpg"
  },
  {
    templeName: "Seoul Korea Temple",
    location: "Seoul, South Korea",
    dedicated: "1985, September, 14",
    area: 28057,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  },
  // Nuevos templos añadidos
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59645,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-2034-main.jpg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 37600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2088-main.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-17149-main.jpg"
  }
];

// Función para generar los templos dinámicamente
function createTempleCard(filteredTemples) {
  const container = document.querySelector(".temple-grid");
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);
      container.appendChild(card);
  });
}

createTempleCard(temples);


document.getElementById('home').addEventListener('click', () => createTempleCard(temples));
document.getElementById('old').addEventListener('click', () => createTempleCard(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.getElementById('new').addEventListener('click', () => createTempleCard(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.getElementById('large').addEventListener('click', () => createTempleCard(temples.filter(t => t.area > 90000)));
document.getElementById('small').addEventListener('click', () => createTempleCard(temples.filter(t => t.area < 10000)));
