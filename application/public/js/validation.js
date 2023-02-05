

document.getElementById('username').addEventListener('input',function(ev){

    let usernameElement = ev.target;
    let username = usernameElement.value;
    

    if((username.length>3) && (username.match("^[a-zA-Z]"))){

        usernameElement.classList.add('valid');
        usernameElement.classList.remove('invalid');
    }

    else{
        
        usernameElement.classList.add('invalid');
        usernameElement.classList.remove('valid');
        
        usernameElement.classList.add(document.getElementsByClassName("username-error").innerHTML = "Username must start with a letter and have atleast 3 characters");

        }
    

})
 var password;
document.getElementById('password').addEventListener('input',function(ev){

    let passwordElement = ev.target;
     password = passwordElement.value;

    if((password.length>=8)&&(password.match("[0-9]"))&&(password.match("[a-zA-Z]"))&&(password.match("[(/)\-\+\!\@\#\$\^\&\*]"))){
        passwordElement.classList.add('valid');
        passwordElement.classList.remove('invalid');

    }
    else{
        passwordElement.classList.add('invalid');
        passwordElement.classList.remove('valid');
        passwordElement.classList.add(document.getElementsByClassName("pass-error").innerHTML = "Password must be 8 characters long and must contain a upper case letter, a number and a special character");
    }
})

document.getElementById('confirm-password').addEventListener('input', function(ev){

    let passwordElement = ev.target;
    var conpassword = passwordElement.value;

    if(conpassword == password){
        passwordElement.classList.add('valid');
        passwordElement.classList.remove('invalid');
    }
    else{
        passwordElement.classList.add('invalid');
        passwordElement.classList.remove('valid');
        passwordElement.classList.add(document.getElementsByClassName("conpass-error").innerHTML = "Password must match")
    }

})