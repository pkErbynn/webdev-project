/*JOHN KWESI ERBYNN
PS/CSC/15/0006*/



// =============carousel in homePage=================

			var myIndex = 0;
			carousel();

			function carousel() {
		    var i;
		    var x = document.getElementsByClassName("mySlides");
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";
		    }
		    myIndex++;
		    if (myIndex > x.length) {myIndex = 1}
		    x[myIndex-1].style.display = "block";
		    setTimeout(carousel, 3000);
		}





// ===================button colorChange for login page=====================

function message(){
			alert("Login successful")
			return false;
		}

function colorChange(){
		document.getElementById("submit").style.color =  "#3C5BC9";
		document.getElementById("submit").style.background =  "white";
		document.getElementById("submit").style.border =  "3px solid #3C5BC9";
		}
function normal(){
		document.getElementById("submit").style.color =  "white";
		document.getElementById("submit").style.background =  "#3C5BC9";
		document.getElementById("submit").style.border =  "3px solid #3C5BC9";
		}







// ==========================validation for sign up============================ 


	function validation(){
		var user = document.getElementById("username").value;
		var mail = document.getElementById("email").value;
		var mobilenum = document.getElementById("mobilenumber").value;
		var pswd = document.getElementById("password").value;
		var cnfpswd = document.getElementById("confirmpassword").value;


		if(user == ""){  
			document.getElementById("usernamediv").innerHTML = "***Please provide Username***";
			document.getElementById("usernamediv").style.color = "#E00000";
			username.focus(); //insertion point focuses on username field(value.focus is wrong) 
			return false;  //ends the program
		}
		if((user.length<3) || (user.length>20)){
			document.getElementById("usernamediv").innerHTML = "***Username MUST be between 3 and 20***";
			document.getElementById("usernamediv").style.color = "#E00000";
			username.focus();
			return false;
		}
		if(!isNaN(user)){  //not(isNotANumber)...meaning is if(it is a number)
			document.getElementById("usernamediv").innerHTML = "***Numbers NOT allowed***";
			document.getElementById("usernamediv").style.color = "#E00000";
			username.focus();
			return false;
		}



		if(mail == ""){  
			document.getElementById("emaildiv").innerHTML = "***Please provide Email***";
			document.getElementById("emaildiv").style.color = "#E00000";
			email.focus();
			return false; 
		}



		if(mobilenum == ""){  
			document.getElementById("mobilenumberdiv").innerHTML = "***Please provide Mobile Number***";
			document.getElementById("mobilenumberdiv").style.color = "#E00000";
			mobilenumber.focus();
			return false; 
		}
		if(mobilenum.length != 10){  
			document.getElementById("mobilenumberdiv").innerHTML = "***Please provide 10 Numbers***";
			document.getElementById("mobilenumberdiv").style.color = "#E00000";
			mobilenumber.focus();
			return false; 
		}
		if(isNaN(mobilenum)){  //if(isNotANumber)
			document.getElementById("mobilenumberdiv").innerHTML = "***Please provide Only Numbers***";
			mobilenumber.focus();
			return false;
		}



		if(pswd == ""){  
			document.getElementById("passworddiv").innerHTML = "***Please provide Password***";
			document.getElementById("passworddiv").style.color = "red";
			password.focus();
			return false;
		}
		if((pswd.length < 6)){
			document.getElementById("usernamediv").innerHTML = "***Password MUST be at least 6 characters***";
			document.getElementById("usernamediv").style.color = "red";
			password.focus();
			return false;
		}
		if(cnfpswd == ""){  
			document.getElementById("confirmpassworddiv").innerHTML = "***Please confirm Password***";
			document.getElementById("confirmpassworddiv").style.color = "red";
			confirmpassword.focus();
			return false; 
		}
		if(pswd != cnfpswd){
			document.getElementById("confirmpassworddiv").innerHTML = "***Password do not match***";
			document.getElementById("confirmpassworddiv").style.color = "red";
			confirmpassword.focus();
			return false;
		}


		alert(" Registration successful ");
		
	}
