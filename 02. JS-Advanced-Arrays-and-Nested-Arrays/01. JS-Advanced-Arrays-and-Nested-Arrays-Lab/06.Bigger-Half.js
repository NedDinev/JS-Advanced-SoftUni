function biggerHalf(input) {
  let sortedArr = input.sort((a, b) => a - b);
  sortedArr.splice(0, sortedArr.length / 2);
  return sortedArr;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
