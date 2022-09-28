function calc() {
  let a = document.getElementById("num1");
  let b = document.getElementById("num2");
  let sum = document.getElementById("sum");

  let result = Number(a.value) + Number(b.value);
  sum.value = result;
}
