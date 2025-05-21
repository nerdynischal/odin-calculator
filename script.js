let x = "";
let y = "";
let operator = "";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log(add(4, 5));
console.log(subtract(5, 4));
console.log(multiply(5, 4));
console.log(divide(4, 2));

function operate(x, y, operator) {
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
