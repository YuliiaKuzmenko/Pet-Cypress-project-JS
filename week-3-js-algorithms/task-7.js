// Create the function. It should accept two string parameters and return the longer one
// Your code here
  
// console.log(longerString('codemify', 'test')) // codemify
// console.log(longerString('automation', 'coding')) // automation
// console.log(longerString('automation', 'the codemify')) // the codemify


// function findBiggerNumber(firstNum, secondNum) {
//     if(firstNum > secondNum){
//       return firstNum;
//     }
//     else {
//         return secondNum;
//     }
//   }

function longerString(a, b) {
    if(a.length > b.length){
        return a;
    }
    else 
        return b;
    }

    
  
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify