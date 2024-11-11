//Classes are pretty much as object of sterois

//classes may include functions and if you use fucntion inside object or class it changes to method

class LoginPage  {
//constins 2 tupes of data: 
//getter function which returns selectors
    get usernameTxt () {return '.fake-username-class'};
    get passwordTxt () {return '.fake-password-class'};
    get loginBtn () {return '#fake-login-button'};
//helper method which we use to log in
    login(username, password){ //login method
        console.log(`Im typing my username ${username} to + ${this.usernameTxt}`);
        console.log(`Im typing my password ${password} to' + ${this.passwordTxt}`);
        console.log('Im clicking on' + this.loginBtn);
    }
}

//then we need to do export
module.exports = new LoginPage(); //calls class instantiotion, we create new class, object, out this template