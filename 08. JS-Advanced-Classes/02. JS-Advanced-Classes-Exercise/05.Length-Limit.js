class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }
  increase(len) {
    this.innerLength += len;
  }

  decrease(len) {
    if (this.innerLength - len < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= len;
    }
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.substring(0, this.innerLength) + "...";
    } else {
      return this.innerString;
    }
  }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString());
