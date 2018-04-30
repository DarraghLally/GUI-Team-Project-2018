//On click 'add to basket' - Getting quantity amount - Adding product ID and quantity to session storage to be pulled into Basket.html for processing
document.getElementById("addToBasket").onclick = function()
{
	// Retrieve session data
	var active = sessionStorage.getItem("basketActive");
	var found = sessionStorage.getItem("loginActive");

	if (found == 1)
	{
		
		if (active == 1)
		{
			//push productId into array
			var prodIdArr = JSON.parse(sessionStorage["prodIdArr"]);
			prodIdArr.push(3002);
			
			//get input from number bar
			amount = Number(document.getElementById("quantity").value);
			
			//push to array
			var quantityArr = JSON.parse(sessionStorage["quantityArr"]);
			quantityArr.push(amount);
			
			//send arrays to local storage
			sessionStorage["prodIdArr"] = JSON.stringify(prodIdArr);
			sessionStorage["quantityArr"] = JSON.stringify(quantityArr);
			sessionStorage.setItem("basketActive", 1);
		}
		else
		{
			//create empty arrays
			var prodIdArr = [];
			var quantityArr = [];
			var num;
			
			//push productId into array
			prodIdArr.push(3002);
			//alert("Add to Basket was clicked");
			
			//get input from number bar
			amount = Number(document.getElementById("quantity").value);
			
			//push to array
			quantityArr.push(amount);
			//alert(amount);
			
			//send arrays to session storage
			sessionStorage["prodIdArr"] = JSON.stringify(prodIdArr);
			sessionStorage["quantityArr"] = JSON.stringify(quantityArr);
			sessionStorage.setItem("basketActive", 1);
		}
		//change button to blue
		document.getElementById("addToBasket").style.backgroundColor = "#3b88d6";
		document.getElementById("addToBasket").style.color = "white";
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