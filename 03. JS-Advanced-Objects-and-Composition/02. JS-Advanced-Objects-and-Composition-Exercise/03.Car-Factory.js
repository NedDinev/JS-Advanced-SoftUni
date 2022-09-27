function solve(input) {
  let car = input;

  if (car.power <= 90) {
    delete car.power;
    car.engine = Object.assign({}, { power: 90, volume: 1800 });
  } else if (car.power > 90 && car.power < 120) {
    delete car.power;
    car.engine = Object.assign({}, { power: 120, volume: 2400 });
  } else if (car.power > 120 && car.power <= 200) {
    delete car.power;
    car.engine = Object.assign({}, { power: 200, volume: 3500 });
  }

  if (car.carriage === "hatchback") {
    car.carriage = Object.assign(
      ({},
      {
        type: "hatchback",
        color: car.color,
      })
    );
    delete car.color;
  } else if (car.carriage === "coupe") {
    car.carriage = Object.assign(
      ({},
      {
        type: "coupe",
        color: car.color,
      })
    );
    delete car.color;
  }
  let nearestOddNum = car.wheelsize;
  if (car.wheelsize % 2 == 0) {
    nearestOddNum = 2 * Math.floor(car.wheelsize / 2) - 1;
  }

  let allWheels = Array(4).fill(nearestOddNum);

  car.wheels = allWheels;

  delete car.wheelsize;

  return car;
}

let input = {
  model: "Ferrari",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 21,
};
console.log(solve(input));
