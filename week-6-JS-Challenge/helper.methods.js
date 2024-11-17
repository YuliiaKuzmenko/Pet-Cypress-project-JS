// Challenge 1: Filter Matches by Location and Status
// Write a function to find all matches where "locationlvl1" = "Germany" and "status" = "canceled" in the array.
// The function should return an array of "matchId"s of the matches.


class Helpers {
    filterMatchesByLocationAndStatus(response) {
    let status = "canceled";
    let location = "Germany";
   

    return response.matches
      .filter(function (match) {
        return match.status === status && match.locationlvl1 == location;
    })
     
      .map(function (match) {
        return match.matchId;
    });
  }


// Challenge 2: Filter Matches by Coating and Shower Availability
// Write a function to find all matches where "coating" = "Main.artificialGrass" and "isShower" = true in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByCoatingAndShower(response)); // Returns: ["10-015"]

    filterMatchesByCoatingAndShower(response) {

        let coating = "Main.artificialGrass";
        let isShower = true;

        return response.matches
            .filter(function(match) {
        return match.matchInfo.coating === coating && match.matchInfo.isShower === isShower;
        })

        .map(function(match) {
        return match.matchId;
            
    })
    }
 

// Challenge 3: Filter Matches by Location and Price
// Write a function to find all matches where "locationlvl2" = "Berlin" and "price" > 0 in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByLocationAndPrice(response)); // Returns: ["10-015"]
        
    
    filterMatchesByLocationAndPrice(response) {
        let locationlvl2 = "Berlin";
        let price = 0;
        return response.matches
            .filter(function(match) {
        return match.locationlvl2 === locationlvl2 && match.price > price;
        })

        .map(function(match) {
        return match.matchId;
            
    })
    }
    
// Challenge 4: Filter Matches by Creator Fee and Status
// Write a function to find all matches where "creatorFeePerPlayer" > 3 and "status" = "canceled" in the array.
// The function should return an array of "matchId"s of the matches.
// Example usage:
// console.log(filterMatchesByCreatorFeeAndStatus(response)); // Returns: ["10-016", "10-015"]


    filterMatchesByCreatorFeeAndStatus(response) {
        let status = "canceled";
        let creatorFeePerPlayer = 3;

        return response.matches
            .filter(function(match){
                return match.status === status && match.creatorFeePerPlayer > creatorFeePerPlayer;
            })

            .map(function(match) {
                return match.matchId;
                    
            })
    }


// Challenge 5: Filter Matches by Covering and Dressing Room Availability
// Write a function to find all matches where "covering" = "Main.onTheStreet" and "isDressingRoom" = true in the array.
// The function should return an array of "matchId"s of the matches.

    filterMatchesByCoveringAndDressingRoom(response) {
    let covering = "Main.onTheStreet";
    let isDressingRoom = true;

    return response.matches
        .filter(function(match){
            return match.matchInfo.covering === covering && match.matchInfo.isDressingRoom === isDressingRoom;
        })

        .map(function(match) {
            return match.matchId;
                
        })
}
}

export default new Helpers()