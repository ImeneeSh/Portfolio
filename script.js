/* FOND ANIME */

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

const numStars = 60;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.opacity = Math.random();
  star.style.width = 1 + Math.random() * 2 + "px";
  star.style.height = star.style.width;
  document.body.appendChild(star);
}

/* BURGER MENU */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {

  nav.classList.toggle("active");

  burger.classList.toggle("open");

});


/* DARK LIGHT MODE */

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {

    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");

  } else {

    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");

  }

});


/* GESTION DU CHANGEMENT DE LANGUAGE */

const langBtn = document.querySelector(".lang-toggle");

let currentLang = "fr";

langBtn.addEventListener("click", () => {

  const elements = document.querySelectorAll("[data-fr]");

  if (currentLang === "fr") {

    elements.forEach(el => {

      el.textContent = el.dataset.en;

    });

    currentLang = "en";

  } else {

    elements.forEach(el => {

      el.textContent = el.dataset.fr;

    });

    currentLang = "fr";

  }

});