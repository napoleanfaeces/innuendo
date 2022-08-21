function loginMe() {
    var loginUser = new XMLHttpRequest();
    
    loginUser.open("POST", "http://ec2-18-232-209-130.compute-1.amazonaws.com:8080/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function() {
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if(token.result != "invalid") {
            $('#loginModal').modal('hide');
            $('#successModalLogin').modal('show');
            document.getElementById("registerMenu").style.display = "none";
            document.getElementById("loginMenu").style.display = "none";
            document.getElementById("accountMenu").style.display = "block";
            sessionStorage.setItem("token", token.result);
            sessionStorage.setItem("email", email);
        } else {
            document.getElementById("passwordLogin").value = "";
            alert("Invalid email or password.");
        }
    }
    
    var password = document.getElementById("passwordLogin").value;
    var email = document.getElementById("usernameLogin").value;

    var payload = {password:password, email:email};
    loginUser.send(JSON.stringify(payload));
}   
