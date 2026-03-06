const promiseOne = new Promise(function(resolve,reject){
    //do an asyn task
    //db call,cryptography,network

    setTimeout(function(){
        //console.log('Async task is complet');
        resolve();
        
    },1000);
});

promiseOne.then(function(){
    //console.log("promise consumed");
})
console.log("-------------------------------------");


new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("async task two");
        resolve();
    },3000)
}).then(function(){
    //console.log("async two resolved");
})

console.log("-------------------------------------");

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"nitya",email:"nitya@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    //console.log(user);
    
})


console.log("-------------------------------------");

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"nitya",password:"123"})
        }
        else{
            reject('ERROR:Something wnt wrong')
        }
    },1000)
})


//chaining
const username = promisefour.then((user)=>{
   // console.log(user);
    return user.username; 
})
.then((username)=>{
    //console.log(username);
    
})
.catch(function(error){
    //console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

console.log(username);


console.log("-------------------------------------");

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"java",password:"123"})
        }
        else{
            reject('ERROR:js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const responce = await promisefive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


console.log("-------------------------------------");
async function getAllUser(){
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await responce.json();
        //console.log(data);
    } catch (error) {
        //console.log("E:",error);
        
    }
}

getAllUser();


console.log("-------------------------------------");


fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})








