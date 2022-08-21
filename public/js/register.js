function validate() {
    var isValid = 0;
    if (document.getElementById("username").value == '' || document.getElementById("password").value == '' || document.getElementById("password").value.length < 8 || document.getElementById("email").value == '' || document.getElementById("email").value.includes("@") == false) {
        alert("Invalid credentials.");
    } else {
        isValid = 1;
    }
    if (isValid === 1) {
        registerMe();
    }
}

function registerMe() {
    
    var registerUser = new XMLHttpRequest();
    registerUser.open("POST", "http://ec2-18-232-209-130.compute-1.amazonaws.com:8080/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function() {
        document.getElementById("username").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
    }

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 

    var payload = {username:username, email:email, password:password};
    registerUser.send(JSON.stringify(payload));
}
