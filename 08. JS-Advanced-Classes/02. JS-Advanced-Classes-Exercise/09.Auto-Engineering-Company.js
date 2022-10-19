function autoEngineering(input) {
  let companies = {};
  input.forEach((el) => {
    let [company, model, production] = el.split(" | ");
    production = Number(production);
    if (companies.hasOwnProperty(company)) {
      if (!companies[company].hasOwnProperty(model)) {
        companies[company][model] = production;
      } else {
        companies[company][model] += production;
      }
    } else {
      companies[company] = {
        [model]: production,
      };
    }
  });
  for (let [key, value] of Object.entries(companies)) {
    console.log(key);
    for (let [vKey, vValue] of Object.entries(value)) {
      console.log(`###${vKey} -> ${vValue}`);
    }
  }
}
autoEngineering([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
