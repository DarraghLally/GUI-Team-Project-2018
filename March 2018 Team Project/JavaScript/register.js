//A. Moore. D, Lally, N. Melia 
//login.js - 1st yr final project

//run script when submit button is pressed
document.getElementById("regBtn").onclick = function()
{
	
	//get the user details from the signup form
	var name = document.getElementById("userName").value;
	var email = document.getElementById("userEmail").value;
	var phone = document.getElementById("userPhone").value;
	var email = document.getElementById("userEmail").value;
	var address1 = document.getElementById("userAddress1").value;
	var address2 = document.getElementById("userAddress2").value;
	var address3 = document.getElementById("userAddress3").value;
	var password = document.getElementById("userPassword").value;
	
	if(name.length > 6  && password.length >= 8)
	{
		//generate random client number between 70k and 10k
		var clientNumber = Math.floor((Math.random() * 70000) + 10000);
		
		//build object and with the user details
		var newAccount = 
		{
			"clientId" : clientNumber,
			"username" : name, 
			"pssword" : password,
			"addressLine1" : address1,
			"addressLine2" : address2,
			"addressLine3" : address3,
			"email" : email,
			"phone" : phone
		};
		
		//Turn object into JSON format
		var accountString = JSON.stringify(newAccount);
		
		//send to local storage
		localStorage.setItem("accountReg", 1);
		localStorage.setItem("newAccount", accountString);
		//test if name found
	}
}