let username = document.getElementById("username");
let password = document.getElementById("password");
let flag =1;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validateForm(){
    console.log(username.value);
    if(username.value ==""){
        document.getElementById("userError").innerHTML = "username is empty";
        flag = 0;
    }
    else if(username.value.length<3){
        document.getElementById("userError").innerHTML = "username require min 3 characters";
        flag = 0;
    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(password.value ==""){
        document.getElementById("passError").innerHTML = "password is empty";
        flag = 0;
    }
    else if(password.value.length<12){
        document.getElementById("passError").innerHTML = "password contains 12 characters";
        flag = 0;
    }
    else if(!passwordPattern.test(password.value)){
        document.getElementById("passError").innerHTML = "password invalid";
        flag = 0;
    }
    else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;

    }

    if(flag){
        return true;
    }
    else{
        return false;
    }
    // if(flag === 1){
    //     return window.location.href = 'home.html';
    // }
    // else{
    //     return alert('Invalid credentials. Please try again.');
    // }

// // Check if values are retrieved correctly
// console.log("Username:", username);
// console.log("Password:", password);

// // Store data in local storage
// localStorage.setItem("username", username);
// localStorage.setItem("password", password);

// // Check if data is stored correctly
// console.log("Data stored in local storage");

    
}


    

    


