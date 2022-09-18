function equblNeighbors(brgs) {
  let counter = 0;

  for (let a = 0; a < brgs.length - 1; a++) {
    for (let b = 1; b < brgs[a].length; b++) {
      if (brgs[a][b] == brgs[a + 1][b]) {
        counter++;
      }

      if (brgs[a][b] == brgs[a][b - 1]) {
        counter++;
      }
    }
  }

  for (let a = 0; a < brgs[brgs.length - 1].length; a++) {
    if (brgs[brgs.length - 1][a] == brgs[brgs.length - 1][a + 1]) {
      counter++;
    }
  }

  for (let a = 0; a < brgs.length - 1; a++) {
    if (brgs[a][0] == brgs[a + 1][0]) {
      counter++;
    }
  }

  console.log(counter);
}

equblNeighbors([
  ["1", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"],
]);
