/* REVENIR EN HAUT AU RELOAD */

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

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
  document.body.classList.toggle("menu-open");

});

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");
    burger.classList.remove("open");
    document.body.classList.remove("menu-open");

  });

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

/* ANIMATION SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach(el => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* HEADER EFFET BLUR EN SCROLLANT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

/* SECTION ACTIVE DANS LE NAVBAR */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});

/* ACTIVER ACCUEIL PAR DEFAUT */

window.addEventListener("load", () => {

  navLinks.forEach(link => link.classList.remove("active"));

  const homeLink = document.querySelector('.nav-links a[href="#home"]');

  if (homeLink) {
    homeLink.classList.add("active");
  }

});

// FILTER PROJECTS / CERTIFICATIONS
const filterBtns = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.dataset.filter;

        filterItems.forEach(item => {
            if (item.classList.contains(filterValue)) {
                item.classList.add("active");
                item.style.display = "grid"; 
            } else {
                item.classList.remove("active");
                item.style.display = "none"; 
            }
        });
    });
});
document.querySelector('.filter-btn.active').click();