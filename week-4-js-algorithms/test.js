/*
Exercise 1: Sum of Numbers
Write a for loop that calculates the sum of numbers from 1 to 100.*/


// let sum = 0;
// for(let index = 1; index <= 100; index++) {
//     sum = sum + index;
// }
// console.log("Sum of numbers from 1 to 100 is:", sum);



//Create a loop that runs from 0 to 9.
let i;
for(i = 0; i < 10; i++){
    console.log(i);
}

//Create a loop that runs through each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for(x of fruits){
    console.log(x);
}

//Create a loop that runs as long as i is less than 10.

let a = 0;
 (a < 10) 
 {
  console.log(i);
  a++
}

//Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
let index = 0;
while (index < 10)
{
  console.log(index);
  index = index + 2 ;
}


//Write a for loop that prints each number from 1 to 10.

let num = [];
for(let i = 1; i <= 10; i++){
    
    console.log(i);
}

//Exercise 2: Print Even Numbers from 1 to 20
for(let i = 1; i <= 20; i++){
 if(i % 2 === 0){ /// Check if the number is even
    console.log(i);
 }
}

//Exercise 3: Print Odd Numbers from 1 to 15
for(i = 1; i <= 15; i++){
    if(i % 2 !== 0){ // Check if the number is odd
        console.log(i);
    }
}

//Exercise 4: Sum of Numbers from 1 to 50
let sum = 0;
for(i = 1; i <= 50; i++){
   sum += i
}
console.log("Sum of numbers from 1 to 50 is:", sum);

//Exercise 5: Multiplication Table for 7
//Write a for loop that prints the multiplication table for the number 7, from 7 x 1 up to 7 x 10.
for(i = 1; i <= 10; i++){
    let result = 7 * i;
    console.log(`7 x ${i} = ${result}`);
}

//Exercise 6: Print the First 10 Fibonacci Numbers
let Fubonacci_num1 = 0;
let Fubonacci_num2 = 1;

for(i = 0; i < 10; i++ ){
    console.log(Fubonacci_num1);
    let next = Fubonacci_num1 + Fubonacci_num2;
    Fubonacci_num1 = Fubonacci_num2;
    Fubonacci_num2 = next;
}

//Exercise 7: Count Down from 10 to 1
for(i = 10; i >= 1; i--){
    console.log(i);

}

//Write a for loop that prints the square of each number from 1 to 10. The square of a number 𝑛  n is  n×n.

for (let n = 1; n <= 10; n++) {
    let number = n * n; // Calculate the square of n
    console.log(number); // Print each square
}

//Print Multiples of 3 up to 30
for (let a = 1; a <= 30; a++) {
    if(a % 3 === 0) {
        console.log(a);
    }
}

//Exercise 10: Calculate the Product of Numbers from 1 to 5
let product = 1;
for(let i = 1; i <= 5; i++){
    product = product * i; // product *= i; // Multiply product by i
    console.log(product);
}


//Print the Sum of Even Numbers from 1 to 20
let sumpr = 0;
for(i = 1; i<= 20; i++){
    if(i % 2 === 0)
    sumpr += i;
}
console.log(sumpr);

//Exercise 13: Double Each Element in an Array

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    let doubled = numbers[i] * 2; // Multiply each element by 2
    console.log(doubled); // Print the doubled value
}

//Exercise 14: Find the Maximum Number in an Array
let numr = [10, 5, 8, 20, 15];
let maxnum = numr[0]; // Initialize maxNumber with the first element

for(let i = 1; i < numr.length; i++) {

    if (numr[i] > maxnum) {
        maxnum = numr[i]; // Update maxNumber if a larger number is found
    }
}

console.log("Maximum number is:", maxnum); // Print the maximum number


//Exercise 15: Count Occurrences of a Specific Number in an Array
let array1 = [1, 2, 3, 4, 2, 5, 2];
let specificNum = 2;
let count = 0; // Initialize the counter
for( let i = 0; i < array1.length; i++){
    if (array1[i] === specificNum) {
        count++; // Increment the counter if the number matches
    }
}

console.log("The number", specificNum, "occurs", count, "times in the array."); //


//Exercise 16: Reverse an Array

array3 = [1, 2, 3, 4, 5];
let reversedArray = []; 
for(let i = array3.length -1; i >= 0; i--){
    reversedArray.push(array3[i]); // Add each element to the reversedArray
}

console.log("Reversed array:", reversedArray); // Print the reversed array