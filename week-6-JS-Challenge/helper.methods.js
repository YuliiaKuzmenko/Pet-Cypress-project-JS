// Challenge 1: Filter Matches by Location and Status
// Write a function to find all matches where "locationlvl1" = "Germany" and "status" = "canceled" in the array.
// The function should return an array of "matchId"s of the matches.


class Helpers {
    filterMatchesByLocationAndStatus(response) {
    let matches = [];
   
    response.matches.filter((match) => {
        if(match.locationlvl1 === "Germany" && match.status === "canceled") {
            matches.push(match.matchId);
        }
    });

    return matches;
}

// Challenge 2: Filter Matches by Coating and Shower Availability
// Write a function to find all matches where "coating" = "Main.artificialGrass" and "isShower" = true in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByCoatingAndShower(response)); // Returns: ["10-015"]

    filterMatchesByCoatingAndShower(response) {
        let matches = [];

        response.matches.filter((match) => {
            if(match.matchInfo.coating === "Main.artificialGrass" && match.matchInfo.isShower === true){
                matches.push(match.matchId);
            }
        });
        return matches;
    }

// Challenge 3: Filter Matches by Location and Price
// Write a function to find all matches where "locationlvl2" = "Berlin" and "price" > 0 in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByLocationAndPrice(response)); // Returns: ["10-015"]
        
    
    filterMatchesByLocationAndPrice(response) {
        let matches = [];

        response.matches.filter((match) =>{
            if(match.locationlvl2 === "Berlin" && match.price > 0){
                matches.push(match.matchId);
            }
        });
        return matches;
    }
    
// Challenge 4: Filter Matches by Creator Fee and Status
// Write a function to find all matches where "creatorFeePerPlayer" > 3 and "status" = "canceled" in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByCreatorFeeAndStatus(response)); // Returns: ["10-016", "10-015"]


    filterMatchesByCreatorFeeAndStatus(response) {
        let matches = [];

        response.matches.filter((match) => {
            if(match.status === "canceled" && match.creatorFeePerPlayer > 3){
                matches.push(match.matchId);
            }
        });
        return matches;
                        
    }


// Challenge 5: Filter Matches by Covering and Dressing Room Availability
// Write a function to find all matches where "covering" = "Main.onTheStreet" and "isDressingRoom" = true in the array.
// The function should return an array of "matchId"s of the matches.

    filterMatchesByCoveringAndDressingRoom(response) {

    let matches = [];

    response.matches.filter((match) => {
        if(match.matchInfo.covering === "Main.onTheStreet" && match.matchInfo.isDressingRoom === true) {
            matches.push(match.matchId);
            console.log(matches);
        }
    });
    return matches;
}
}                


export default new Helpers()