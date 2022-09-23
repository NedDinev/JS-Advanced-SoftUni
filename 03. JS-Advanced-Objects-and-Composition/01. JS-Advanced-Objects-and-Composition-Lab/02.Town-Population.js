function townPopulation(input) {
  let townsList = {};
  for (let info of input) {
    let [town, population] = info.split(" <-> ");
    population = Number(population);
    if (townsList.hasOwnProperty(town)) {
      townsList[town] += population;
    } else {
      townsList[town] = population;
    }
  }

  for (let [key, value] of Object.entries(townsList)) {
    console.log(`${key} : ${value}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
