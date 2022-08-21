var state = false;
function togglePassword() {
    if(state) {
		document.getElementById("passwordLogin").setAttribute("type", "password");
        document.getElementById("eye").style.color = '#7a797e';
		state = false;
	} else {
	    document.getElementById("passwordLogin").setAttribute("type", "text");
        document.getElementById("eye").style.color = "#5887ef";
		state = true;
	}
}

function toggleRegisterPassword() {
    if(state) {
		document.getElementById("password").setAttribute("type", "password");
        document.getElementById("other-eye").style.color = '#7a797e';
		state = false;
	} else {
	    document.getElementById("password").setAttribute("type", "text");
        document.getElementById("other-eye").style.color = "#5887ef";
		state = true;
	}
}