//generate a random color
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

console.log(randomColor());
let intervalId;
const startchangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changebgColor,1000);
    }
    
    function changebgColor(){
        document.body.style.backgroundColor = randomColor();
    }

}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startchangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);


//4.47