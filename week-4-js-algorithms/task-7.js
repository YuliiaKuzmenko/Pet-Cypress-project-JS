// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.
// Usage examples:
// console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
// console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
// console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]

function convertNumbersToStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].toString());
    }
    return result;
  }
  
  console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
  console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
  console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]
  