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
		sessionStorage.setItem("loginActive", 1);
		sessionStorage.setItem("accountName", accountName);
	}
	else
	{
		sessionStorage.setItem("loginActive", 0);
		sessionStorage.setItem("accountName", "Void");
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


	

	