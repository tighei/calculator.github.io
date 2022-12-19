class Calculator {
  constructor(prescreen, curscreen) {
    this.prescreen = prescreen;
    this.curscreen = curscreen;
    this.clear();
  }
  delete() {
    this.curscreenn = this.curscreenn.toString().slice(0, -1);
  }
  clear() {
    this.curscreenn = "";
    this.prescreenn = "";
    this.operator = undefined;
  }
  appendNumber(number) {
    if (number === "." && this.curscreenn.includes(".")) return;
    this.curscreenn = this.curscreenn.toString() + number.toString();
  }

  updateDispaly() {
    this.curscreen.innerText = this.curscreenn;
    if (this.operation != null) {
      this.prescreen.innerText = `${this.prescreenn}  ${this.operation}`;
    } else {
      this.prescreen.innerText = "";
    }
  }
  chooseoperate(operation) {
    if (this.curscreenn === "") return;
    if (this.prescreenn !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prescreenn = this.curscreenn;
    this.curscreenn = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.prescreenn);
    const current = parseFloat(this.curscreenn);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.curscreenn = computation;
    this.operation = undefined;
    this.prescreenn = "";
  }
}

const numberButton = document.querySelectorAll("[data-number]");

const operatorButton = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector(".clear-btn");
const submitButton = document.querySelector(".submit-btn");
const dotButton = document.querySelector(".dot-btn");
const equalButton = document.getElementById("equal-btn");
const prescreen = document.querySelector(".prescreen");
const curscreen = document.querySelector(".curscreen");

const calculator = new Calculator(prescreen, curscreen);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDispaly();
  });
});
operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseoperate(button.innerText);
    calculator.updateDispaly();
  });
});
equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDispaly();
});
clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDispaly();
});
submitButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDispaly();
});
