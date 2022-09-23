function solve(input) {
  let newArr = [];
  let currNum = 0;
  for (let cmd of input) {
    if (cmd == "add") {
      currNum++;
      newArr.push(currNum);
    } else {
      newArr.pop();
      currNum++;
      newArr.push(currNum);
      newArr.pop();
    }
  }
  if (newArr.length == 0) {
    console.log("Empty");
  } else {
    newArr.forEach((item) => console.log(item));
  }
}
solve(["add", "add", "remove", "add", "add"]);
