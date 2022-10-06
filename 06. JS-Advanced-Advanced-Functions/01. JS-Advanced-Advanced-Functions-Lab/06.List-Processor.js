function solve(arr) {
  let inputsArr = [];

  for (let input of arr) {
    let [cmd, word] = input.split(" ");

    switch (cmd) {
      case "add":
        add(word);
        break;
      case "remove":
        remove(word);
        break;
      case "print":
        print();

        break;

      default:
        break;
    }
  }
  function add(str) {
    return inputsArr.push(str);
  }
  function remove(str) {
    return (inputsArr = inputsArr.filter((i) => i !== str));
  }
  function print() {
    console.log(inputsArr.join(","));
  }
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
