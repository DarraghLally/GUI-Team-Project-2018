
//run jQuery
$(document).ready(function() {
	//variables for checkout summary
	var subTotal = 0;
	var grandTotal = 0;
	var vatRate = 0.23;
	var vatCharged = 0;
	var shipping = 15.00;
	var itemsCounter = 0;
	
	// Retrieve local storage data
	var productIdNumArr = JSON.parse(localStorage["prodIdArr"]);
	var amountArr = JSON.parse(localStorage["quantityArr"]);
	var productsArr = JSON.parse(localStorage["productsArr"]);
	
	//If account is active display holders name
	var found = sessionStorage.getItem("loginActive");

	if (found == 1)
	{
		var name = sessionStorage.getItem("accountName");
		document.getElementById("nameTag").innerHTML = "Hello, " + name;
		
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
					"<div class='col-sm-3 col-md-3 text-center'>" +
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
	
	}//if
	
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
	
	//On click 'Logout' - send data to local
	document.getElementById("logOut").onclick = function()
	{	
		// clear session storage and reload page
		sessionStorage.clear();
		//refresh page
		location.reload();
	}
	//====== Remove Button  Functions ==========\\
	
	// function to remove items from the basket/local pos[0]
	document.getElementById("remove_1").onclick = function()
	{
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
	
	// function to remove items from the basket/local pos[3]
	document.getElementById("remove_4").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 4th element of prodIdArr
		prodIdArr.splice(3, 1);
		// Removes the 4th element of quantityArr        
		quantityArr.splice(3, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[4]
	document.getElementById("remove_5").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 5th element of prodIdArr
		prodIdArr.splice(4, 1);
		// Removes the 5th element of quantityArr        
		quantityArr.splice(4, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[5]
	document.getElementById("remove_6").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 6th element of prodIdArr
		prodIdArr.splice(5, 1);
		// Removes the 6th element of quantityArr        
		quantityArr.splice(5, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[6]
	document.getElementById("remove_7").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 7th element of prodIdArr
		prodIdArr.splice(6, 1);
		// Removes the 7th element of quantityArr        
		quantityArr.splice(6, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[7]
	document.getElementById("remove_8").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 8th element of prodIdArr
		prodIdArr.splice(7, 1);
		// Removes the 8th element of quantityArr        
		quantityArr.splice(7, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[8]
	document.getElementById("remove_9").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 9th element of prodIdArr
		prodIdArr.splice(8, 1);
		// Removes the 9th element of quantityArr        
		quantityArr.splice(8, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[9]
	document.getElementById("remove_10").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 10th element of prodIdArr
		prodIdArr.splice(9, 1);
		// Removes the 10th element of quantityArr        
		quantityArr.splice(9, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[10]
	document.getElementById("remove_11").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 11th element of prodIdArr
		prodIdArr.splice(10, 1);
		// Removes the 11th element of quantityArr        
		quantityArr.splice(10, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[11]
	document.getElementById("remove_12").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 12th element of prodIdArr
		prodIdArr.splice(11, 1);
		// Removes the 12th element of quantityArr        
		quantityArr.splice(11, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
	
	// function to remove items from the basket/local pos[12]
	document.getElementById("remove_13").onclick = function()
	{
		//pop arrays from local storage
		var prodIdArr = JSON.parse(localStorage["prodIdArr"]);
		var quantityArr = JSON.parse(localStorage["quantityArr"]);
		
		// Removes the 12th element of prodIdArr
		prodIdArr.splice(12, 1);
		// Removes the 12th element of quantityArr        
		quantityArr.splice(12, 1);		
		//send arrays to local storage
		localStorage["prodIdArr"] = JSON.stringify(prodIdArr);
		localStorage["quantityArr"] = JSON.stringify(quantityArr);
		//refresh page
		location.reload();
	}
});	