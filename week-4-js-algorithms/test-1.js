//
const number = [10, 35, 1, 12, 60, 150, 63];
//find nums which if multiply by 3 will be large than 50
let result = [];

for (index = 0; index < number.length; index++) {
  if (number[index] * 3 > 50) {
    result.push(number[index]);
  }
}

console.log(result);

const num = [34, 4, 67, 9, 66, 82, 40, 3];
let lagnums = [];
//output all numbers that are large than 50

for (let index = 0; index < num.length; index++) {
  if (num[index] > 50) console.log(num[index]);

  // console.log(index); // 0 1 2 3 4 5 6 7
  // console.log(index,num[index])// will be index and numbers
}
// console.log(num[0]) ///// first number in array
// console.log(num[5]) //82

//output every num that combined with next num > 20
const nums = [2, 7, 44, 33, 122, 58, 5, 2];

for (let index = 0; index < nums.length; index++) {
  if (num[index] + num[index + 1] > 20) {
    console.log(nums[index]);
  }
}

const array = [11, 44, 66, 999, 1, 8];
let largeNumber = 0;
//output the largest number
for (let i = 0; i < array.length; i++) {
  if (array[i] > largeNumber) 
    largeNumber = array[i];
}
console.log(largeNumber);



const arrayNames = ['Yuliia', 'Dima', 'Annnnnnnnnn', 'Sergii']

let longestString = "";
let longestNameIndex = 0;

for (let i = 0; i < arrayNames.length; i++) {
    if(arrayNames[i].length > longestString.length){
        longestString = arrayNames[i]
        longestNameIndex = i

    }
    
}
console.log(longestString, longestNameIndex);



const str = "safjldaskjcoffeeasfjsalkfjadslcoffeedsasldfjcoffeadaa";

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}