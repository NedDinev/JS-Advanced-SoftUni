function stringLength(firstInput, secondInput, thirdInput) {
  let sumL = firstInput.length + secondInput.length + thirdInput.length;
  let avgL = sumL / 3;
  console.log(sumL);
  console.log(Math.floor(avgL));
}
stringLength("chocolate", "ice cream", "cake");
