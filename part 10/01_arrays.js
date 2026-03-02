//array

const myArr = [1,2,3,4,"nitya"];
const myArr2 = new Array(1,2,3);

console.log(myArr2);
console.log(myArr[0]);

console.log("*******************");

//Arrays method
myArr.push(6);
myArr.push(78);
myArr.pop();
myArr.unshift(0);

console.log(myArr.includes(4));
console.log(myArr.indexOf(5));


console.log(myArr);


const newArray = myArr.join();
console.log(newArray);


//slice and splice
console.log("A ",myArr);
const myAr1 = myArr.slice(1,3);

console.log("*******************");


console.log(myAr1);
console.log("B ",myArr);

console.log("***************");

const myAr2 = myArr.splice(1,3);
console.log("c ",myArr);
console.log(myAr2);

console.log("**************");

const marvel_hero = ["thor","iron man","hulk"];
const dc_hero = ["super man","bet man"];

marvel_hero.push(dc_hero);
console.log(marvel_hero);

console.log("****************");


const all_hero = dc_hero.concat(marvel_hero);
console.log(all_hero);

console.log("************");
const all_new_hero = [...marvel_hero, ...dc_hero];
console.log(all_new_hero);

console.log("****************");
const another_array = [1,2,3[4,5,6],7,[6,7[4,6]]];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log("*********************");


console.log(Array.from(nitya));






