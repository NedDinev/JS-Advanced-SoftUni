function solve(input) {
  let obj = {};

  for (let data of input) {
    let [townName, productName, productPrice] = data.split(" | ");
    productPrice = Number(productPrice);
    if (obj.hasOwnProperty(productName)) {
      if (obj[productName].price > productPrice) {
        obj[productName].price = productPrice;
        obj[productName].town = townName;
      }
    } else {
      obj[productName] = {
        price: productPrice,
        town: townName,
      };
    }
  }

  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value.price} (${value.town})`);
  }
}
solve([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
