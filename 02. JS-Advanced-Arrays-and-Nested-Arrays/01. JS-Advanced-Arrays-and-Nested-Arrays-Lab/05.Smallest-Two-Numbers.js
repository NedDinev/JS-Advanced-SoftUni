function smallestTwoNums(input) {
  input.sort((a, b) => a - b);
  let result = input.splice(0, 2);
  console.log(result);
}
smallestTwoNums([30, 15, 50, 5]);
