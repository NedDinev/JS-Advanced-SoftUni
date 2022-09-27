function solve(input) {
  let worker = input;

  if (worker.dizziness === true) {
    let requiredWater = worker.experience * worker.weight * 0.1;
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
  }
  return worker;
}
let workerData = {
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
};
let func = solve(workerData);
console.log(func);
