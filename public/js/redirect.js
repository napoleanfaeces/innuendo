$(document).ready(function() {
    if(token != null) {
        $('#registerMenu').hide();
        $('#loginMenu').hide();
        $('#accountMenu').show();
        $('#nowMenu').css('margin-left', '80px');
    } else {
        window.location.href = "index.html";
    }
})