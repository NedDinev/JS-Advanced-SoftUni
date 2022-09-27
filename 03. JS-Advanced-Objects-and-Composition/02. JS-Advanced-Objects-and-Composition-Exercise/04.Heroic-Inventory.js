function solve(input) {
  let heroes = [];
  for (let data of input) {
    let [name, level, items] = data.split(" / ");
    items = items ? items.split(", ") : [];
    level = Number(level);
    heroes.push({
      name,
      level,
      items: items,
    });
  }
  return JSON.stringify(heroes);
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
