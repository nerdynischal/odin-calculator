let x = "";
let y = "";
let operator = "";
let result = "";

let isX = true;

function add(x, y) {
  result = x + y;
}

function subtract(x, y) {
  result = x - y;
}

function multiply(x, y) {
  result = x * y;
}

function divide(x, y) {
  result = x / y;
}

function operate(x, y, operator) {
  x = parseInt(x);
  y = parseInt(y);

  console.log("x:" + x);
  console.log("y:" + y);
  console.log("operator:" + operator);

  if (operator === "+") {
    add(x, y);
  } else if (operator === "-") {
    subtract(x, y);
  } else if (operator === "*") {
    multiply(x, y);
  } else if (operator === "/") {
    divide(x, y);
  }
}

const displayHTML = document.querySelector(".js-display");

function displayNumber(input) {
  displayHTML.textContent = `${input}`;
}

let displayNumberValue = "";

//number buttons
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isX) {
      x += button.innerHTML;
      displayNumber(x);
    } else {
      y += button.innerHTML;
      displayNumber(y);
    }
  });
});

//operate buttons
const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (x !== "" && y !== "") {
      operate(x, y, operator);
      displayNumber(result);
      x = result;
      y = "";
      isX = false;
    } else {
      operator = button.innerHTML;
      displayNumber(operator);
      isX = false;
    }
    operator = button.innerHTML;
  });
});

//evaluate function
const calcButton = document.querySelector(".calc-button");
calcButton.addEventListener("click", () => {
  if (x === "") {
    displayNumber("Enter number");
  } else {
    operate(x, y, operator);
    x = result;
    y = "";
    isX = false;
    console.log(result);
    displayNumber(result);
  }
});

//clear button to reset all values
const acButton = document.querySelector(".ac-button");
acButton.addEventListener("click", () => {
  x = "";
  y = "";
  result = "";
  operator = "";
  isX = true;
  displayNumber(0);
});
