function cookingByNumbers(
  firstInput,
  secondInput,
  thirdInput,
  fourthInput,
  fifthInput,
  sixthInput
) {
  let num = Number(firstInput);
  let commands = [secondInput, thirdInput, fourthInput, fifthInput, sixthInput];

  commands.forEach((currCommand) => {
    switch (currCommand) {
      case "chop":
        num = num / 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num);
        console.log(num);
        break;
      case "spice":
        num = num + 1;
        console.log(num);
        break;
      case "bake":
        num = num * 3;
        console.log(num);
        break;
      case "fillet":
        num = num - num * 0.2;
        console.log(num);
        break;
      default:
        break;
    }
  });
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("------------------------------");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
