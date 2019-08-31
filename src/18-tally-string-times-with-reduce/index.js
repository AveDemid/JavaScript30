import "./main.css";

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [minutes, seconds] = timeCode.split(":").map(parseFloat);
    
    return minutes * 60 + seconds;
  })
  .reduce((previousValie, currentValue) => previousValie + currentValue)

let secondsLeft = seconds;

const  hoursInSeconds = (secondsLeft - (secondsLeft % 3600));
secondsLeft -=  hoursInSeconds;

const minutesInSeconds = (secondsLeft - (secondsLeft % 60));
secondsLeft -= minutesInSeconds;

const hours = hoursInSeconds / 3600;
const minutes = minutesInSeconds / 60;

const time = `${hours}:${minutes}:${secondsLeft}`

console.log(time);