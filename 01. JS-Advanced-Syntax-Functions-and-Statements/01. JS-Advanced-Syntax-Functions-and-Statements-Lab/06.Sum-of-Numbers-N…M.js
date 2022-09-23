function sumOfNums(firstInput, secondInput) {
  let firstNum = Number(firstInput);
  let secondNum = Number(secondInput);

  let result = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    result += i;
  }
  console.log(result);
}
sumOfNums("1", "5");
