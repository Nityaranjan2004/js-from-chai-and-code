// singleton object is declare as two type letteral and constructor
//object declare as lettral is not singleton
//if declare as a costructor is singleton
//Object.create //constructor method singleton

const mysym = Symbol("key1");
//object
const jsuser = {
    name:"nitya",
    [mysym]:"mykey1",
    age:13,
    location:"soro",
    isLoginIn:false,
    LastloginDays:["Mondays","saturday"]
};




console.log(jsuser.age);
console.log(jsuser["age"]);
console.log(jsuser["name"]);
console.log(jsuser[mysym]);
console.log(typeof jsuser.mysym);

jsuser.name = "satya";
//Object.freeze(jsuser);
jsuser.name="rama";
console.log(jsuser);

console.log("*********************");


jsuser.greeting = function(){
    console.log("hello jsuser");
    
}
jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());





