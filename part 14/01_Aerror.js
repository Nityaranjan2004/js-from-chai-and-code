const user = {
    username:"nitya",
    prise:222,
    welcome:function(){
        console.log(`${this.username},welcome to webside`);
        console.log(this);
        
    }


}

// user.welcome();
// user.username = "sam";
// user.welcome();

//console.log(this);

//---------------------------------------------------------------------------


function chai(){
    let username = "nitya";
    console.log(this.username);
    
}
chai();

//-----------------------------------------------------------------------



const  chai1 = function(){
    let username = "nitya";
    console.log(this.username);
    
}
chai1();

//---------------------------------------------------------------
const  chai2 = ()=>{
    let username = "nitya";
    console.log(this);
    
}
chai1();
//-------------------Aerrow function----------------------------------

const addTwo = (num1,num2)=>{
    return num1+num2
};

console.log(addTwo(2,3));

//--------------------------------------------------------------
const addThree = (num1,num2,num3)=> ({username:"nitya"})
console.log(addThree(3,2,4));






