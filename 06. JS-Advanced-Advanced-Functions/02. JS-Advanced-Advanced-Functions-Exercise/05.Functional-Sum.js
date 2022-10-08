function add(a) {
  let curry = function (b) {
    a += b;
    return curry;
  };
  curry.toString = function () {
    return a;
  };

  return curry;
}

console.log(add(1).toString());
console.log(add(1)(2).toString());
console.log(add(1)(2)(3).toString());
console.log(add(1)(2)(3)(4).toString());
