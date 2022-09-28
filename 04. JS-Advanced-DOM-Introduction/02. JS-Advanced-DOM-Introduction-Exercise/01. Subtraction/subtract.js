function subtract() {
  let firstNum = document.getElementById("firstNumber");
  let secondNum = document.getElementById("secondNumber");
  let result = document.getElementById("result");

  firstNum = Number(firstNum.value);
  secondNum = Number(secondNum.value);

  result.textContent = firstNum - secondNum;
}
