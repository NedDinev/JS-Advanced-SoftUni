function processOddPositions(input) {
  let oddArr = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 != 0) {
      oddArr.push(input[i]);
    }
  }

  let result = oddArr.map((x) => x * 2).reverse();

  return result;
}
processOddPositions([10, 15, 20, 25]);
