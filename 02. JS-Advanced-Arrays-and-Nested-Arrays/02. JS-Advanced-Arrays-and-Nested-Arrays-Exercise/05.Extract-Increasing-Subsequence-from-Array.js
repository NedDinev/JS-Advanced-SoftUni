function solve(input) {
  let newArr = [];
  let biggestNum = input[0];

  newArr = input.reduce((acc, currEl) => {
    if (biggestNum <= currEl) {
      acc.push(currEl);
      biggestNum = currEl;
    }
    return acc;
  }, []);

  console.log(newArr);
}
solve([20, 3, 2, 15, 6, 1]);
