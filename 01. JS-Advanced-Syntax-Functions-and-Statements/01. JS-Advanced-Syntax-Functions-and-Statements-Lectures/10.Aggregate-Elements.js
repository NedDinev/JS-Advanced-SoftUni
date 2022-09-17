function aggregateElements(input) {
  let allSum = 0;
  let inverseSum = 0;
  let concat = "";
  for (let num of input) {
    num = Number(num);
    allSum += num;
  }
  for (let num of input) {
    num = Number(num);
    inverseSum += 1 / num;
  }
  for (let num of input) {
    concat += num;
  }

  console.log(allSum);
  console.log(inverseSum);
  console.log(concat);
}
aggregateElements([1, 2, 4]);
