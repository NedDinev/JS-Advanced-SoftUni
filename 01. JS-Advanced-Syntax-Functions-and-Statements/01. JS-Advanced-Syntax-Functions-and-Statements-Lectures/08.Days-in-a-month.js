function daysInAMonth(m, y) {
  let d = new Date(y, m, 0).getDate();

  console.log(d);
}
daysInAMonth(2, 2021);
