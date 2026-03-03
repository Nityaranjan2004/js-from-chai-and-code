//Dates
let myDate = new Date();
console.log("1"+myDate.toString());
console.log("2"+myDate.toDateString());
console.log("3"+myDate.toLocaleDateString());
console.log("4"+typeof myDate);

console.log("************");

let myCreatedDate = new Date(2026,0,23);
console.log(myCreatedDate.toDateString());

console.log("************");

let myCreatedDate1 = new Date(2026,0,23,5,5);
console.log(myCreatedDate1.toLocaleDateString());

console.log("************");

let myCreatedDate2 = new Date("2026-01-14");
console.log(myCreatedDate2.toLocaleDateString());

console.log("************");

let myCreatedDate3 = new Date("01-14-2026");
console.log(myCreatedDate3.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
//ctrl+space
newDate.toLocaleString('default',{
    weekday:"long",
 
})





