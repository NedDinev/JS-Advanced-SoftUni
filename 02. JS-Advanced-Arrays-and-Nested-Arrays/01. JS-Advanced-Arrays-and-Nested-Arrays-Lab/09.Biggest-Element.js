function biggestElement(input) {
  let biggestNums = [];
  for (let currArr of input) {
    let currBiggest = currArr.sort((a, b) => a - b).pop();
    biggestNums.push(currBiggest);
  }
  let result = biggestNums.sort((a, b) => a - b).pop();
  console.log(result);
}
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
