
function chek(){
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById('lName').value;
	var email = document.getElementById("email").value.toLowerCase();
	var password = document.getElementById('password').value;
	var error = document.getElementById("error");
	
	if(password==""){
		document.getElementById('password').style.border="1.5px solid red"
	}else {
		document.getElementById('password').style.border="1.5px solid #94b0a4"
	};
	if(email==""){
		document.getElementById("email").style.border="1.5px solid red"
	}else {
		document.getElementById("email").style.border="1.5px solid #94b0a4"
	}
	if(fName==""){
		document.getElementById("fName").style.border="1.5px solid red"
	}else {
		document.getElementById("fName").style.border="1.5px solid #94b0a4"
	};
	if(lName==""){
		document.getElementById('lName').style.border="1.5px solid red"
	}else{
		document.getElementById('lName').style.border="1.5px solid #94b0a4"
	};
	
	if(fName.indexOf(" ") != -1){
		 error.innerHTML = "enter first name without space";
		 error.style.color="red";
	}else if(lName.indexOf(" ") != -1){
		 error.innerHTML = "enter last name without space";
		 error.style.color="red";
	}else if(password.length <= 6){
		 error.innerHTML = "password must be longer than 6 characters";
		 error.style.color="red";
	}else if(email.slice(-10) != "@gmail.com"){
		error.innerHTML = "Enter your email with the domain gmail.com";
		error.style.color="red";
    }else{
		error.innerHTML ='Sing Up for Free';
		error.style.color="#fff";
		alert("вы успешно зарегестрировались")
	};
}