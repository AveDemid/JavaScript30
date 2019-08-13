// CSS
import "./main.css";

// SOUND
import boom from "./sound/boom.wav";
import clap from "./sound/clap.wav";
import hihat from "./sound/hihat.wav";
import kick from "./sound/kick.wav";
import openhat from "./sound/openhat.wav";
import ride from "./sound/ride.wav";
import snare from "./sound/snare.wav";
import tink from "./sound/tink.wav";
import tom from "./sound/tom.wav";

(() => {
  const audios = [boom, clap, hihat, kick, openhat, ride, snare, tink, tom];
  const keyCodes = ["65", "83", "68", "70", "71", "72", "74", "75", "76"];
  const keys = document.querySelectorAll(".key");

  // Add audio
  audios.map((audioSrc, index) => {
    const audio = document.createElement("audio");

    audio.src = audioSrc;
    audio.setAttribute("data-key", keyCodes[index]);

    document.body.appendChild(audio);
  });

  // Listen keydown
  window.addEventListener("keydown", event => {
    // Effect for .key if exist
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (key) {
      key.classList.add("playing");
    }

    // Play audio if exist
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  // Remove class after transition end
  keys.forEach(key => {
    key.addEventListener("transitionend", () => {
      key.classList.remove("playing");
    });
  });
})();
