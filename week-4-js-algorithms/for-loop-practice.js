
// // //Hello word 5 times
// // for (let i = 0; i < 5; i++) {
// //     console.log('Hello World', i);
// // }

// const friends = ["Sergii", "Alex"] //The JavaScript method toString() converts an array to a string of (comma separated) array values.
// console.log(friends.toString());

// // const friends1 = ["Sergii", "Alex"] //Join joins array elements into a string
// // console.log(friends1.join("*")); 

// // const friends2 = ["Sergii", "Alex"] //pop() pulling the last value from array
// // const lastValue = friends2.pop();
// // console.log(lastValue); 

// // const friends3 = ["Sergii", "Alex"] //push () when you want to add new values to array
// // friends.push("Joe")
// // console.log(friends3);

// // const friends4 = ["Sergii", "Alex"] //shift() is removing the first value
// // friends4.shift()
// // console.log(friends4);

// // const friends5 = ["Sergii", "Alex"] //unshift() add new element to an array (at the beginning)
// // friends5.unshift("Tom")
// // console.log(friends5);

// // const friends6 = ["Sergii", "Alex"] //delete to remobe values
// // delete friends6[0]
// // console.log(friends6);

// // const fruits = ["Banana", "Orange", "Apple", "Mango"]; //splice() method can be used to add new items to an array
// // fruits.splice(2, 0, "Lemon", "Kiwi"); //The first parameter (2) defines the position where new elements should be added (spliced in).

// // //The second parameter (0) defines how many elements should be removed.
// // //The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// // const fruit = ["Banana", "Orange", "Apple", "Mango"]; //The splice() method returns an array with the deleted items:
// // fruit.splice(2, 2, "Lemon", "Kiwi"); 

// // //The .slice() method in JavaScript returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.
// // //A shallow copy can be imagined as a photo of the original array. This photo (the new array) looks exactly like the original, but it’s a separate entity



// // //Exercise 1: Sum of Numbers
// // //Write a for loop that calculates the sum of numbers from 1 to 100.*/
// let sum = 0;
// for(let i = 0; i <= 100; i++){
// sum = sum + i;
// }
// console.log(sum);


// // //Create a loop that runs from 0 to 9. 
// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }


// // //Create a loop that runs through each item in the fruits array.3
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
    
// }


// // //Create a loop that runs as long as i is less than 10.  4
// let i = 0;
// while
//  (i < 10) {
//   console.log("loop that runs as long as i is less than 10", i);
//   i++
//  }


// // //Create a loop that runs as long as i is less than 10, but increase i with 2 each time. 5

// let index = 0;
// while (index < 10)
// {
//   console.log(index);
//   index = index + 2 ;
// }


// //Write a for loop that prints each number from 1 to 10.   6
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }

// //Exercise 7: Print Even Numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     if(i % 2 === 0)
//     console.log(i);
    
// }


// //Exercise 8: Print Odd Numbers from 1 to 15
// for (let i = 1; i <= 15; i++) {
//     if(i % 2 !== 0)
//         console.log(i);
    
// }

// //Exercise 9: Sum of Numbers from 1 to 50
// sumNum = 0;
// for (let i = 1; i < 50; i++) {
//     sum = sum + i;
  
// }
// console.log(sum);


// //Exercise 11: Print the First 10 Fibonacci Numbers
// let Fubonacci_num1 = 0;
// let Fubonacci_num2 = 1;

// for(i = 0; i < 10; i++ ){
//     console.log(Fubonacci_num1);
//     let next = Fubonacci_num1 + Fubonacci_num2;
//     Fubonacci_num1 = Fubonacci_num2;
//     Fubonacci_num2 = next;
// }

// //Exercise 12: Count Down from 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
    
// }

// //16Print the Sum of Even Numbers from 1 to 20
// evenNum = 0;
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 === 0)
//         evenNum = evenNum + i;
    
// }
// console.log(evenNum);

// //Exercise 17: Double Each Element in an Array
// const array = [5,7,9,44];
// for (let i = 0; i < array.length; i++) {
//     let doubleNum = array[i] * 2;
//     console.log(doubleNum);
// }


// //Exercise 18: Find the Maximum Number in an Array
// let arraY = [4,6,33,22,4];
// let maxNum = arraY[0];
// for (let i = 1; i < arraY.length; i++) {
//     if(arraY[i] > maxNum){
//         maxNum = arraY[i];
//     }
    
//     console.log("Maximum number is:", maxNum); // Print the maximum number
// }

// //Exercise 19: Count Occurrences of a Specific Number in an Array



// //Exercise 20: Reverse an Array

// // const number = [10, 35, 1, 12, 60, 150, 63];
// //find nums which if multiply by 3 will be large than 50


// // const num = [34, 4, 67, 9, 66, 82, 40, 3];
// //output all numbers that are large than 50


// //output every num that combined with next num > 20
// // const nums = [2, 7, 44, 33, 122, 58, 5, 2];


