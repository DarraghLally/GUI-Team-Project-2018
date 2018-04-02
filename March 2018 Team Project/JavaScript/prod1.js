//On click 'add to basket' - Getting quantity amount - Adding product ID and quantity to local storage to be pulled into Basket.html for processing
document.getElementById("addToBasket").onclick = function()
{
alert("Add to Basket was clicked");
localStorage.setItem("prodID", "1001");
quantity = Number(document.getElementById("quantity").value);
alert(quantity);
localStorage.setItem("quantity", quantity);

//On click 'search' - send input text to local
	document.getElementById("searchBtn").onclick = function()
	{	
		//get the user name from the text box
		var searchValue = document.getElementById("searchBarText").value;
		
		//send search
		localStorage.setItem("searchBar", searchValue);
	}
} 
