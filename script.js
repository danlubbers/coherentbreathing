import checkForIOS from "./isIOS";

const root = document.documentElement;
const prompt = checkForIOS();
const headerContainer = document.querySelector(".header-container");
const modalContainer = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");
const headerTitle = document.querySelector(".header-title");
const toggleThemeInput = document.querySelector(".toggle-theme-input");
const toggleThemeLabel = document.querySelector(".toggle-theme-label");
const sphereContainer = document.querySelector(".sphere-container");
const sphere = document.querySelector(".sphere");
const caption = document.querySelector(".caption");
const gong = document.querySelector("#gong");
const controlsContainer = document.querySelector(".controls-container");
const resetBtn = document.querySelector(".reset-btn");
const footerContainer = document.querySelector("footer");
const footerLink = document.querySelector(".footer-link");

if (prompt) {
  // Show modal based on IOS and time
  modalContainer.style.display = "flex";
}

// User closes modal
modalBtn.addEventListener(
  "click",
  () => (modalContainer.style.display = "none")
);

const resetAnimationAndAudio = () => {
  sphere.style.animation = "paused"; // resets animation
  caption.style.setProperty("--animation-name", "paused"); // resets pseud-element animation

  gong.pause();
  gong.currentTime = 0; // reset audio to beginning
};

toggleThemeInput.addEventListener("click", () => {
  // Color Theme
  const foregroundColor = "#eee";
  const backgroundColor = "#222";
  const sphereForegroundColor = "#13eb86";
  const sphereBackgroundColor = "#1693e6";
  // Night Color Theme
  const nightmodeForegroundColor = "#ff7c7c";
  const nightmodeBackgroundColor = "#1c0d0d";
  const nightmodeSphereForegroundColor = "#d85349";
  const nightmodeSphereBackgroundColor = "#330801";

  if (toggleThemeInput.checked) {
    toggleThemeInput.checked = true;
    root.style.backgroundColor = nightmodeBackgroundColor;
    headerTitle.style.color = nightmodeForegroundColor;
    toggleThemeLabel.style.backgroundColor = nightmodeForegroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${nightmodeSphereForegroundColor}, ${nightmodeSphereBackgroundColor})`
    );
    caption.style.color = nightmodeForegroundColor;
    resetBtn.style.color = nightmodeForegroundColor;
    footerContainer.style.color = nightmodeForegroundColor;
    footerLink.style.color = nightmodeForegroundColor;
    resetAnimationAndAudio();
  }
  if (!toggleThemeInput.checked) {
    toggleThemeInput.checked = false;
    root.style.backgroundColor = backgroundColor;
    headerTitle.style.color = foregroundColor;
    toggleThemeLabel.style.backgroundColor = foregroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${sphereForegroundColor}, ${sphereBackgroundColor})`
    );
    caption.style.color = foregroundColor;
    resetBtn.style.color = foregroundColor;
    footerContainer.style.color = foregroundColor;
    footerLink.style.color = foregroundColor;
    resetAnimationAndAudio();
  }
});

sphere.addEventListener("click", () => {
  if (sphere.dataset.state === "stop") {
    headerContainer.setAttribute("style", "visibility: hidden");
    controlsContainer.setAttribute("style", "visibility: hidden");
    footerContainer.setAttribute("style", "visibility: hidden");
    sphere.dataset.state = "play";
    sphere.style.animation = "breath 11s infinite ease-in-out running";
    caption.style.setProperty("--animation-name", "sphere-caption");
    caption.style.setProperty("--animation", "running");
    gong.play();
  } else if (sphere.dataset.state === "play") {
    headerContainer.setAttribute("style", "visibility: visible");
    controlsContainer.setAttribute("style", "visibility: visible");
    footerContainer.setAttribute("style", "visibility: visibility");
    sphere.dataset.state = "stop";
    sphere.style.animationPlayState = "paused";
    caption.style.setProperty("--animation", "paused");
    gong.pause();
  }
});

resetBtn.addEventListener("click", () => resetAnimationAndAudio());
