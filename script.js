if ("service-worker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

const title = document.querySelector(".app-title");
const sphereContainer = document.querySelector(".sphere-container");
const sphere = document.querySelector(".sphere");
const caption = document.querySelector(".caption");
const gong = document.querySelector("#gong");
const btnContainer = document.querySelector(".btn-container");
const resetBtn = document.querySelector(".reset-btn");

sphere.addEventListener("click", () => {
  if (sphere.dataset.state === "stop") {
    title.setAttribute("style", "visibility: hidden");
    btnContainer.setAttribute("style", "visibility: hidden");
    sphere.dataset.state = "play";
    sphere.style.animation = "breath 11s infinite ease-in-out running";
    caption.style.setProperty("--animation-name", "sphere-caption");
    caption.style.setProperty("--animation", "running");
    gong.play();
  } else if (sphere.dataset.state === "play") {
    title.setAttribute("style", "visibility: visible");
    btnContainer.setAttribute("style", "visibility: visible");
    sphere.dataset.state = "stop";
    sphere.style.animationPlayState = "paused";
    caption.style.setProperty("--animation", "paused");
    gong.pause();
  }
});

// broken
resetBtn.addEventListener("click", () => {
  sphere.style.animation = "paused"; // resets animation
  caption.style.setProperty("--animation-name", "paused"); // resets pseud-element animation

  gong.pause();
  gong.currentTime = 0; // reset audio to beginning
});
