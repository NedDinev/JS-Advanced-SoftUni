function sumTable() {
  let allTd = document.querySelectorAll("table td");
  let count = 0;
  let result = document.getElementById("sum");
  let sum = [];
  for (let td of allTd) {
    count++;
    if (count % 2 == 0) {
      sum.push(Number(td.textContent));
    }
  }
  sum.pop();
  let total = 0;
  for (let cost of sum) {
    total += cost;
  }
  result.textContent = total;
}
