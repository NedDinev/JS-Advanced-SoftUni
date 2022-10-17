class List {
  constructor() {
    this.numbers = [];
    this.size = this.numbers.length;
  }
  add(num) {
    if (typeof num != "number") {
      throw new Error("Not a valid number");
    }
    this.numbers.push(num);
    this.numbers.sort((a, b) => a - b);
    this.size++;
    return;
  }
  remove(index) {
    if (typeof index != "number" || index >= this.size || index < 0) {
      throw new Error("Invalid index!");
    }
    this.numbers.splice(index, 1);
    this.size--;
    return;
  }
  get(index) {
    if (typeof index != "number" || index >= this.size || index < 0) {
      throw new Error("Invalid index!");
    }
    return this.numbers[index];
  }
}

let list = new List();
console.log(list.add(5));
console.log(list.add(6));
console.log(list.add(7));
console.log(list.get(1));
console.log(list.remove(1));
console.log(list.get(1));
console.log(list.size);
