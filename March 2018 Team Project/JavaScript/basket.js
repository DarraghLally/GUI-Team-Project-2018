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
		}		
	]
	
	// Retrieve local storage data
	var productIdNumArr = JSON.parse(localStorage["prodIdArr"]);
	var amountArr = JSON.parse(localStorage["quantityArr"]);
	
	//make a loop to search through the product numbers
	for (var i = 0; i < productIdNumArr.length; i++)
	{
		var productIdNum = productIdNumArr[i];
		var amount = amountArr[i];
		
		//make loop and search through JSON arrays
		for (var j = 0; j < productsArr.length; j++)
		{
			var id = productsArr[j].productID;
			var name = productsArr[j].productName;
			var description = productsArr[j].productDescription;
			var price = productsArr[j].productPrice.toFixed(2);
			var image = productsArr[j].productImgURL;
			
			if (productIdNum == id)
			{
				//counters for subtotal and items in basket
				subTotal += (price * amount);
				itemsCounter += Number(amount);
				
				//use jQuery to output the JSON objects to the page (with bootStrap imbedded)
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
						"<button id='remove_" + (i+1) + "'>Remove</button>" + 
					"</div>" +
				"</div>");
			}// if
		}// inner for 
	}// outer for 
	
	//get totals after closing loop
	vatCharged = (subTotal * vatRate);
	grandTotal = subTotal + vatCharged + shipping;
	
	//use jQuery to target the ID tags and output the values
	$("#basket-items-value").html(itemsCounter);
    $("#sub-total-value").html("€ " + subTotal.toFixed(2));
    $("#vat-value").html("€ " + vatCharged.toFixed(2));
	$("#shipping-value").html("€ " + shipping.toFixed(2));
	$("#totals-value").html("€ " + grandTotal.toFixed(2));
	
	// function to remove items from the basket/local pos[0]
	document.getElementById("remove_1").onclick = function()
	{
		alert("Remove Button was clicked");
		//pop productId from array
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the first element of prodIdArr
		prodIdArr.splice(0, 1);
		// Removes the first element of quantityArr        
		quantityArr.splice(0, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[1]
	document.getElementById("remove_2").onclick = function()
	{
		alert("Remove Button was clicked");
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the second element of prodIdArr
		prodIdArr.splice(1, 1);
		// Removes the second element of quantityArr        
		quantityArr.splice(1, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[2]
	document.getElementById("remove_3").onclick = function()
	{
		alert("Remove Button was clicked");
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the third element of prodIdArr
		prodIdArr.splice(2, 1);
		// Removes the third element of quantityArr        
		quantityArr.splice(2, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
});	