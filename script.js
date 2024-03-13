const title = document.querySelector(".app-title");
const sphereContainer = document.querySelector(".sphere-container");
const sphere = document.querySelector(".sphere");
const caption = document.querySelector(".caption");
const gong = document.querySelector("#gong");

sphere.addEventListener("click", () => {
  if (sphere.dataset.state === "stop") {
    title.setAttribute("style", "visibility: hidden");
    sphere.dataset.state = "play";
    sphere.style.animationPlayState = "running";
    caption.style.setProperty("--animation", "running");
    gong.play();
  } else {
    title.setAttribute("style", "visibility: visible");
    sphere.dataset.state = "stop";
    sphere.style.animationPlayState = "paused";
    caption.style.setProperty("--animation", "paused");
    gong.pause();
    // gong.currentTime = 0; // reset audio to beginning
  }
});
