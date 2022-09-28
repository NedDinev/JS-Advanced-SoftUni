function colorize() {
  let allTd = document.querySelectorAll("table tr ");
  let count = 0;
  for (let td of allTd) {
    count++;
    if (count % 2 == 0) {
      td.style.backgroundColor = "Teal";
    }
  }
}
