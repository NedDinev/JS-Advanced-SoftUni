function solution() {
  let str = "";

  return {
    append: function (string) {
      str += string;
    },
    removeStart: function (n) {
      n = Number(n);
      str = str.slice(n);
    },
    removeEnd: function (n) {
      n = Number(n);
      str = str.slice(0, -n);
    },
    print: function () {
      console.log(str);
    },
  };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
