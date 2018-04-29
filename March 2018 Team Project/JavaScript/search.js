//run jQuery
$(document).ready(function() {
	// Retrieve account data from local storage
	var productsArr = JSON.parse(localStorage["productsArr"]);
	//get searchBar value from local
	var searchTerm = localStorage.getItem("searchBar");
    var itemSearch = searchTerm.toLowerCase();
	
	//make loop and search through JSON arrays
	for (var i = 0; i < productsArr.length; i++)
	{
		var name = productsArr[i].productName;
		var description = productsArr[i].productDescription;
		var price = productsArr[i].productPrice;
		var image = productsArr[i].productImgURL;
		var page = productsArr[i].productPageURL;
		
		//search both the product name and product description for the "searchTerm"
		var desrciptionFound = description.toLowerCase().search(itemSearch);
		var nameFound = name.toLowerCase().search(itemSearch);
		if (desrciptionFound != -1 || nameFound != -1)
		{
			//use jQuery to output the JSON objeccts to the page (with bootStrap imbedded)
			$("#searchInfo").prepend(
			"<div class ='row'>" + 
				"<div class='col-sm-3 col-md-3'>" +
					"<a href=" + page + "><img src=" + image + "></a>" +
				"</div>" +
				"<div class='col-sm-1 col-md-1'></div>" + 
				"<div class='col-sm-6 col-md-6'>" +
					"<h4>" + name + "</h4>" + 
					"<p>" + description + "</p>" +
				"</div>" + 
				"<div class='col-sm-2 col-md-2'>€ " + price + 
				"</div>" +
			"</div>");
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
});