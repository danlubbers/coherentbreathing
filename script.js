import checkForIOS from "./isIOS";

const root = document.documentElement;
const prompt = checkForIOS();
const headerContainer = document.querySelector(".header-container");
const pwaModalContainer = document.querySelector(".pwa-modal");
const pwaModalBtn = document.querySelector(".pwa-modal-btn");
const headerTitle = document.querySelector(".header-title");
const toggleThemeContainer = document.querySelector(".toggle-theme-container");
const toggleThemeInput = document.querySelector(".toggle-theme-input");
const themeIcon = document.querySelector(".theme-icon");
const sphere = document.querySelector(".sphere");
const caption = document.querySelector(".caption");
const gong = document.querySelector("#gong");
const fiveHundredTwentyEightHZ = document.querySelector(
  "#fiveHundredTwentyEightHZ"
);
const controlsContainer = document.querySelector(".controls-container");
const fiveHundredTwentyEightHZBtn = document.querySelector(
  ".five-twenty-eight-hz"
);
const audio = document.querySelector("audio");
const audioInput = document.querySelector(".toggle-audio-input");
const audioIcon = document.querySelector(".audio-icon");
const resetBtn = document.querySelector(".reset-btn");
const infoModalContainer = document.querySelector(".info-modal-container");
const infoXBtn = document.querySelector(".info-close-button");
const infoModalBtn = document.querySelector(".info-modal-btn");
const infoContainer = document.querySelector(".info-icon-container");
const infoIcon = document.querySelector(".info-icon");
const footerContainer = document.querySelector("footer");
const footerText = document.querySelector(".footer-text");
const footerLink = document.querySelector(".footer-link");

let play528hz = false;

if (prompt) {
  // Show modal based on IOS and time
  pwaModalContainer.style.display = "flex";
}

// User closes modal
pwaModalBtn.addEventListener(
  "click",
  () => (pwaModalContainer.style.display = "none")
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
    toggleThemeContainer.style.backgroundColor = nightmodeForegroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${nightmodeSphereForegroundColor}, ${nightmodeSphereBackgroundColor})`
    );
    caption.style.color = nightmodeForegroundColor;
    audioIcon.style.backgroundColor = nightmodeForegroundColor;
    resetBtn.style.color = nightmodeForegroundColor;
    infoIcon.style.fill = nightmodeForegroundColor;
    footerText.style.color = nightmodeForegroundColor;
    footerLink.style.color = nightmodeForegroundColor;
    resetAnimationAndAudio();
  }
  if (!toggleThemeInput.checked) {
    toggleThemeInput.checked = false;
    root.style.backgroundColor = backgroundColor;
    headerTitle.style.color = foregroundColor;
    toggleThemeContainer.style.backgroundColor = foregroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${sphereForegroundColor}, ${sphereBackgroundColor})`
    );
    caption.style.color = foregroundColor;
    audioIcon.style.backgroundColor = foregroundColor;
    resetBtn.style.color = foregroundColor;
    infoIcon.style.fill = foregroundColor;
    footerText.style.color = foregroundColor;
    footerLink.style.color = foregroundColor;
    resetAnimationAndAudio();
  }
});

sphere.addEventListener("click", () => {
  if (sphere.dataset.state === "stop") {
    headerContainer.setAttribute("style", "visibility: hidden");
    themeIcon.setAttribute("style", "opacity: 0"); // fixes lag in transition animation
    controlsContainer.setAttribute("style", "visibility: hidden");
    infoContainer.setAttribute("style", "visibility: hidden");
    footerContainer.setAttribute("style", "visibility: hidden");
    sphere.dataset.state = "play";
    sphere.style.animation = "breath 11s infinite ease-in-out running";
    caption.style.setProperty("--animation-name", "sphere-caption");
    caption.style.setProperty("--animation", "running");
    gong.play();
    if (play528hz) {
      fiveHundredTwentyEightHZ.volume = 0.03;
      fiveHundredTwentyEightHZ.play();
    }
  } else if (sphere.dataset.state === "play") {
    headerContainer.setAttribute("style", "visibility: visible");
    themeIcon.setAttribute("style", "opacity: 1");
    controlsContainer.setAttribute("style", "visibility: visible");
    infoContainer.setAttribute("style", "visibility: visible");
    footerContainer.setAttribute("style", "visibility: visible");
    sphere.dataset.state = "stop";
    sphere.style.animationPlayState = "paused";
    caption.style.setProperty("--animation", "paused");
    gong.pause();
    if (play528hz) {
      fiveHundredTwentyEightHZ.pause();
    }
  }
});

fiveHundredTwentyEightHZBtn.addEventListener("click", () => {
  play528hz = !play528hz;
});

audioInput.addEventListener("click", () =>
  audioInput.checked === true ? (audio.muted = true) : (audio.muted = false)
);

resetBtn.addEventListener("click", () => resetAnimationAndAudio());

infoIcon.addEventListener(
  "click",
  () => (infoModalContainer.style.display = "flex")
);

infoModalBtn.addEventListener(
  "click",
  () => (infoModalContainer.style.display = "none")
);

infoXBtn.addEventListener(
  "click",
  () => (infoModalContainer.style.display = "none")
);
