import "./main.css";

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

const handleCheck = (event) => {
  let isBetween = false;

  if(event.shiftKey && event.target.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === event.target || checkbox === lastChecked) {
        isBetween = !isBetween;
      }

      if(isBetween) {
        checkbox.checked = true;
      }
    })
  }

  lastChecked = event.target;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleCheck)
})

