import "./main.css";

console.group("Start with strings, numbers and booleans");

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

console.groupEnd("Start with strings, numbers and booleans");

console.group("Let's say we have an array");

const players = ["Wes", "Sarah","Ryan", "Poppy"];
const team = players;
console.log(players, team);
team[3] = "Lax";
console.log(players, team);

const team2 = players.slice();
team2[0] = "Ave";
console.log(players, team2);

const team3 = [].concat(players);
team3[3] = "Hello world";
console.log(players, team3);

const team4 = [...players];
team4[1] = "Ololo";
console.log(players, team4);

const team5 = Array.from(players);
team5[0] = "Dominator1337";
console.log(players, team5);

console.groupEnd("Let's say we have an array");

console.group("With object");

const person = {
  name: "Wes Bos",
  age: 20
}

const cap1 = Object.assign({}, person, { number: 99 });
const cap2 = {...person, number: 99}
console.log(person, cap1, cap2);

const ave = {
  name: "Demid",
  age: 23,
  social: {
    twitter: "@AveDemid",
    github: "AveDemid"
  }
}

const dev = Object.assign({}, ave);
dev.social.twitter = "Deleted";

const dev2 = JSON.parse(JSON.stringify(ave));
dev2.social.twitter = "Removed";

console.log(ave, dev, dev2);

console.groupEnd("With object");