// $(document).ready(function () {

const { deleteUser } = require("../../controllers/userController");

function showAccountDetails() {
    var getProfile = new XMLHttpRequest();

    getProfile.open("POST", "http://ec2-18-232-209-130.compute-1.amazonaws.com:8080/getUser", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.onload = function() {
        profile = JSON.parse(getProfile.responseText);
        username = profile[0].username;
        email = profile[0].email;
        document.getElementById('name').textContent = username;
        document.getElementById('emailText').textContent = email;   
    }

    var payload = {token : token};
    getProfile.send(JSON.stringify(payload));
}
