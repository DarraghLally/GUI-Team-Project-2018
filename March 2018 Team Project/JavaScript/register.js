//A. Moore. D, Lally, N. Melia 
//login.js - 1st yr final project 
	
//run script when submit button is pressed
document.getElementById("regBtn").onclick = function()
{
	alert("button was clicked");
	//get the user details from the signup form
	var name = document.getElementById("userName").value;
	var email = document.getElementById("userEmail").value;
	var phone = document.getElementById("userPhone").value;
	var email = document.getElementById("userEmail").value;
	var address1 = document.getElementById("userAddress1").value;
	var address2 = document.getElementById("userAddress2").value;
	var address3 = document.getElementById("userAddress3").value;
	var password = document.getElementById("userPassword").value;
	
	if(name.length > 1  && password.length >= 1)
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
		
		// Retrieve account data from local storage
		var accounts = JSON.parse(localStorage["accountsArr"]);
		//push new account into array
		accounts.push(newAccount);
		//send account arrays to local storage
		localStorage["accountsArr"] = JSON.stringify(accounts);
		localStorage.setItem("newAccount", 1);
	}
}

//On click 'Phones Dept' - send data to local
document.getElementById("deptPhone").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Phone");
}

//On click 'Laptops Dept' - send data to local
document.getElementById("deptLaptop").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Laptop");
}

//On click 'TV Dept' - send data to local
document.getElementById("deptTV").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "TV");
}

//On click 'Drone Dept' - send data to local
document.getElementById("deptDrone").onclick = function()
{	
	//send search
	localStorage.setItem("searchDepartment", "Drone");
}

//On click 'search' - send input text to local
document.getElementById("searchBtn").onclick = function()
{	
	//get the user name from the text box
	var searchValue = document.getElementById("searchBarText").value;
	
	//send search
	localStorage.setItem("searchBar", searchValue);
}

//If account is active display holders name
var found = sessionStorage.getItem("loginActive");

if (found == 1)
{
	var name = sessionStorage.getItem("accountName");
	document.getElementById("nameTag").innerHTML = "Hello, " + name;
}

//On click 'Logout' - send data to local
document.getElementById("logOut").onclick = function()
{	
	// clear session storage and reload page
	sessionStorage.clear();
	//refresh page
	location.reload();
}