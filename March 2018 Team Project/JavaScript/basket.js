//run jQuery
$(document).ready(function() {
	//variables for checkout summary
	var subTotal = 0;
	var grandTotal = 0;
	var vatRate = 0.23;
	var vatCharged = 0;
	var shipping = 15.00;
	var itemsCounter = 0;
	
	//make loop and search through JSON arrays
	for (var i = 0; i < productsArr.length; i++)
	{
		var name = productsArr[i].productName;
		var description = productsArr[i].productDescription;
		var price = productsArr[i].productPrice;
		var image = productsArr[i].productImgURL;
		var amount = poductQuantityArr[i];
		
		//counters for subtotal and items in basket
		subTotal += (price * amount);
		itemsCounter += amount;
		
		//use jQuery to output the JSON objeccts to the page (with bootStrap imbedded)
		$("#basketInfo").prepend(
		"<div class ='row'>" + 
			"<div class='col-sm-3 col-md-3'>" +
				"<img src=" + image + ">" +
			"</div>" + 
			"<div class='col-sm-4 col-md-4'>" +
				"<h4>" + name + "</h4>" + 
				"<p>" + description + "</p>" +
			"</div>" + 
			"<div class='col-sm-2 col-md-2'> € " + price + "</div>" +
			"<div class='col-sm-1 col-md-1'>" + amount + "</div>" +
			"<div class='col-sm-1 col-md-1'>" + 
				"<button id='removeItem'>Remove</button>" + 
			"</div>" +
		"</div>");
		
	}
	//get totals after closing loop
	vatCharged = (subTotal * vatRate);
	grandTotal = subTotal + vatCharged + shipping;
	
	//use jQuery to target the ID tags and output the values
	$("#basket-items-value").html(itemsCounter);
    $("#sub-total-value").html("€ " + subTotal.toFixed(2));
    $("#vat-value").html("€ " + vatCharged.toFixed(2));
	$("#shipping-value").html("€ " + shipping.toFixed(2));
	$("#totals-value").html("€ " + grandTotal.toFixed(2));
});	