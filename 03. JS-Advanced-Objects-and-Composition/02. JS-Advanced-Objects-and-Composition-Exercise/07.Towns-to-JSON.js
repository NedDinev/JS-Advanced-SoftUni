function solve(input) {
  let titles = input.shift();
  titles = titles.substr(2, titles.length - 4).split(" | ");

  let result = [];
  for (let data of input) {
    data = data.substr(2, data.length - 4);
    let [currTown, lat, long] = data.split(" | ");

    lat = Number(lat);
    long = Number(long);
    let obj = {};
    obj[titles[0]] = currTown;
    obj[titles[1]] = Number(lat.toFixed(2));
    obj[titles[2]] = Number(long.toFixed(2));
    result.push(obj);
  }
  console.log(JSON.stringify(result));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
