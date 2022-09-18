function diagonalSum(input) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let i = 0; i < input.length * 2; i++) {
    if (i < input.length) {
      input;
      let currArr = input[i];

      mainDiagonal += currArr[i];
    }
  }

  input = input.reverse();
  for (let i = 0; i < input.length; i++) {
    let currArr = input[i];

    secondaryDiagonal += currArr[i];
  }
  console.log(mainDiagonal, secondaryDiagonal);
}
diagonalSum([
  [20, 40],
  [10, 60],
]);
console.log(`----------------------------------`);
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
