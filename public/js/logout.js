function logoutMe() {
    $('#successModalLogout').modal('show');
    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#accountMenu').hide();
    $('#accountModal').hide();
    $('#registerMenu').css('margin-right', '80px');
    window.location.href = "index.html";
    sessionStorage.removeItem("token");
}