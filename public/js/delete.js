function deleteAccount() {
    var deleteProfile = new XMLHttpRequest();

    deleteProfile.open("DELETE", "http://ec2-18-232-209-130.compute-1.amazonaws.com:8080/users", true);
    deleteProfile.setRequestHeader("Content-Type", "application/json");
    var payload = {email:email};
    deleteProfile.send(JSON.stringify(payload));

    $('#successModalDelete').modal('show');
    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#accountMenu').hide();
    $('#accountModal').hide();
    $('#registerMenu').css('margin-right', '80px');
    window.location.href = "index.html";
    sessionStorage.removeItem("token");
}
