import "./main.css";

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

// just to simplify debugging
window.addItems = addItems;
window.itemsList = itemsList;
window.items = items;

const addItem = (event) => {
  event.preventDefault();

  const item = {
    text: event.target[0].value,
    done: false
  }

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  event.target.reset();
}

const populateList = (plates, platesList) => {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join("");
}


const toggleDone = (event) => {
  if(!event.target.matches("input")) return;
  
  const el = event.target;
  const index = el.dataset.index;

  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
