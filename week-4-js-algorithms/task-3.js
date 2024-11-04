// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
// Usage examples:
// console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
// console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
// console.log(findDollarStrings(["no", "dollars", "here"])); // []

function findDollarStrings(strings) {
    let result = []; 
    
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes("$")) {
            result.push(strings[i]);
        }
    }

    return result; 
}

// Usage examples
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"]));   // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []