import "./main.css";

const makeGreen = () => {
  const p = document.querySelector("p");
  p.style.color = "#bada55";
  p.style.fontSize = "50px";
}

window.makeGreen = makeGreen;

// regular
console.log("Hello");

// interpolated
console.log("Hello I am %s!", "Demid");

// styled
console.log("%cI'm some great text", "color: rebeccapurple");

// warning
console.warn("Warning!");

// error
console.error("Error!");

// info
console.info("Info!");

// testing
console.assert(1 === 2, "That is wrong!");

// clear
console.clear();

// viewing DOM element
const p = document.querySelector("p");

console.log(p);
console.dir(p);

console.clear();

// Grouping together
const dogs = [{name: "Tom", age: 7}, {name: "Dave", age: 3}];

dogs.forEach((dog) => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} yeard old`);
  console.log(`${dog.name} is ${dog.age * 7} dog yeard old`);
  console.groupEnd(`${dog.name}`)
})

// counting
console.count("Hello");
console.count("My");
console.count("Darkness");
console.count("My");
console.count("Old");
console.count("Friend");

// timing
console.time('fetching data');

fetch("https://api.github.com/users/AveDemid")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  })

// table
console.table(dogs);