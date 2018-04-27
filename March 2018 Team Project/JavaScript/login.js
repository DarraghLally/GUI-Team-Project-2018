//A. Moore. D, Lally, N. Melia 
//login.js - 1st yr final project

// Retrieve account data from local storage
var accounts = JSON.parse(localStorage["accountsArr"]);

//run script when login button is pressed
document.getElementById("loginBtn").onclick = function()
{
	var found = false;
	var accountName;
	//get the user name from the text box
	var userName = document.getElementById("nameInput").value;
	var passWord = document.getElementById("passInput").value;
	
	// Then search through the accounts with a for loop 
	for (var i = 0; i< accounts.length; i++) 
	{
		var name = accounts[i].username; // Or some other logic.
		var pass = accounts[i].pssword;
		
		//test if name found
		if (userName == name && passWord == pass)
		{
			found = true;
			accountName = name;
		}
	}
	
	//test if name found
	if (found == true)
	{
		localStorage.setItem("loginActive", 1);
		localStorage.setItem("accountName", accountName);
	}
	else
	{
		localStorage.setItem("loginActive", 0);
		localStorage.setItem("accountName", "Void");
	}
	
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
var found = localStorage.getItem("loginActive");

if (found == 1)
{
	var name = localStorage.getItem("accountName");
	document.getElementById("nameTag").innerHTML = "Hello, " + name;
}	


	

	