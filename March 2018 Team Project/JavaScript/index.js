//A. Moore, D. Lally, N. Melia 
//index.js - 1st yr final project
var accountsArr = 
	[
		{
			"clientId" : "67345",
			"username" : "John Doe", 
			"pssword" : "jonnyboy",
			"addressLine1" : "23 Times Square",
			"addressLine2" : "Manhattan",
			"addressLine3" : "USA",
			"email" : "john@gmail.com",
			"phone" : "083-3458150",			
		},
		{
			"clientId" : "64278",
			"username" : "Bugs Bunny", 
			"pssword" : "whatsupdoc",
			"addressLine1" : "43 Rabbit Hole",
			"addressLine2" : "Acme Studios",
			"addressLine3" : "USA",
			"email" : "bugs@gmail.com",
			"phone" : "085-9736519", 
		},
		{
			"clientId" : "87346",
			"username" : "Daffy Duck", 
			"pssword" : "quackquack",
			"addressLine1" : "456 Duck Pond",
			"addressLine2" : "Acme Studios",
			"addressLine3" : "USA",
			"email" : "daffy@gmail.com",
			"phone" : "087-7451297",
		},
		{
			"clientId" : "10101",
			"username" : "Elon Musk", 
			"pssword" : "rocketman",
			"addressLine1" : "SPACEX HEADQUARTERS",
			"addressLine2" : "Rocket Road",
			"addressLine3" : "Hawthorne, California, USA",
			"email" : "elon@spaceX.com",
			"phone" : "310-363-6000", 
		},
		{
			"clientId" : "39518",
			"username" : "Jeff Bezo", 
			"pssword" : "skynet",
			"addressLine1" : "Amazon",
			"addressLine2" : "Underground Bunker",
			"addressLine3" : "Antarctica",
			"email" : "jeff@amazon.com",
			"phone" : "785-673-7800", 
		},
		{
			"clientId" : "67345",
			"username" : "Michael Duignan", 
			"pssword" : "javascript",
			"addressLine1" : "Michael's Office",
			"addressLine2" : "G.M.I.T.",
			"addressLine3" : "Ireland",
			"email" : "mike@gmit.ie",
			"phone" : "085-1234567",
		},
		{
			"clientId" : "47812",
			"username" : "Bill Gates", 
			"pssword" : "ihatelinux",
			"addressLine1" : "Bills Office",
			"addressLine2" : "Redmond Washington",
			"addressLine3" : "USA",
			"email" : "bill@live.com",
			"phone" : "083-9812571",
		},
		{
			"clientId" : "85262",
			"username" : "Alex Ferguson", 
			"pssword" : "iamlegand",
			"addressLine1" : "Old Traford",
			"addressLine2" : "Manchester",
			"addressLine3" : "United Kingdom",
			"email" : "alex@mufc.com",
			"phone" : "083-7643092", 
		},
		{
			"clientId" : "24781",
			"username" : "Isaac Newton", 
			"pssword" : "appletree",
			"addressLine1" : "Woolsthorpe Manor",
			"addressLine2" : "Lincolnshire",
			"addressLine3" : "England",
			"email" : "isaac@yahoo.com",
			"phone" : "087-8745693", 
		},
		{
			"clientId" : "00001",
			"username" : "test1234", 
			"pssword" : "test1234",
			"addressLine1" : "No-Address",
			"addressLine2" : "Blank",
			"addressLine3" : "Blank",
			"email" : "test@test.com",
			"phone" : "087-8745693" 
		}
	]
	
	var productsArr = 
	[
		{
			"productID": 1001,
			"productDept": "Phone",
			"productName":"LG K8",
			"productDescription": "5.0' HD In-cell Touch Display with 2.5D Arc Glass Wide display, smooth edges. The big bright 5.0' HD In-cell display has 2.5D Arc glass edges that are smooth to the touch. Your eyes and fingers will thank you. In every single way, the full-featured 13MP camera brilliantly captures the best moments of your life.",
			"productPrice": 103.90,
			"productImgURL": "../Images/phonePlaceHolder.jpg",
		},
		{
			"productID": 2001,
			"productDept": "Laptop",
			"productName":"Lenovo IdeaPad ",
			"productDescription": "The IdeaPad 120S features a redesigned chassis with simple, clean lines giving it a contemporary take on elegant style. You count on your devices to keep up with you. So the manufacturer applied a protective finish to guard against wear and tear. Lenovo also included subtle rubber detailing on the bottom cover to maximise ventilation and extend product life. Available in a sophisticated range of colours: Mineral grey, blizzard white and ballerina pink.",
			"productPrice": 149.99,
			"productImgURL": "../Images/laptopPlaceholder.jpg"
		},
		{
			"productID": 3001,
			"productDept": "TV",
			"productName":"LG 1080p Full HD 21.5Inch LED TV ",
			"productDescription": "1080p Full HD, 21.5' Screen, Suitable as TV or Monitor",
			"productPrice": 109.99,
			"productImgURL": "../Images/products/tv-cheap/lgCheap1.jpg"
		}
	]
	
//send account arrays to local storage
localStorage["productsArr"] = JSON.stringify(productsArr);
	
var newAcc = localStorage.getItem("newAccount");

if (newAcc != 1)
{
	//send account arrays to local storage
	localStorage["accountsArr"] = JSON.stringify(accountsArr);
}
	
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
	// new variable
	
	// new variable = math.random(1-10)
	
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4600); // Change image every 4.6 seconds
}

var found = localStorage.getItem("loginActive");

if (found == 1)
{
	var name = localStorage.getItem("accountName");
	document.getElementById("nameTag").innerHTML = "Hello, " + name;
}


//On click 'search' - send input text to local
document.getElementById("searchBtn").onclick = function()
{	
	//get the user name from the text box
	var searchValue = document.getElementById("searchBarText").value;
	
	//send search
	localStorage.setItem("searchBar", searchValue);
}