function mathOperations(firstNum, secondNum, operator) {
  let firstN = Number(firstNum);
  let secondN = Number(secondNum);

  let result = 0;
  switch (operator) {
    case "+":
      result = firstN + secondN;
      break;
    case "-":
      result = firstN - secondN;
      break;
    case "*":
      result = firstN * secondN;
      break;
    case "/":
      result = firstN / secondN;
      break;
    case "%":
      result = firstN % secondN;
      break;
    case "**":
      result = firstN ** secondN;
      break;

    default:
      break;
  }
  console.log(result);
}
mathOperations(5, 6, "+");
//'+', '-', '*', '/', '%', '**'.
