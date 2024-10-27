// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
// based on the input parameters.
// Usage examples:
// console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
// console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
// console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
// console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
// console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
// console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
// console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"


//SOLUTION 1

// function suggestMeal(time, diet){
//     if(time === 'morning' && diet === 'vegan'){
//         return "Fruit smoothie with oats";
//     }
//     else if (time == 'morning' && diet === "vegetarian"){
//         return "Vegetarian scrambled eggs with toast";
//     }
//     else if (time == 'morning' && diet === "omnivore"){
//         return "Bacon and eggs with toast";
//     } else if (time == 'afternoon' && diet === "vegan"){
//         return "Vegan burrito";
//     } else if (time == 'afternoon' && diet === "vegetarian"){
//         return  "Vegetarian pizza";
//     } else if (time == 'afternoon' && diet === "omnivore"){
//     return  "Chicken sandwich";
//     } else if (time == 'evening' && diet === "vegan"){
//     return  "Vegan lentil stew";
//     } else {
//         return "Invalid time of day";
//     }
//     }
// console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
// console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
// console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
// console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
// console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
// console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
// console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"



//OR
function suggestMeal(time, diet) {
    if (time === "morning") {
        if (diet === "vegan") {
            return "Fruit smoothie with oats";
        } else if (diet === "vegetarian") {
            return "Vegetarian scrambled eggs with toast";
        } else if (diet === "omnivore") {
            return "Bacon and eggs with toast";
        }
    } else if (time === "afternoon") {
        if (diet === "vegan") {
            return "Vegan burrito";
        } else if (diet === "vegetarian") {
            return "Vegetarian pizza";
        } else if (diet === "omnivore") {
            return "Chicken sandwich";
        }
    } else if (time === "evening") {
        if (diet === "vegan") {
            return "Vegan lentil stew";
        } else if (diet === "vegetarian") {
            return "Vegetarian pasta";
        } else if (diet === "omnivore") {
            return "Grilled salmon with vegetables";
        }
    } else {
        return "Invalid time of day";
    }
}

console.log(suggestMeal("morning", "vegan"));       // ➞ "Fruit smoothie with oats"
console.log(suggestMeal("morning", "vegetarian"));  // ➞ "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore"));    // ➞ "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan"));     // ➞ "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian")); // ➞ "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore"));  // ➞ "Chicken sandwich"
console.log(suggestMeal("evening", "vegan"));       // ➞ "Vegan lentil stew"
console.log(suggestMeal("evening", "vegetarian"));  // ➞ "Vegetarian pasta"
console.log(suggestMeal("evening", "omnivore"));    // ➞ "Grilled salmon with vegetables"