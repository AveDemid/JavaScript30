import "./main.css";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const preloader = document.querySelector(".preloader");


fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
  .then(() => {
    preloader.addEventListener("transitionend", () => {
      preloader.style.display = "none";
    });

    preloader.style.opacity = 0;
  });

const findMathes = (wordToMatch, list) => {
  const regexp = new RegExp(wordToMatch, "gi");

  return list.filter((item) => item.city.match(regexp) || item.state.match(regexp));
};

const  numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
const displayMatches = (event) => {
  const value = event.target.value;
  const matchArr = findMathes(value, cities);
  const regexp = new RegExp(value, "gi");

  const html = matchArr.map((item) => {
    const city = item.city.replace(regexp, `<span class="hl">${value}</span>`);
    const state = item.state.replace(regexp, `<span class="hl">${value}</span>`);

    return `
      <li>
        <span class="name">${city} ${state}</span>
        <span class="population">${numberWithCommas(item.population)}</span>
      </li>`;
  }).join("");

  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)