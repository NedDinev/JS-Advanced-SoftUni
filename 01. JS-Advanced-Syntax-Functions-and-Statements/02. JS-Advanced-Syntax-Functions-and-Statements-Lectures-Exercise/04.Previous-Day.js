function previousDay(y, m, d) {
  let myDate = new Date(y, m - 1, d - 1);
  console.log(
    `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
  );
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
