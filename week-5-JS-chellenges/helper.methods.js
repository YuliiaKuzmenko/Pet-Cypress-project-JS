class Helpers {
   getUsersByAge(response, ageMin, ageMax) {
/*   Implement a function “getUsersByAge“  helper.methods.js file.
The function should return the users from the api.response object aged between 30 - 40 (including 30 and 40!) */

//Variant #1
//    return response.users.filter(user => user.age >= ageMin && user.age <= ageMax)
//                              .map(user => user.name);

// Variant #2
        // return response.users
        // .filter(user => user.age >= 30 && user.age <= 40) 
        // .map(user => user.name);

// Variant #3
        return response.users
        .filter(function(user) {
            return user.age >= ageMin  && user.age <= ageMax;
        })
        .map(function(user) {
            return user.name;
        });

}

//Implement a function “getUsersByRole“ in the helper.methods.js file 
//The function should return the users from the api.response object who has role admin
    getUsersByRole(response, role) {

    return response.users
    .filter(function(user){
        return user.role === role;
    })
    .map(function(user) {
        return user.name;
    });
    }

    getUsersByCountry(response, country) {
    return response.users
    .filter(function(user){
        return user.country === country;
    })
    .map(function(user) {
        return user.name;
    });
    }

    getUsersByBalance(response, minBalance, maxBalance) {
    return response.users
    .filter(function(user){
        return user.balance >= minBalance && user.balance <= maxBalance;
    })
                             
    .map(function(user) {
    return user.name;
    });

    }
}

export default new Helpers()