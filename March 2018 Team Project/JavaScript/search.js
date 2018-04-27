//run jQuery
$(document).ready(function() {
	//variables for checkout summary
	var subTotal = 0;
	var grandTotal = 0;
	var vatRate = 0.23;
	var vatCharged = 0;
	var shipping = 15.00;
	var itemsCounter = 0;
	
	var productsArr = 
	[
		{
			"productID": 1001,
			"productName":"LG K8",
			"productDescription": "5.0' HD In-cell Touch Display with 2.5D Arc Glass Wide display, smooth edges. The big bright 5.0' HD In-cell display has 2.5D Arc glass edges that are smooth to the touch. Your eyes and fingers will thank you. In every single way, the full-featured 13MP camera brilliantly captures the best moments of your life.",
			"productPrice": 103.90,
			"productImgURL": "../Images/phonePlaceHolder.jpg",
		},
		{
			"productID": 2001,
			"productName":"Lenovo IdeaPad ",
			"productDescription": "The IdeaPad 120S features a redesigned chassis with simple, clean lines giving it a contemporary take on elegant style. You count on your devices to keep up with you. So the manufacturer applied a protective finish to guard against wear and tear. Lenovo also included subtle rubber detailing on the bottom cover to maximise ventilation and extend product life. Available in a sophisticated range of colours: Mineral grey, blizzard white and ballerina pink.",
			"productPrice": 149.99,
			"productImgURL": "../Images/laptopPlaceholder.jpg"
		},
		{
			"productID": 3001,
			"productName":"LG 1080p Full HD 21.5Inch LED TV ",
			"productDescription": "1080p Full HD, 21.5' Screen, Suitable as TV or Monitor",
			"productPrice": 109.99,
			"productImgURL": "../Images/products/tv-cheap/lgCheap1.jpg"
		}		
	]
	
	//get searchBar value from local
	var itemSearch = localStorage.getItem("searchBar");
	
	//make loop and search through JSON arrays
	for (var i = 0; i < productsArr.length; i++)
	{
		var name = productsArr[i].productName;
		var description = productsArr[i].productDescription;
		var price = productsArr[i].productPrice;
		var image = productsArr[i].productImgURL;
		//var amount = poductQuantityArr[i];
		
		var isFound = description.search(itemSearch);	
		if (isFound != -1)
		{
			//use jQuery to output the JSON objeccts to the page (with bootStrap imbedded)
			$("#searchInfo").prepend(
			"<div class ='row'>" + 
				"<div class='col-sm-3 col-md-3'>" +
					"<img src=" + image + ">" +
				"</div>" + 
				"<div class='col-sm-4 col-md-4'>" +
					"<h4>" + name + "</h4>" + 
					"<p>" + description + "</p>" +
				"</div>" + 
				"<div class='col-sm-2 col-md-2'> € " + price + "</div>" +
				"<div class='col-sm-1 col-md-1'></div>" +
				"<div class='col-sm-1 col-md-1'>" + 
					"<button id='removeItem'>Add to Basket</button>" + 
				"</div>" +
			"</div>");
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
});