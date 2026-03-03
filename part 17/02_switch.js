// switch(key){
//     case value:
//         break;

//     default:
//         break;
// }



const month = 3;
switch(month){
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("february");
        break;

    case 3:
        console.log("march");
        break;
        
        
        
}


//  false=0,-0,BigInt,"",null,undefined,NaN
//  true ="0",'false'," ",[],{},fuction(){},


const emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}


//Nullish Coalescing Operator (??):null undefiend

let val1;
//val1 = 1 ?? 10;
//val1 = null ?? 10
//val1 = undefined ?? 12
val1 = null ?? 12 ?? 23
console.log(val1);












