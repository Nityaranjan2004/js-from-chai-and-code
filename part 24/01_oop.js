const oop = {  //this is the object
    username:"nitya",
    loginCount:4,
    signedIn:true,

    getUserDetal:function(){
        
        console.log(`Username: ${this.username}`);
        console.log("got user detail from db");
        console.log(this);
        
    }
}

console.log(oop.loginCount);
console.log(oop.getUserDetal());
console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
