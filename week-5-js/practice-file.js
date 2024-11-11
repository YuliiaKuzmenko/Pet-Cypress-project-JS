// Higher order functions: forEach, map, filter, reduce
/*1. forEach() - smart loop that is ideal for looping over array without having to specify where it starts, ends, and an action. But remember that you can't stop forEach, but you can stop for loop! In case it's really big and you need to stop it, for loop will be a better option

2. map() - same thing as forEach(), but it returns you a new array after looping and modifying one

3. filter() - ideal one to filter arrays. Example: find all string values with >4 characters

4. reduce() - best used for adding and doing math actions against all values in an array. Example: find a sum of all values in array */

// for ecah we can loop thought over the values in the array. We can not stop it
// if you know about limit count of values or if you know that you have to go thought all values, no matter what


//how to usee with arrays
[1, 3, 7, 10].forEach(num => { //call back function, possible to write forEach(function (i){} 
    console.log(num);
    // if(num === 1) break; /// not gonna work
    
});


//how to with variable
const numbers = [1, 3, 7, 10];

numbers.forEach(numb => {
    console.log(numb);
});

//we can't return anything
// const numberS = [1, 3, 7, 10];

// const newArray = numberS.forEach(num => num * 2);

// console.log(newArray); //RESULT: undefined

// With Map you can modify and result values
const numberS = [1, 3, 7, 10];

const newArray = numberS.map(num => num * 2);

console.log(newArray); //RESULT:[ 2, 6, 14, 20 ]


// U want to find all numbers that bigger that 4

const numbeRS = [1, 3, 7, 10];

const newArr = numbeRS.map(num => num * 2 > 4);

console.log(newArr); //RESULT:[ false, true, true, true ]  MAP says which is false/true (return every value, no matter if it match your search criteria or not)


//fiter is the best one to filter an array
const nuM = [1, 3, 7, 10];

const newArra = nuM.filter(num => num * 2 > 4);

console.log(newArra); //RESULT: [ 3, 7, 10 ]


// you need to find the longest one
const friends = ['Sergii', 'Slava', 'Natalie', 'Anna'];
const NewArray = friends.filter(friend => friend.length > 6); // friend.length > 6 - it's if statement

console.log(NewArray);

// if you want to check that any of these words contain 'a' letter

const friend = ['Sergii', 'Slava', 'Natalie', 'Anna'];
const NeWArray = friends.filter(friend => friend.includes ('a')); 

console.log(NeWArray);

//reduce for numbers
const Num = [3, 6, 8, 33, 88];
//how to find sum of numbers in the array
const arraY = Num.reduce((previosValue, currentValue) => previosValue + currentValue);
console.log(arraY);


const array = [[1,2], [3, 4], [5, 6], [44, 56], [77, 95]]
let result = 0;
for (let i = 0; i < array.length; i++){
    const sum = array[i][0] + array[i][1]
    if (sum > result){
        result = sum;
    }
}
console.log(result);