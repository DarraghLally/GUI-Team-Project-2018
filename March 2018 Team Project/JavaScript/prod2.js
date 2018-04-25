//On click 'add to basket' - Getting quantity amount - Adding product ID and quantity to local storage to be pulled into Basket.html for processing
document.getElementById("addToBasket").onclick = function()
{
	// Retrieve
	var active = localStorage.getItem("basketActive");

	if (active == 1)
	{
		//push productId into array
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		prodIdArr.push(2001);
		alert("Add to Basket was clicked");
		
		//get input from number bar
		amount = Number(document.getElementById("quantity").value);
		
		//push to array
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		quantityArr.push(amount);
		alert(amount);
		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		localStorage.setItem("basketActive", 1);
	}
	else
	{
		//create empty arrays
		var prodIdArr = [];
		var quantityArr = [];
		var num;
		
		//push productId into array
		prodIdArr.push(2001);
		alert("Add to Basket was clicked");
		
		//get input from number bar
		amount = Number(document.getElementById("quantity").value);
		
		//push to array
		quantityArr.push(amount);
		alert(amount);
		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		localStorage.setItem("basketActive", 1);
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

