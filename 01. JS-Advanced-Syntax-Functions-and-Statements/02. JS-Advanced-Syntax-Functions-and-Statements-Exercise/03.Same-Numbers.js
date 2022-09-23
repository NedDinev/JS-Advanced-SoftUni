function sameNumbers(input) {
  let nums = String(input);

  let result = false;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[0] == nums[i]) {
      result = true;
    } else {
      result = false;
    }
    sum += Number(nums[i]);
  }
  console.log(result);
  console.log(sum);
}
sameNumbers(1234);
