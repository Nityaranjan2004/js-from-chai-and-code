//rest operator
function calculateCartPrise(...num1){
    return num1;
}
console.log(calculateCartPrise(2,5,546,56,45));

console.log("-----------------------------------------------------");


function calculateCartPrise1(num1){
    return num1;
}
console.log(calculateCartPrise1(2,5,546,56,45));

console.log("-----------------------------------------------------");

function calculateCartPrise2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrise2(2,5,546,56,45));
console.log("-----------------------------------------------------");



const user={
    username:"nitya",
    prise:122
};
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and prise id ${anyobject.prise}`);
}
handelObject(user);
handelObject({
    username:"sam",
    prise:134
});

console.log("-----------------------------------------------------");

const myNewArray = [200,100,300];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
















