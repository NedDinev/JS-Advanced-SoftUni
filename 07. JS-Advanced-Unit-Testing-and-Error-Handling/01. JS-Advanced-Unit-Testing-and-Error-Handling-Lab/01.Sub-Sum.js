function subSum(arr, startIndex, endIndex) {
  function sum(inputArr, from, to) {
    let result = 0;
    for (let i = from; i <= to; i++) {
      result += Number(inputArr[i]);
    }
    return result;
  }
  function onlyNumbers(array) {
    return array.every((element) => {
      return !isNaN(element);
    });
  }
  if (!Array.isArray(arr) || !onlyNumbers(arr)) {
    return NaN;
  } else if (startIndex < 0) {
    startIndex = 0;
    return sum(arr, startIndex, endIndex);
  } else if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
    return sum(arr, startIndex, endIndex);
  }
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, "twenty", 30, 40], 0, 2);
subSum([], 1, 2);
subSum("text", 0, 2);
