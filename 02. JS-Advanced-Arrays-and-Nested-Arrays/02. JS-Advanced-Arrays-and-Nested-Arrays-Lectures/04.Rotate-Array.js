function solve(strArr, num) {
  for (let i = 0; i < num; i++) {
    let takenEl = strArr.pop();
    strArr.unshift(takenEl);
  }
  return strArr.join(" ");
}
solve(["1", "2", "3", "4"], 2);
