import "./main.css";

const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let startX = 0;
let startY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
  if(!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();

  [startX, startY] = [event.offsetX, event.offsetY];

  
  if (hue >= 360) {
    hue = 0;
  } else {
    hue++;
  }

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

document.addEventListener("mousemove", event => {
  draw(event);
});

document.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [startX, startY] = [event.offsetX, event.offsetY];
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});
