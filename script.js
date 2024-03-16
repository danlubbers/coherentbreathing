if ("service-worker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

const root = document.documentElement;
const headerContainer = document.querySelector(".header-container");
const headerTitle = document.querySelector(".header-title");
const toggleInput = document.querySelector(".toggle-input");
const toggleLabel = document.querySelector(".toggle-label");
const sphereContainer = document.querySelector(".sphere-container");
const sphere = document.querySelector(".sphere");
const caption = document.querySelector(".caption");
const gong = document.querySelector("#gong");
const btnContainer = document.querySelector(".btn-container");
const resetBtn = document.querySelector(".reset-btn");
const footerContainer = document.querySelector("footer");

const resetAnimationAndAudio = () => {
  sphere.style.animation = "paused"; // resets animation
  caption.style.setProperty("--animation-name", "paused"); // resets pseud-element animation

  gong.pause();
  gong.currentTime = 0; // reset audio to beginning
};

toggleInput.addEventListener("click", () => {
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

  if (toggleInput.checked) {
    toggleInput.checked = true;
    root.style.backgroundColor = nightmodeBackgroundColor;
    headerTitle.style.color = nightmodeForegroundColor;
    toggleLabel.style.backgroundColor = nightmodeForegroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${nightmodeSphereForegroundColor}, ${nightmodeSphereBackgroundColor})`
    );
    caption.style.color = nightmodeForegroundColor;
    resetBtn.style.color = nightmodeForegroundColor;
    resetAnimationAndAudio();
  }
  if (!toggleInput.checked) {
    toggleInput.checked = false;
    root.style.backgroundColor = backgroundColor;
    headerTitle.style.color = foregroundColor;
    toggleLabel.style.backgroundColor = foregroundColor;
    sphere.style.setProperty(
      "--sphere-gradient-colors",
      `radial-gradient(circle, ${sphereForegroundColor}, ${sphereBackgroundColor})`
    );
    caption.style.color = foregroundColor;
    resetBtn.style.color = foregroundColor;
    resetAnimationAndAudio();
  }
});

sphere.addEventListener("click", () => {
  if (sphere.dataset.state === "stop") {
    headerContainer.setAttribute("style", "visibility: hidden");
    btnContainer.setAttribute("style", "visibility: hidden");
    footerContainer.setAttribute("style", "visibility: hidden");
    sphere.dataset.state = "play";
    sphere.style.animation = "breath 11s infinite ease-in-out running";
    caption.style.setProperty("--animation-name", "sphere-caption");
    caption.style.setProperty("--animation", "running");
    gong.play();
  } else if (sphere.dataset.state === "play") {
    headerContainer.setAttribute("style", "visibility: visible");
    btnContainer.setAttribute("style", "visibility: visible");
    footerContainer.setAttribute("style", "visibility: visibility");
    sphere.dataset.state = "stop";
    sphere.style.animationPlayState = "paused";
    caption.style.setProperty("--animation", "paused");
    gong.pause();
  }
});

resetBtn.addEventListener("click", () => resetAnimationAndAudio());
