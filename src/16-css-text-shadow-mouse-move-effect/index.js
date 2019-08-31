import "./main.css";

const throttle = (fn, delay) => {  
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();

    if(now - lastCall > delay) {
      lastCall = now;
      return fn(...args)
    }
  }
}

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

const moveShadow = (event) => {
  const { offsetWidth: width, offsetHeight: height } = hero; 
  let { offsetX: x, offsetY: y } = event;

  if(event.target !== hero) {
    x = x + text.offsetLeft;
    y = y + text.offsetTop;

    console.log(text.offsetTop);
  }

  console.log(x, y);

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 black`;
  console.log(text);
};

hero.addEventListener("mousemove", throttle(moveShadow, 30));