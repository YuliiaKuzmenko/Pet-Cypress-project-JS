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


//Task 18: Sum of All Elements in an Array
let numbers = [1, 2, 3, 4, 5]; 
let sum = 0
for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];//sum += numbers[index];
    
}
console.log(sum);


//Task 19: Find the Minimum and Maximum Elements in an Array
let numbr = [10, 5, 20, 3, 15]; // Minimum: 3, Maximum: 20
let minNum = numbr[0];
let maxNum = numbr[0];
for (let i = 1; i < numbr.length; i++) {
    if(numbr[i] < minNum) {
        minNum = numbr[i];
    }
    
    if(numbr[i] > maxNum){
        maxNum = numbr[i];
    }

}
console.log("Minimum number is:", minNum); // Should output 3
console.log("Maximum number is:", maxNum); // Should output 20


// Count Odd and Even Numbers in an Array
let numberS = [1, 2, 3, 4, 5, 6]; // Odd count: 3, Even count: 3
let countOdd = 0;
let countEven = 0;

for (let i = 0; i < numberS.length; i++) {
    if(numberS[i] % 2 !== 0){
        countOdd = countOdd + 1;
    }
    else{
        countEven = countEven + 1 ;
    }
}
console.log(countOdd); 
console.log(countEven); 


//Task 21: Reverse Each Word in a Sentence
let sentence = "Hello World";
let words = sentence.split(" "); // Split the sentence into an array of words
let resulT = "";

for (let i = 0; i < words.length; i++) {
    let reversedWord = ""; // Variable to store the reversed word
    for (let j = words[i].length - 1; j >= 0; j--) { // Reverse each word
        reversedWord += words[i][j];
    }
    resulT += reversedWord + " "; // Add the reversed word to the result with a space
}

resulT = resulT.trim(); // Remove the trailing space
console.log(resulT); // Should output "olleH dlroW"

