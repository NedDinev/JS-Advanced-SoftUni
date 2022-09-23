function solve(input) {
  let result = input.sort((a, b) => a.localeCompare(b));

  result.forEach((name, num) => console.log(`${num + 1}.${name}`));
}
solve(["John", "Bob", "Christina", "Ema"]);
