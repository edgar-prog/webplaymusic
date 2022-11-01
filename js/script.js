const btn = document.querySelector(".btn");
const audio = document.querySelector("audio");
const visualizer = document.querySelector(".visualizer");

function playMusic() {
  audio.play();
  if(ctx.state === "suspended") {
    ctx.resume();
  }
}

btn.addEventListener("click", (event) => {
  audio.paused ? playMusic() : audio.pause();
  btn.classList.toggle("btn-play");
  btn.classList.toggle("btn-pause");
});

var ctx = new AudioContext();
