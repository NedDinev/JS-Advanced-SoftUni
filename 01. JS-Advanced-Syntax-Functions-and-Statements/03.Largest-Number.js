function largestNum(firstInput, secondInput, thirdInput) {
  let firstComparison = Math.max(firstInput, secondInput);
  let secondComparison = Math.max(secondInput, thirdInput);

  let biggestNum = 0;
  if (secondComparison >= firstComparison) {
    biggestNum = secondComparison;
  } else {
    biggestNum = firstComparison;
  }

  console.log(`The largest number is ${biggestNum}.`);
}
largestNum(5, -3, 16);
