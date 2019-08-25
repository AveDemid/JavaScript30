import "./main.css";

const title = document.createElement("h2");
const controls = document.createElement("div");
const labelSpacing = document.createElement("label");
const labelBlur = document.createElement("label");
const labelColor = document.createElement("label");
const spacingInput = document.createElement("input");
const blurInput = document.createElement("input");
const colorInput = document.createElement("input");
const image = document.createElement("img");
const container = document.createElement("div");

// TITLE
title.classList.add("h2");
title.innerHTML = "Update CSS Variables with <span class='js'>JS</span>";

// CONTROLS
controls.classList.add("controls");

// LABLE SPACING
labelSpacing.innerText = "Spacing:";

// LABEL BLUR
labelBlur.innerText = "Blur:";

// LABEL COLOR
labelColor.innerText = "Color:";

// SPACING INPUT
spacingInput.setAttribute("type", "range");
spacingInput.setAttribute("name", "spacing");
spacingInput.setAttribute("min", "10");
spacingInput.setAttribute("max", "200");
spacingInput.setAttribute("value", "10");
spacingInput.setAttribute("data-sizing", "px");

// BLUR INPUT
blurInput.setAttribute("type", "range");
blurInput.setAttribute("name", "blur");
blurInput.setAttribute("min", "0");
blurInput.setAttribute("max", "25");
blurInput.setAttribute("value", "10");
blurInput.setAttribute("data-sizing", "px");

// COLOR INPUT
colorInput.setAttribute("type", "color");
colorInput.setAttribute("name", "base");
colorInput.setAttribute("value", "#ffc600");

// IMAGE
image.setAttribute("src", "https://via.placeholder.com/200x200");
image.style.alignSelf = "center";

// CONTAINER
container.classList.add("container");

// APPEND INPUT'S IN LABEL
labelSpacing.appendChild(spacingInput);
labelBlur.appendChild(blurInput);
labelColor.appendChild(colorInput);

// APEND LABEL'S IN CONTROLS
controls.appendChild(labelSpacing);
controls.appendChild(labelBlur);
controls.appendChild(labelColor);

// APPEND ALL IN CONTAINER
container.appendChild(title);
container.appendChild(controls);
container.appendChild(image);

// APPEND CONTAINER IN BODY
document.body.appendChild(container);

const handleUpdate = (event) => {
  const suffix = event.srcElement.dataset.sizing || "";
  const value = event.srcElement.value;
  const name = event.srcElement.name;

  document.documentElement.style.setProperty(`--${name}`, value+suffix)
}

const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))