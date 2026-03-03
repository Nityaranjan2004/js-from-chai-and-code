// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
    
}


for (let i = 0; i <=10; i++) {
   //console.log(`outer loop value: ${i}`);
   for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
   } 
}


let myArray = ["flash","batman","super man"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

//break and continue
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`dected 5`);
        //break;
        continue;
    }
   console.log(`value of i is ${index}`);
}



