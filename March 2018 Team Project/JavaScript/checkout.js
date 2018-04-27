//If account is active display holders name
alert("COUPON CODE MATCH");
	var found = localStorage.getItem("loginActive");

	if (found == 1)
	{
		var name = localStorage.getItem("accountName");
		document.getElementById("nameTag").innerHTML = "Hello, " + name;
	}

//On click 'search' - send input text to local
	document.getElementById("searchBtn").onclick = function()
	{	
		//get the user name from the text box
		var searchValue = document.getElementById("searchBarText").value;
		
		//send search
		localStorage.setItem("searchBar", searchValue);
	}
	

	