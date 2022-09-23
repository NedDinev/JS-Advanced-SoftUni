function solve(strArr, num) {
  let result = strArr.filter((currNum, index) => index % num == 0);

  return result;
}
solve(["5", "20", "31", "4", "20"], 2);
