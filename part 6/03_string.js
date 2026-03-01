const name = "nitya";
const repoCount = 23;

//console.log(name+repoCount+"value"); old technique

console.log(`hello  my name is ${name} and my repoCount ia ${repoCount}`);


const gameName = new String("sipo");
console.log(gameName[0]);
console.log("**********************");


console.log(gameName.__proto__);
console.log("**********************");


console.log(gameName.length);
console.log("**********************");


console.log(gameName.toUpperCase());
console.log("**********************");


console.log(gameName.charAt(1));
console.log("**********************");

console.log(gameName.indexOf('i'));
console.log("**********************");

const newstring = gameName.substring(0,2);  //last index not include
console.log(newstring);
console.log("**********************");

const anotherString = gameName.slice(-1,1);
console.log(anotherString);


const newStringOne = "       nitya       ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log("**********************");


const url = "https://gsdgyh.com/fghfgf%23guyguygy";
console.log(url.replace('%23','_'));
console.log(url.includes("com"));

console.log("**********************");


const stringStr = "hello my name is nitya";
console.log(stringStr.split(" "));
console.log("**********************");







console.log(typeof gameName);


