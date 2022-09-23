function cityTaxes(name, population, treasury) {
  let record = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes,
    applyGrowth,
    applyRecession,
  };
  function collectTaxes() {
    record.treasury += record.population * record.taxRate;
  }

  function applyGrowth(percentage) {
    record.population += (record.population * percentage) / 100;
  }
  function applyRecession(percentage) {
    record.treasury -= (record.treasury * percentage) / 100;
  }

  return record;
}
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
