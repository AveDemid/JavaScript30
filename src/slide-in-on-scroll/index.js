import "./main.css";

const throttled = (delay, fn) => {
  let lastCall = 0;
  return (...args) => {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

const debounced = (delay, fn) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}

const sliderImages = document.querySelectorAll(".slide-in");

const checkSlide = () => {
  sliderImages.forEach((image)=> {
    const bounding = image.getBoundingClientRect();
    
    if(bounding.bottom - (image.height / 2) > window.innerHeight) {
      image.classList.remove("active")
    } else {
      image.classList.add("active");
    }
  })
}

document.addEventListener("scroll", throttled(100, checkSlide));