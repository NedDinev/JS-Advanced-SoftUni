function timeToWalk(firstInput, secondInput, thirdInput) {
  let distanceInMeters = firstInput * secondInput;
  let speedInSec = thirdInput / 3.6;
  let breaks = Math.floor(distanceInMeters / 500) * 60;
  let time = Math.round(distanceInMeters / speedInSec + breaks);

  let final = new Date(time * 1000).toISOString().slice(11, 19);
  console.log(final);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
