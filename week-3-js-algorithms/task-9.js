// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."

// Your code here

// compareAge("Joel", 36) // ➞ "Joel is older than me."
// compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
// compareAge("Lily", 28) // ➞ "Lily is oder than me."


function compareAge (name, age){
const myAge = 28;
if (name && age > myAge){
    return name + ' is older than me.';
}
else (name && age < myAge)
    return name + ' is older than me.';
}

console.log(compareAge("Joel", 36)); // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)) // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)) // ➞ "Lily is oder than me."