function solve() {
  let arr = [];
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
    getPersons() {
      return arr.push(this);
    }
  }

  let anna = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  anna.getPersons();
  let softUni = new Person("SoftUni");
  softUni.getPersons();
  let stephan = new Person("Stephan", "Johnson", 25);
  stephan.getPersons();
  let gabriel = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
  gabriel.getPersons();
  return arr;
}

console.log(solve());
