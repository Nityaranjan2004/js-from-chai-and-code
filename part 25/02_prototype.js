// let myname = "nitya     ";

// console.log(myname.length);
// console.log(myname.truelength);

let myHero = ["thor","spiderman"];
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spiderman power ${this.spiderman}`);
        
    }
}
Object.prototype.nitya = function(){  //here we add another prototype name nitya inside 
                                       // the object so that all function are accessable the object
    console.log(`nitya is present all the object`);
    
}
Array.prototype.heyNitya = function(){
    console.log(`nitya is hello`);
    
}
heroPower.nitya();
myHero.nitya();
myHero.heyNitya();
//heroPower.heyNitya();



//inheritance

const User={
    name:"nitya",
    email:"nitya@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User;

//morden syntax

Object.setPrototypeOf(TeachingSupport,Teacher);    //TeachingSupport access all the property of Teacher


let anotherUserName = "nitya        ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`); 

}

anotherUserName.trueLength();






