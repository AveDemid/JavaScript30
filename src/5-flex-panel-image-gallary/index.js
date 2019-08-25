import "./main.css";

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

const images = [img1, img2, img3, img4, img5];
const panels = document.querySelectorAll(".panel");

const toggleOpen = (event) => {
  panels.forEach(panel => {
    panel.classList.remove("open-active");
  });

  if(event.currentTarget.classList.contains("open")) {
    panels.forEach(panel => {
      panel.classList.remove("open");
    })
  } else {
    panels.forEach(panel => {
      panel.classList.remove("open");
    })

    event.currentTarget.classList.toggle("open");
  }
};

const toggleOpenActive = (event) => {
  if(event.propertyName.includes("flex") && event.target.classList.contains("open")) {
    event.target.classList.add("open-active");
  } 
};

panels.forEach((panel, key) => {
  panel.style.backgroundImage = `url("${images[key]}")`;
  panel.style.backgroundPosition = "center";
  panel.style.backgroundSize = "cover";
})

window.onload = () => {
  setTimeout(() => {
    panels.forEach(panel => {
      panel.addEventListener("click", toggleOpen);
      panel.addEventListener("transitionend", toggleOpenActive);
    })
  }, 50);
};