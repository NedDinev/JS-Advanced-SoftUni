function solve(input) {
  let result = {};
  for (let data of input) {
    let [productName, productPrice] = data.split(" : ");
    result[productName] = productPrice;
  }
  let sortedResult = Object.keys(result)
    .sort()
    .reduce((obj, key) => {
      obj[key] = result[key];
      return obj;
    }, {});

  let letter = "";
  for (let [key, value] of Object.entries(sortedResult)) {
    let currentLetter = key[0];
    if (letter != currentLetter) {
      console.log(currentLetter);
    }
    console.log(`  ${key}: ${value}`);
    letter = currentLetter;
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
