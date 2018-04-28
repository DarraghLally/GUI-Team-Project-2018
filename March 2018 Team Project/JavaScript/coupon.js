///////////////////////////////////////////////////////////////////////////////////////////
/* Coupon Code */


var couponArr = 
	[
		{
			"couponCode": 99990,
			"couponDate": 100117,
		},
		{
			"couponCode": 99991,
			"couponDate": 011011,
		},
		{
			"couponCode": 99992,
			"couponDate": 010119,
		},
		{
			"couponCode": 99993,
			"couponDate": 010118,
		},
		{
			"couponCode": 99994,
			"couponDate": 010119,
		},
		{
			"couponCode": 99995,
			"couponDate": 010118,
		},
		{
			"couponCode": 99996,
			"couponDate": 010119,
		},
		{
			"couponCode": 99997,
			"couponDate": 010118,
		},
		{
			"couponCode": 99998,
			"couponDate": 010119,
		},
		{
			"couponCode": 99999,
			"couponDate": 010119
		}					
	]	
	
	
		//send search
		//localStorage.setItem("searchBar", searchValue);
	

document.getElementById("couponBtn").onclick = function()
{
	var found = false;
	var validCode;
	//get current date
	var currentdate = new Date();
	//get details that user has enter for code and date
	var couponCode = document.getElementById("codeInput").value;
	// Then search through the coupons to valid coupon
	for (var i = 0; i< couponArr.length; i++) 
	{
		var code = couponArr[i].couponCode;
		//var date = couponArr[i].couponDate;
		
		//test if date is valid
		if (couponCode == code)
		{
			found = true;
			validCode = code;
			alert("coupon");
		}
		
		//add check date
	}
	
	//test if name found
	if (found == true)
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