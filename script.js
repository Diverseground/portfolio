const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const nav = document.getElementById("primary-navigation");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const imageArray = [image1, image2, image3, image4, image5, image6];
const textBox = document.getElementById("text-box");
const title = document.getElementById("title");
const toggleText = document.getElementById("toggle-text");
const home = document.getElementById("home");
const aboutBox = document.querySelector(".about-box");

const imageMode = (mode) => {
  home.style.background = `url("./public/cloud-${mode}.svg"), url("./public/cloud-background.svg"), var(--linear-background-alt)`;
  home.style.transition = "all 0.7s ease-in-out";
  home.style.backgroundSize = "cover";
  home.style.backgroundPosition = "center";
  home.style.backgroundAttachment = "fixed";

  aboutBox.style.background = `url("./public/cloud-${mode}.svg"), url('./public/cloud-background.svg'), var(--linear-background-alt)`;
  aboutBox.style.transition = "all 0.7s ease-in-out";
  aboutBox.style.backgroundSize = "cover";
  aboutBox.style.backgroundPosition = "center";
  aboutBox.style.backgroundAttachment = "fixed";
};

const darkLightModeToggle = (isDark) => {
  nav.style.backgroundColor = isDark
    ? "rgb(24 32 57 / 50%)"
    : "rgb(235 235 235 / 50%)";
  if (width < 768) {
    nav.style.backgroundImage = isDark
      ? `linear-gradient(89deg,  rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgb(24 32 57 / 50%), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))`
      : `linear-gradient(89deg, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.016), rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.2), rgba(155, 155, 155, 0.2))`;
  } else if (width >= 768) {
    nav.style.backgroundImage = isDark
      ? `linear-gradient(175deg,  rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgb(24 32 57 / 50%), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))`
      : `linear-gradient(181deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.016), rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.2), rgba(155, 155, 155, 0.1))`;
  }
  nav.style.transition = "all 250ms ease-out";
  toggleText.textContent = isDark ? "Night Mode" : "Light Mode";
  toggleIcon.children[0].classList.replace(
    isDark ? "fa-sun" : "fa-moon",
    isDark ? "fa-moon" : "fa-sun"
  );
  imageArray.map((image) => {
    image.style.filter = isDark ? "brightness(85%)" : "brightness(100%)";
    return image;
  });
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 70%)"
    : "hsla(264, 29%, 10%, 0.9)";
  textBox.style.transition = "all 0.4s ease-in-out";
  imageMode(isDark ? "dark" : "light");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkLightModeToggle(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    darkLightModeToggle(false);
  }
};

toggleSwitch.addEventListener("change", switchTheme, true);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkLightModeToggle(true);
  } else if (currentTheme === "light") {
    toggleSwitch.checked = false;
    darkLightModeToggle(false);
  }
}
