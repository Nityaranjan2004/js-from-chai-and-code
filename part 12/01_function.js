

function sayMyName(){
    console.log("H");
    console.log("I");
}

sayMyName();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    let result = number1+number2;
    return result;
}
const result1 = addTwoNumber(5,6);

console.log(result1);


function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter user name");
        return;
    }
    return`${username} just login`
}
console.log(loginUserMessage("hello"));
console.log(loginUserMessage());


