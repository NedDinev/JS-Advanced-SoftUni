class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }
  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  plus(num) {
    if (typeof num === "object") {
      num = num.value;
    }
    if (String(num).includes("0X") || String(num).includes("0x")) {
      num = parseInt(num, 16);
    }
    return new Hex(this.value + num);
  }
  minus(num) {
    if (typeof num === "object") {
      num = num.value;
    }
    if (String(num).includes("0X") || String(num).includes("0x")) {
      num = parseInt(num, 16);
    }
    return new Hex(this.value - num);
  }
  parse(str) {
    return parseInt(str, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
