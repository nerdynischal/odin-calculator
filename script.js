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

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML === "=") {
      checkOperator();
      displayNumber(displayNumberValue);
      resetDisplay();
    } else if (button.innerHTML === "AC") {
      resetDisplay();
      displayNumber(0);
    } else {
      displayNumberValue += button.innerHTML;
      displayNumber(displayNumberValue);
    }
  });
});

//if user presses =, it needs to operate the two numbers
//the display 1+1
//split this with the operator too
//check for the operator
//split the left side and the right side

function checkOperator() {
  let nums = [];
  let result = 0;

  if (displayNumberValue.includes("+")) {
    nums = displayNumberValue.split("+");
    result = operate(nums[0], nums[1], "+");
  } else if (displayNumberValue.includes("-")) {
    nums = displayNumberValue.split("-");
    result = operate(nums[0], nums[1], "-");
  } else if (displayNumberValue.includes("*")) {
    nums = displayNumberValue.split("*");
    result = operate(nums[0], nums[1], "*");
  } else if (displayNumberValue.includes("/")) {
    nums = displayNumberValue.split("/");
    result = operate(nums[0], nums[1], "/");
  }

  displayNumberValue = result;
}

function resetDisplay() {
  displayNumberValue = "";
}
