//find all vowels in a string

function checkVowels(str) {
    let testVowel = "aoeiuAOEIU";
    let result = [];

    for(let i = 0; i < str.length; i++) {
        if(testVowel.includes(str[i])) {
            result.push(str[i])
        }
    }
    return result;
}

console.log(checkVowels("Hello world!"));