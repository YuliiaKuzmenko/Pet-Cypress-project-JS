
// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// Usage examples:
// console.log(palindrome('racecar')); // true
// console.log(palindrome('hello')); // false
// console.log(palindrome('a')); // true
// console.log(palindrome('madam')); // true

function palindrome(str) {
    
    str = str.toLowerCase(); 
  
    // Reverse the string
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]; 
  
    
    return str === reversedStr; 
  }
  
  // Usage examples:
  console.log(palindrome('racecar')); // true
  console.log(palindrome('hello')); // false
  console.log(palindrome('a')); // true
  console.log(palindrome('madam')); // true
}