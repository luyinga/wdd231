// Navigation Logic
const hamButton = document.querySelector("#menu");
const navItems = document.querySelector("nav ul");
//const title = document.querySelector("h1");
const navContainer = document.querySelector(".nav-container");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('show');
    navItems.classList.toggle('show');
    //title.classList.toggle('show');
    navContainer.classList.toggle('show');
});

// Remove the .show when screen larger than mobile width
window.addEventListener('resize', () => {
    if (window.innerWidth >= 765) {
        hamButton.classList.remove('show');
        navItems.classList.remove('show');
        //title.classList.remove('show');
        navContainer.classList.remove('show');
    }
});

