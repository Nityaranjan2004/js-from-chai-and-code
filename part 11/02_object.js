const tinderuser = new Object(); //singleton object

const newuser = {};//non singleton object
console.log(tinderuser);

tinderuser.id = "123abc";
tinderuser.name = "sam karan";
tinderuser.isLoggedIn = false;

console.log(tinderuser);
console.log("**********************");

const regularuser = {
    email:"vdff@gmail.com",
    fullname:{
        userfullnamr:{
            firstname:"nitya",
            lastname:"ranjan"
        }
    }
}

console.log(regularuser.fullname.userfullnamr.firstname);


console.log("*****************");


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2};
const obj4 = Object.assign({},obj1,obj2);

const obj5 = {...obj1,...obj2};

console.log(obj3);
console.log("-----------------------------------------------------1");

console.log(obj4);
console.log("-------------------------------------------------------2");
console.log(obj5);
console.log("-------------------------------------------------------3");

console.log(Object.keys(tinderuser));
console.log("-------------------------------------------------------4");
console.log(Object.values(tinderuser));
console.log("-------------------------------------------------------");
console.log(Object.entries(tinderuser));
console.log("-------------------------------------------------------");
console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log("-------------------------------------------------------");





