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