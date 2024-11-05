// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"



// function findLongestString(array){
//     let longestString = "";
// for(let index of array) { //for of to "value of object"
//     if(index.length > longestString.length){
//         longestString = index;
//     }
// }
// return longestString
// }

// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"


function findLongestString(array) {
    let result = array[0]

    for (let i = 1; i < array.length; i++) {
        const currentString = array[i];{
            if(currentString.length > result.length) {
                result = currentString
            }
        }
        
    }
    return result;
}
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"