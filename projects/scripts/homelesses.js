import { homelesses } from "../data/project.mjs";

const gridplace = document.querySelector("#discoverGrid");
const modal = document.querySelector("#cardModal");
const modalTitle = document.querySelector("#modalTitle");
const modalImage = document.querySelector("#modalImage");
const modalDescription = document.querySelector("#modalDescrib");
const closeModal = document.querySelector("#closeModal");

homelesses.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("discoverCard");
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>
      ${place.address}
    </address>
    <p class="description">${place.description.substring(0, 100)}...</p>
    <button>Learn More</button>
  `;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    modalTitle.textContent = place.name;
    modalImage.src = place.image;
    modalImage.alt = place.name;
    modalDescription.textContent = place.description;
    modal.showModal(); 
  });

  gridplace.appendChild(card);
});

closeModal.addEventListener("click", () => {
  modal.close();
});


