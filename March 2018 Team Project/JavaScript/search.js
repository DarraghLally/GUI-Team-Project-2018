//run jQuery
$(document).ready(function() {
	//variables for checkout summary
	var subTotal = 0;
	var grandTotal = 0;
	var vatRate = 0.23;
	var vatCharged = 0;
	var shipping = 15.00;
	var itemsCounter = 0;
	
	//test for item search
	var itemSearch = "phone";
	
	//make loop and search through JSON arrays
	for (var i = 0; i < productsArr.length; i++)
	{
		var name = productsArr[i].productName;
		var description = productsArr[i].productDescription;
		var price = productsArr[i].productPrice;
		var image = productsArr[i].productImgURL;
		var amount = poductQuantityArr[i];
		
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
});