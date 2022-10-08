function calculator() {
  let first;
  let second;
  let res;
  return {
    init: (num1, num2, result) => {
      first = document.querySelector(`${num1}`);
      second = document.querySelector(`${num2}`);
      res = document.querySelector(`${result}`);
      console.log(first, second, res);
    },
    add: () => {
      res.value = Number(first.value) + Number(second.value);
    },
    subtract: () => {
      res.value = Number(first.value) - Number(second.value);
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
