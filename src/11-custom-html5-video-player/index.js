import "./main.css";
import "./custom-html-video-player.mp4";

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__range");

const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};

const updateButton = (event) => {
  const icon = event.target.paused ? "►" : "❙❙";
  toggle.textContent = icon;
};

const skip = (event) => {
  video.currentTime += parseFloat(event.currentTarget.dataset.skip);
}

const handleRangeUpdate = ({target: {value, name}}) => {
  video[name] = value;
}

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;

  progressFilled.style.flexBasis = `${percent}%`;
}

const scrub = (event) => {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}

let mousedown = false;

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => {
  button.addEventListener("click", skip)
})

ranges.forEach(range => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
})

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (event) => mousedown && scrub(event));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);