//immidiately invoked function expression(IIFE)
(function chai(){
    console.log(`Db connected`);  
})();


((name)=>{
    console.log(`db connected two ${name}`);
    
})("huhu")