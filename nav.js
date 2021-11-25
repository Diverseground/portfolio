const primaryNavigation = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector("body");
const box = document.querySelector(".box");

box.addEventListener("click", () => {
  const visibility = primaryNavigation.getAttribute("data-visible");
  if (visibility === "false") {
    box.classList.toggle("x");
    primaryNavigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    primaryNavigation.style.boxShadow = `rgb(240 240 240 / 12%) -0.04rem 0rem 0rem 0rem, rgb(0 0 0 / 13%) -1rem 1rem 3rem 1rem, 0px 2px 7px rgba(0,0,0,0.25)`;
    body.classList.add("no-scroll");
  } else if (visibility === "true") {
    box.classList.toggle("x");
    primaryNavigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
    primaryNavigation.style.boxShadow = "none";
  } else {
    console.log("Something went wrong with the nav toggle.");
  }
});
