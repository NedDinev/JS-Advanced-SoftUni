function squareOfStars(input) {
  let n = Number(input);

  let output = "";
  for (let i = 0; i < n; i++) {
    for (let a = 0; a < n; a++) {
      output += "* ";
    }
    output += `\n`;
  }
  console.log(output);
}
squareOfStars(2);
