class Helpers {
  getUsersByStatus(response, status) {
    // The function should return the users from the api.user.response object who has Deactivated status and not empty Description

    let description;
    return response.users
      .filter(function (user) {
        if (
          (description =
            user.role.description !== "" && user.role.description !== null)
        ) {
          return user.role.status === status;
        }
      })
      .map(function (user) {
        return user.name;
      });
  }

  getUsersByRole(response, role, roleId) {

    // The function should return the users from the api.user.response object who has role Admin and id = 1 (id from role object)
    // user.role.status
    return response.users
      .filter(function (user) {
        let roleId = 1;
        return user.role.name === role && user.role.id === roleId;
      })
      .map(function (user) {
        return user.name;
      });

  }

  getUsersByEmailDomain(response, domain) {
    
    // The function should return the users from the api.user,response object who contains in email domain = codemify
      // Filter users with the specified domain in their email
      const usersWithDomain = response.users.filter(function (user) {
          return user.email.includes(domain);
      });
      
      // Return only the names of the filtered users
      return usersWithDomain.map(function (user) {
          return user.name;
      });
  }
  

  getUserBalanceByCurrency(response, currency) {

    // The function should return the users balance from the api.user.response object who has currency USD
    return response.users
    .filter(function (user) {
      let currency = 'USD';
      return user.currency === currency;
    })
    .map(function (user) {
      return user.balance;
    });
   
  }
}

export default new Helpers();
