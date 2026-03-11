function SetUsername(userame){
    //complex db call
    this.userame = userame;
    console.log("call");
    
}

function createUser(userame,email, password){

    SetUsername.call(this,userame);  //.call used to call fourcefully call that function
                                    //this used to save current context holder
    this.email = email;
    this.password = password;
}


const chai = new createUser("nitya","rehhh","1234");
console.log(chai);
