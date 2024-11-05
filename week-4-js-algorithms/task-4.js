// Challenge 4: Find Numbers Greater than Ten
// Write a function to find all numbers that are larger than 10 in the array.
// Usage examples:
// console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
// console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
// console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]


// function findNumbersGreaterThanTen(arrNumbers) {
//     let largeTennum = [];
//     for (let i = 0; i < arrNumbers.length; i++) {
//       if (arrNumbers[i] > 10) {
//         largeTennum.push(arrNumbers[i]);
//       }
//     }
//     return largeTennum;
//   }

//   console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
//   console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
//   console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]


  function findNumbersGreaterThanTen(array){
    let result = [];

    for (let index = 0; index < array.length; index++) {
        const currentNum = array[index];
        if(currentNum > 10) {
            result.push(currentNum)
        }
        
    }
    return result
  }
  console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
  console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
  console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]