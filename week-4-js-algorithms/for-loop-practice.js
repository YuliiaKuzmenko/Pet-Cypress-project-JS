
//Hello word 5 times
for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

const friends = ["Sergii", "Alex"] //The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(friends.toString());

const friends1 = ["Sergii", "Alex"] //Join joins array elements into a string
console.log(friends1.join("*")); 

const friends2 = ["Sergii", "Alex"] //pop() pulling the last value from array
const lastValue = friends2.pop();
console.log(lastValue); 

const friends3 = ["Sergii", "Alex"] //push () when you want to add new values to array
friends.push("Joe")
console.log(friends3);

const friends4 = ["Sergii", "Alex"] //shift() is removing the first value
friends4.shift()
console.log(friends4);

const friends5 = ["Sergii", "Alex"] //unshift() add new element to an array (at the beginning)
friends5.unshift("Tom")
console.log(friends5);

const friends6 = ["Sergii", "Alex"] //delete to remobe values
delete friends6[0]
console.log(friends6);

const fruits = ["Banana", "Orange", "Apple", "Mango"]; //splice() method can be used to add new items to an array
fruits.splice(2, 0, "Lemon", "Kiwi"); //The first parameter (2) defines the position where new elements should be added (spliced in).

//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const fruit = ["Banana", "Orange", "Apple", "Mango"]; //The splice() method returns an array with the deleted items:
fruit.splice(2, 2, "Lemon", "Kiwi"); 

//The .slice() method in JavaScript returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.
//A shallow copy can be imagined as a photo of the original array. This photo (the new array) looks exactly like the original, but it’s a separate entity



//Exercise 1: Sum of Numbers
//Write a for loop that calculates the sum of numbers from 1 to 100.*/
sumNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumNumbers = sumNumbers + i;   
}
console.log("Sum of numbers from 1 to 100 is:", sumNumbers);



//Create a loop that runs from 0 to 9. 2

for (let index = 0; index < 10; index++) {
    console.log(index);
}


//Create a loop that runs through each item in the fruits array.3
const fruits1 = ["Apple", "Banana", "Orange"];
for(let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]);
}


//Create a loop that runs as long as i is less than 10.  4
let i = 0;
while
 (i < 10) {
  console.log("loop that runs as long as i is less than 10", i);
  i++
 }


//Create a loop that runs as long as i is less than 10, but increase i with 2 each time. 5

let index = 0;
while (index < 10)
{
  console.log(index);
  index = index + 2 ;
}


//Write a for loop that prints each number from 1 to 10.   6
let num = [];
for(index = 0; index < 11; index++){
console.log(num[index]);
}


//Exercise 7: Print Even Numbers from 1 to 20


//Exercise 8: Print Odd Numbers from 1 to 15

//Exercise 9: Sum of Numbers from 1 to 50


//Exercise 10: Multiplication Table for 7
//Write a for loop that prints the multiplication table for the number 7, from 7 x 1 up to 7 x 10.

//Exercise 11: Print the First 10 Fibonacci Numbers

//Exercise 12: Count Down from 10 to 1

//13 Write a for loop that prints the square of each number from 1 to 10. The square of a number 𝑛  n is  n×n.



//14 Print Multiples of 3 up to 30

//Exercise 15: Calculate the Product of Numbers from 1 to 5



//16Print the Sum of Even Numbers from 1 to 20

//Exercise 17: Double Each Element in an Array


//Exercise 18: Find the Maximum Number in an Array


//Exercise 19: Count Occurrences of a Specific Number in an Array



//Exercise 20: Reverse an Array


