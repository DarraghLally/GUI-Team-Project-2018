//If account is active display holders name
	var found = localStorage.getItem("loginActive");

	if (found == 1)
	{
		var name = localStorage.getItem("accountName");
		document.getElementById("nameTag").innerHTML = "Hello, " + name;
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
	
///////////////////////////////////////////////////////////////////////////////////////////
/* Coupon Code */
var codeArr = 
	[
		{
			"couponCode": 99990,
			"couponDate": 010117,
		},
		{
			"couponCode": 99991,
			"couponDate": 010118,
		},
		{
			"couponCode": 99992,
			"couponDate": 010119,
		}		
	]	

// Check for valid coupon code
	document.getElementById("completeTrans").onclick = function()
	{	
	alert("COUPON CODE MATCH");
		//get the user coupon code from the text box
		var code = document.getElementById("couponInput").value;
		for(i = 0; i < codeArr.length){
			if(codeArr[i].value == code){
				alert("COUPON CODE MATCH");
			}
		}
	}
		//send search
		//localStorage.setItem("searchBar", searchValue);
	
	
	