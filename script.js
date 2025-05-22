let x = "";
let y = "";
let temp = "";
let operator = "";

function operate(x, y, operator) {
  x = parseInt(x);
  y = parseInt(y);

  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    return x / y;
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
    temp += button.innerHTML;
    displayNumber(temp);

    console.log("Temp: " + temp);
    console.log("X: " + x);
    console.log("Y: " + y);
  });
});

//operate buttons
const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.innerHTML;
    displayNumber(operator);

    if (!x && !y) {
      x = temp;
      temp = "";
    } else {
      y = temp;
      temp = "";
    }

    console.log("OperatorX: " + x);
    console.log("OperatorY: " + y);
    console.log("Operator: " + operator);

    if (x && y && operator) {
      const result = operate(x, y, operator);
      console.log("Result: " + result);
      displayNumber(result);

      x = result;
      y = "";
      operator = "";
    }
  });
});

//clear button
const acButton = document.querySelector(".ac-button");
acButton.addEventListener("click", () => {
  x = "";
  y = "";
  temp = "";
  operator = "";
  displayNumber(0);

  console.log("actemp: " + temp);
  console.log("acX: " + x);
  console.log("acY: " + y);
  console.log("ac-operator: " + operator);
});
