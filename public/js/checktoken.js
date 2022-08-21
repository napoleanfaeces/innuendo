$(document).ready(function() {
    var token = sessionStorage.getItem("token");
    if (token != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#accountMenu').show();
        $('#nowMenu').css('margin-left', '80px');
    }   
});

function checkLogin() {
    var token = sessionStorage.getItem("token");
    if (token != null) {
        location.href = 'songsearch.html';
    }
    else {
        alert("Sign into an account to access this feature.")
    }
}