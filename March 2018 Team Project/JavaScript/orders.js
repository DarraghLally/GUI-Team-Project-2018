//run jQuery
$(document).ready(function() 
{
	
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
	
	var accounts = 
	[
		{
			"username" : "John Doe", 
			"pssword" : "maryhadalittlelamb",			
		},
		{
			"username" : "Bugs Bunny", 
			"pssword" : "whatsupdoc", 
		},
		{
			"username" : "Daffy Duck", 
			"pssword" : "quack", 
		},
		{
			"username" : "Elon Musk", 
			"pssword" : "rocketman", 
		},
		{
			"username" : "Jeff Bezos", 
			"pssword" : "skynet", 
		},
		{
			"clientId" : "67345",
			"username" : "Gerry Agnew", 
			"pssword" : "geraldo",
			"addressLine1" : "Gerrys Office",
			"addressLine2" : "G.M.I.T.",
			"addressLine3" : "Ireland",
			"email" : "gerry@gmit.ie",
			"phone" : "085-1234567",
		},
		{
			"username" : "Bill Gates", 
			"pssword" : "ihatelinux", 
		},
		{
			"username" : "Alex Ferguson", 
			"pssword" : "iamlegend", 
		},
		{
			"username" : "Isaac Newton", 
			"pssword" : "appletree", 
		},
		{
			"username" : "Mary Jane", 
			"pssword" : "timmy08" 
		}
	]
	
	// Retrieve local storage data
	var customerName = localStorage.getItem("accountName");
	//make loop and search through JSON arrays
	for (var i = 0; i < accounts.length; i++)
	{
		var client = accounts[i].clientId;
		var name = accounts[i].username;
		var address1 = accounts[i].addressLine1;
		var address2 = accounts[i].addressLine2;
		var address3 = accounts[i].addressLine3;
		var emailContact = accounts[i].email;
		var phoneContact = accounts[i].phone;
		
		if (customerName == name)
		{
			var accountNum = client;
			
			//use jQuery to output the JSON objects to the page (with bootStrap embedded)
			$("#accountDetails").prepend(
			"<div class ='row'>" + 
				"<div class='col-sm-3 col-md-3'>" +
					"<h4>" + name + "</h4>" +
					"<p>" + address1 + "</p>" + 
					"<p>" + address2 + "</p>" +
					"<p>" + address3 + "</p>" +
					"<p>" + emailContact + "</p>" + 
					"<p>" + phoneContact + "</p>" +
				"</div>" + 
			"</div>");
		}// if
	}// inner for 
	
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
	
	//make a loop to search through the product numbers
	for (i = 0; i < productIdNumArr.length; i++)
	{
		var productIdNum = productIdNumArr[i];
		var amount = amountArr[i];
		
		//make loop and search through JSON arrays
		for (var j = 0; j < productsArr.length; j++)
		{
			var id = productsArr[j].productID;
			var prodName = productsArr[j].productName;
			var description = productsArr[j].productDescription;
			var price = productsArr[j].productPrice.toFixed(2);
			var image = productsArr[j].productImgURL;
			
			if (productIdNum == id)
			{
				//counters for subtotal and items in basket
				subTotal += (price * amount);
				itemsCounter += Number(amount);
				
				//use jQuery to output the JSON objects to the page (with bootStrap embedded)
				$("#basketDetails").prepend(
				"<div class ='row'>" + 
					"<div class='col-sm-4 col-md-4'>" +
						"<h4>" + prodName + "</h4>" + 
					"</div>" + 
					"<div class='col-sm-2 col-md-2'> € " + price + "</div>" +
					"<div class='col-sm-1 col-md-1'>" + amount + "</div>" +
					"<div class='col-sm-1 col-md-1'>" + 
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
	
	//invoice details
	var currentdate = new Date();
	var accountId = "Account ID: " + accountNum;
	var invoiceFound = localStorage.getItem("invoiceActive");;
	
	//generate random invoice number if none is present
	if (invoiceFound == 1)
	{
		var invoiceNum = localStorage.getItem("invoiceNum");
		var invoiceOutput = "Invoice # " + invoiceNum;
	}
	else
	{
		var invoiceNum = Math.floor((Math.random() * 25000) + 10000);
		var invoiceOutput = "Invoice # " + invoiceNum;
		localStorage.setItem("invoiceActive", 1);
		localStorage.setItem("invoiceNum", invoiceNum);
	}
	
	//use jQuery to target the ID tags and output the values
	$("#date-value").html(currentdate);
	$("#invoice-value").html(invoiceOutput);
	$("#account-value").html(accountId);	
});

//On click 'search' - send input text to local
	document.getElementById("searchBtn").onclick = function()
	{	
		//get the user name from the text box
		var searchValue = document.getElementById("searchBarText").value;
		
		//send search
		localStorage.setItem("searchBar", searchValue);
	}

//If account is active display holders name
	var found = localStorage.getItem("loginActive");

	if (found == 1)
	{
		var name = localStorage.getItem("accountName");
		document.getElementById("nameTag").innerHTML = "Hello, " + name;
	}