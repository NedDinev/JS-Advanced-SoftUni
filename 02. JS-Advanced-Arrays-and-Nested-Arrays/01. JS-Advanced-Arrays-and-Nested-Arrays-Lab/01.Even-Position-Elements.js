function evenPositionEl(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      output += input[i] + " ";
    }
  }
  console.log(output);
}
evenPositionEl(["20", "30", "40", "50", "60"]);
