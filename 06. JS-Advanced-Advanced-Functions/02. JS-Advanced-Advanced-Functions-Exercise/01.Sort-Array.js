function solve(nums, cmd) {
  let commands = {
    asc: (nums) => nums.sort((a, b) => a - b),
    desc: (nums) => nums.sort((a, b) => b - a),
  };
  return commands[cmd](nums);
}
console.log(solve([14, 7, 17, 6, 8], "desc"));
