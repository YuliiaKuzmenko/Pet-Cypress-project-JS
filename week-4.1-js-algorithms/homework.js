// Challenge 1: Square All Numbers
// Write a function that takes an array of numbers and returns a new array with each number squared.
// Usage examples:
// console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
// console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]

function squareNumbers(array){
    let NewNum = [];
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i]
            NewNum.push(currentNum * currentNum);
            
    }
    return NewNum;
}

console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]

// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.
// Usage examples:
// console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
// console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"

function concatenateElements(arrays){
    let ArrayToOneStr = "";
    ArrayToOneStr = arrays.join("");
    return ArrayToOneStr
    }
   
console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"


// Challenge 3: Reverse Array
// Write a function that takes an array and returns a new array with the elements in reverse order.
// Usage examples:
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

function reverseArray(elements){
    let newArray = [];
    for (let i = elements.length -1; i>=0; i--) {
        newArray.push(elements[i]);
    
    }
    return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains that element.
// Usage examples:
// console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
// console.log(containsElement(["a", "b", "c", "d"], "e")); // false


function containsElement(Array, element){
    for (let i = 0; i < Array.length; i++) {
        if(Array[i] === element){
            return true;
        }
    }
    return false; 
    }

console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement(["a", "b", "c", "d"], "e")); // false

// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.
// Usage examples:
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
// console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]v

function removeDuplicates(arr){
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!newArr.includes(element)) {  // Check if newArr already contains the element
            newArr.push(element);  // Add the element if it's not already in newArr
        } 
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]
  

// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.
// Usage examples:
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

function calculateAverage(ArrNum){
    let SumNum = 0;
    for (let i = 0; i < ArrNum.length; i++) {
        const currentNumber = ArrNum[i];
        SumNum += currentNumber;
        
    }
    return SumNum / ArrNum.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

// Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Usage examples:
// console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
// console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

function findOddNumbers(ArrNumbers){
    let OddNum = [];
    for (let i = 0; i < ArrNumbers.length; i++) {
        const currentValue = ArrNumbers[i];
        if(currentValue % 2 !== 0)
            OddNum.push(currentValue);
    }
    return OddNum;
}
console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

// Challenge 8: Find Even Numbers
// Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Usage examples:
// console.log(findEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
// console.log(findEvenNumbers([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]

function findEvenNumbers(Arr){
    let EvenNum = [];
    for (let i = 0; i < Arr.length; i++) {
        let currentNum = Arr[i];
        if (currentNum % 2 === 0){
            EvenNum.push(currentNum); // Add the even number to the array
            
        }
        
    }
    return EvenNum
}
console.log(findEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(findEvenNumbers([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]