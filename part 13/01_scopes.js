//this is the global scope


let a = 58;
if(true){ //this is the block scope,{} meaning scope
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("inner",a);
    
}




//console.log(a);  //it give error because a is defiend inside if block
//]console.log(b); //it give error because a is defiend inside if block
console.log(c);    //it work it give output 30 because this is the disadvantage of var


console.log(a);



function one(){
    const username = "nitya"

    function two(){
        const website = "youtybe"
        console.log(username);
        
    }
    //console.log(website);
    two();
}
one();


if(true){
    const username = "nitya";
    if(username==="nitya"){
        const website = "youtube";
        console.log(username+website);
    }
    //console.log(website);
    
}

//console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1;
}


//console.log(addtwo(5));  //give error

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5));  //always declare below the function



