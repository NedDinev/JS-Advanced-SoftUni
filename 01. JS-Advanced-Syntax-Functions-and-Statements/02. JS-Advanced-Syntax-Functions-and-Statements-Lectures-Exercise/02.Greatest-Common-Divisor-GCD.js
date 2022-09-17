function greatestCommonDivisor(firstInput, secondInput) {
  let firstN = Number(firstInput);
  let secondN = Number(secondInput);
  let maxN = Math.max(firstN, secondN);
  let commonDivisor = 0;
  for (let i = 1; i < maxN; i++) {
    if (firstN % i == 0 && secondN % i == 0) {
      commonDivisor = i;
    }
  }
  console.log(commonDivisor);
}

greatestCommonDivisor(2154, 458);
greatestCommonDivisor(15, 5);