// //output the largest number
// // const array = [11, 44, 66, 999, 1, 8];

// //Sum of All Elements in an Array

// // ////Task 19: Find the Minimum and Maximum Elements in an Array

// // // Count Odd and Even Numbers in an Array

// // //Task 21: Reverse Each Word in a Sentence

// // // Challenge 1: Find the Longest String
// // // Write a function to find the longest string in the array.
// // // Usage examples:
// // // console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// // // console.log(findLongestString(["one", "two", "three"])); // "three"
// // // console.log(findLongestString(["1", "22", "333"])); // "333"

// function findLongestString(array) {
//     let result = array[0]

//     for (let i = 0; i < array.length; i++) {
//         const currentString = array[i];
//             if(currentString.length > result.length) {
//                 result = currentString
//         }
        
//     }
//     return result;
// }

// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"

// // Challenge 2: Find the Largest Number
// // Write a function to find the largest number in the array.

// smallest num
// function findSmallestNumber(array){
//     let smallestNum = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const currentNum = array[i];
//         if(smallestNum > currentNum){
//             smallestNum = currentNum;
//     }   
// }
//     return smallestNum;
// }

// // // Usage examples:
// console.log(findSmallestNumber([1, 2, 3, 4, 5])); // 5
// console.log(findSmallestNumber([10, 20, 30, 40, 50])); // 50
// console.log(findSmallestNumber([-1, -2, -3, -4, -5])); // -1

//     }
    //     let result = array [0]
    
    //     for (let i = 0; i < array.length; i++) {
    //         const currentNumber = array[i];
    //         if(currentNumber > result){
    //           result = currentNumber;
    //         }
    //     }
    //     return result
    
    // }
// // Usage examples:
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
// console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
// console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1


// // Challenge 3: Find Strings with Dollar Sign
// // Write a function to find all strings that include a $ sign in the array.
// function findDollarStrings(array){
//     let dollarSign = [];
//     for (let i = 0; i < array.length; i++) {
//         const currentStr = array[i];
//         if(currentStr.includes("$")){
//             dollarSign.push(currentStr)
//         }
//     } 
//     return dollarSign;  
// }

// function findDollarStrings(array){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         const currentString = array[i];
//         if(currentString.includes("$")){
//             result.push(currentString)
//         }
        
//     }
//     return result;
// // }
// console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
// console.log(findDollarStrings(["$", "$$", "$$$"]));   // ["$", "$$", "$$$"]
// console.log(findDollarStrings(["no", "dollars", "here"])); // []
// // Usage examples:


// // Challenge 4: Find Numbers Greater than Ten
// // Write a function to find all numbers that are larger than 10 in the array.
// // Usage examples:
// // console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
// // console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
// // console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]

// NumGreaterTen = [];
// function findNumbersGreaterThanTen(array){
//     for (let i = 0; i < array.length; i++) {
//         const currentNum = array[i];
//         if(currentNum > 10){ 
//             NumGreaterTen.push(currentNum);
//         }   
//     }
//     return NumGreaterTen
// }


// function findNumbersGreaterThanTen(array){
//     let result = [];

//     for (let index = 0; index < array.length; index++) {
//         const currentNum = array[index];
//         if(currentNum > 10) {
//             result.push(currentNum)
//         }
        
//     }
//     return result
//   }
// console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
// // Challenge 5: Sum of Numbers
// // Write a function to find the sum of all numbers in the array.
// // Usage examples:
// // console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
// // console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
// // console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15

// // Challenge 6: Factorial a Number
// // Write a function that takes a number as an argument and returns the factorial of that number.
// // Usage examples:
// // console.log(factorial(5)); // 120
// // console.log(factorial(0)); // 1
// // console.log(factorial(1)); // 1
// // console.log(factorial(10)); // 3628800


// // Challenge 7: Convert Numbers to Strings
// // Write a function that converts all numbers to strings.
// // Usage examples:
// // console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
// // console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
// // console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]

// // Challenge 8: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
// // instead of the number and for the multiples of five print "Buzz". For numbers which are multiples
// // of both three and five print "FizzBuzz".
// // No need for permutations as there are no arguments to this function. Check the printed output.

// // Challenge 9: Find the Longest Word in a String
// // Write a function that returns the length of the longest word in the provided sentence.
// // Usage examples:
// // console.log(findLongestWord('The quick brown fox')); // 5
// // console.log(findLongestWord('Hello world')); // 5
// // console.log(findLongestWord('')); // 0
// // console.log(findLongestWord('OneWord')); // 7


// // Challenge 10: Palindrome Checker
// // Write a function that checks whether a passed string is a palindrome or not.
// // A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// // Usage examples:
// // console.log(palindrome('racecar')); // true
// // console.log(palindrome('hello')); // false
// // console.log(palindrome('a')); // true
// // console.log(palindrome('madam')); // true