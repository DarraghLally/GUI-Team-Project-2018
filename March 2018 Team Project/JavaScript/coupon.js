///////////////////////////////////////////////////////////////////////////////////////////
/* Coupon Code */

var couponArr = 
	[
		{
			"couponCode": 99990,
			"couponDate": 20161001,
		},
		{
			"couponCode": 99991,
			"couponDate": 20161001,
		},
		{
			"couponCode": 99992,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99993,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99994,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99995,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99996,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99997,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99998,
			"couponDate": 20191001,
		},
		{
			"couponCode": 99999,
			"couponDate": 20191001
		}					
	]

//If account is active display holders name
var found = sessionStorage.getItem("loginActive");

if (found == 1)
{
	var name = sessionStorage.getItem("accountName");
	document.getElementById("nameTag").innerHTML = "Hello, " + name;
}	
	
document.getElementById("couponBtn").onclick = function()
{
	var discount = false;
	var validCode;
	//get current date
	//var currentdate = new Date();
	//get details that user has enter for code and date
	var couponCode = document.getElementById("codeInput").value;
	// Then search through the coupons to valid coupon
	for (var i = 0; i< couponArr.length; i++) 
	{
		var code = couponArr[i].couponCode;
		var date = couponArr[i].couponDate;
		
		//test if date is valid
		if (couponCode == code && 20180429 <= date)
		{
			discount = true;
			validCode = code;
			
		}
		
		//add check date
	}
	
	//test if name found
	if (discount == true)
	{
		localStorage.setItem("couponActive", 1);
	}
	else
	{
		localStorage.setItem("couponActive", 0);
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

//On click 'Logout' - send data to local
document.getElementById("logOut").onclick = function()
{	
	// clear session storage and reload page
	sessionStorage.clear();
	//refresh page
	location.reload();
}