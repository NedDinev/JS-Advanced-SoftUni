function solve(array) {
  let sum = array[0].reduce((a, b) => a + b);

  for (let i = 0; i < array[0].length; i++) {
    let currentCol = 0;

    for (let j = 0; j < array.length; j++) {
      currentCol += array[j][i];
    }

    if (currentCol !== sum) {
      return console.log(false);
    }
  }
  return console.log(true);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log("------------------");
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
