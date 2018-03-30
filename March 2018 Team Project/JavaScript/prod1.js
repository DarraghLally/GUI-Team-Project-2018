	//On click 'add to basket' - Getting quantity amount - Adding product ID and quantity to local storage to be pulled into Basket.html for processing
	document.getElementById("addToBasket").onclick = function()
		{
		alert("Add to Basket was clicked");
		localStorage.setItem("prodID", "1001");
		quantity = Number(document.getElementById("quantity").value);
		alert(quantity);
		localStorage.setItem("quantity", quantity);
		} 
