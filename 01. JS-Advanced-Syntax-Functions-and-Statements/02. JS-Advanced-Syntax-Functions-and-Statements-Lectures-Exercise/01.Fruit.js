function fruit(firstInput, secondInput, thirdInput) {
  let name = firstInput;
  let weight = Number(secondInput) * 0.001;
  let money = Number(thirdInput) * weight;
  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`
  );
}
fruit("orange", 2500, 1.8);
