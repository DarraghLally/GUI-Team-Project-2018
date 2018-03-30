//A. Moore. D, Lally, N. Melia 
//login.js - 1st yr final project

//make an array of objects with JSON
var accounts = 
[
	{
		"username" : "John Doe", 
		"pssword" : "maryhadalittlelamb", 
	},
	{
		"username" : "Bugs Bunny", 
		"pssword" : "whatsupdoc", 
	},
	{
		"username" : "Daffy Duck", 
		"pssword" : "quack", 
	},
	{
		"username" : "Elon Musk", 
		"pssword" : "rocketman", 
	},
	{
		"username" : "Jeff Bezos", 
		"pssword" : "skynet", 
	},
	{
		"username" : "Gerry Agnew", 
		"pssword" : "geraldo", 
	},
	{
		"username" : "Bill Gates", 
		"pssword" : "ihatelinux", 
	},
	{
		"username" : "Alex Ferguson", 
		"pssword" : "iamlegend", 
	},
	{
		"username" : "Isaac Newton", 
		"pssword" : "appletree", 
	},
	{
		"username" : "Mary Jane", 
		"pssword" : "timmy08" 
	}
];

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
		alert("Account found");
		localStorage.setItem("login", 1);
		localStorage.setItem("accountName", accountName);
	}
	else
	{
		alert("Account not found - Try again");
		localStorage.setItem("login", 0);
		localStorage.setItem("accountName", "Void");
	}
	
}

	


	

	