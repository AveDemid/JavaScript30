import "./main.css";

const clock = document.createElement("div");
const clockFace = document.createElement("div");
const clockPlaceholder = document.createElement("div");
const centerClock = document.createElement("div");
const arrowHours = document.createElement("div");
const arrowMinutes = document.createElement("div");
const arrowSecond = document.createElement("div");

clock.classList.add("clock");
clockFace.classList.add("clock-face");
clockPlaceholder.classList.add("clock-placeholder");
centerClock.classList.add("center-clock");
arrowHours.classList.add("arrow", "arrow-hours");
arrowMinutes.classList.add("arrow", "arrow-minutes");
arrowSecond.classList.add("arrow", "arrow-second");

document.body.appendChild(clock);
clock.appendChild(clockFace);
clock.appendChild(centerClock);
clockFace.appendChild(clockPlaceholder);
clockFace.appendChild(arrowHours);
clockFace.appendChild(arrowMinutes);
clockFace.appendChild(arrowSecond);

const setDate = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = (hours / 12) * 360 + 90;
  const minutesDegress = (minutes / 60) * 360 + 90;
  const secondDegrees = (seconds / 60) * 360 + 90;

  arrowHours.style.transform = `rotate(${hoursDegrees}deg)`;
  arrowMinutes.style.transform = `rotate(${minutesDegress}deg)`;
  arrowSecond.style.transform = `rotate(${secondDegrees}deg)`;
};

const draw = () => {
  const tick = t1 => t2 => {
    if (t2 - t1 > 1000) {
      setDate();
      window.requestAnimationFrame(tick(t2));
    } else {
      window.requestAnimationFrame(tick(t1));
    }
  };

  window.requestAnimationFrame(tick(0));
};

window.onload = () => {
  setDate();
  draw();
};
