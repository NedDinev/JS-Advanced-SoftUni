function solve(...input) {
  let allTypes = {};

  for (let arg of input) {
    console.log(`${typeof arg}: ${arg}`);

    allTypes.hasOwnProperty(typeof arg)
      ? (allTypes[typeof arg] += 1)
      : (allTypes[typeof arg] = 1);
  }
  let sorted = Object.entries(allTypes).sort((a, b) => b[1] - a[1]);

  for (let [key, val] of sorted) {
    console.log(`${key} = ${val}`);
  }
}
solve({ name: "bob" }, 3.333, 9.999);
