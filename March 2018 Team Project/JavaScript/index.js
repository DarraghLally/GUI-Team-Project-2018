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
			"productImgURL": "../Images/BasketImages/lgk8Mobile.jpg",
			"productPageURL": "prod1.html",
		},
		{
			"productID": 1002,
			"productDept": "Phone",
			"productName":"Samsung Galaxy S7 Edge 32 GB ",
			"productDescription": "5.5 inch Super AMOLED capacitive touchscreen.12MP rear camera and 5MP front-facing camera, 3600 mAh battery. Get up to 27 hours talk time, Sensors include: Fingerprint, accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2, 32GB internal memory, expansion possible, 2 year warrenty",
			"productPrice": 376.95,
			"productImgURL": "../Images/BasketImages/samsung_1.jpg",
			"productPageURL": "prod1_1.html",
		},
		{
			"productID": 1003,
			"productDept": "Phone",
			"productName":"Samsung Galaxy Note 8 128GB ",
			"productDescription": "6.3 inch Dual curved QHD+ Super AMOLED Display, 6GB RAM, 128GB internal memory with support for expandable memory up to 256GB microSD, Dual Edge wide-angle 12-megapixel camera, wide angle and telephoto lens, f1.7 aperture and f2.4 aperture, front-facing 8-megapixel camera, Iris Scanner for greater protection and more secure access to your phone, Use the stylus to bring out your creative side, 2 year warrenty",
			"productPrice": 773.48,
			"productImgURL": "../Images/BasketImages/Samsung_Note_1.jpg",
			"productPageURL": "prod1_2.html",
		},
		{
			"productID": 2001,
			"productDept": "Laptop",
			"productName":"Lenovo IdeaPad ",
			"productDescription": "The IdeaPad 120S features a redesigned chassis with simple, clean lines giving it a contemporary take on elegant style. You count on your devices to keep up with you. So the manufacturer applied a protective finish to guard against wear and tear. Lenovo also included subtle rubber detailing on the bottom cover to maximise ventilation and extend product life. Available in a sophisticated range of colours: Mineral grey, blizzard white and ballerina pink.",
			"productPrice": 149.99,
			"productImgURL": "../Images/BasketImages/LenovoIdeaPad.jpg",
			"productPageURL": "prod2.html",
		},
		{
			"productID": 2002,
			"productDept": "Laptop",
			"productName":"HP Pavilion ",
			"productDescription": "Intel Core i5-8250U, 8GB DDR4 SDRAM, 1TB HHD, 15.6 inch, 1366 x 768, Windows 10 Home",
			"productPrice": 509.98,
			"productImgURL": "../Images/BasketImages/hp_1_index.jpg",
			"productPageURL": "prod2_1.html",
		},
		{
			"productID": 2003,
			"productDept": "Laptop",
			"productName":"Dell Inspiron",
			"productDescription": "Intel Core i7-7700HQ, 16GB DDR4 RAM, 512GH SSD, NVIDEA GeForce GTX 1050, 15.6 inch, 1920 x 1080 display, Anit-Glare LED-Backlit FHD, Windows 10 Home",
			"productPrice": 849.99,
			"productImgURL": "../Images/BasketImages/dell_1.jpg",
			"productPageURL": "prod2_2.html",
		},
		{
			"productID": 3001,
			"productDept": "TV",
			"productName":"LG 1080p Full HD 21.5Inch LED TV ",
			"productDescription": "1080p Full HD, 21.5' Screen, Suitable as TV or Monitor",
			"productPrice": 109.99,
			"productImgURL": "../Images/BasketImages/lg22TV.jpg",
			"productPageURL": "prod3.html",
		},
		{
			"productID": 3002,
			"productDept": "TV",
			"productName":"Samsung 32 inch Curved LED TV",
			"productDescription": "Full HD 1080p Curved Screen for immersive viewing, Free Tuner, Dolby Sound Technology, Full HD Resolution with PIP, Wall mount and aesthetic Arcline stand, HDMI x 2 - SVGA x 1 - Components input x 1 - Composit input x 1 - USB 2.0 x 1",
			"productPrice": 299.99,
			"productImgURL": "../Images/BasketImages/samsumg32TV.jpg",
			"productPageURL": "prod3_1.html",
		},
		{
			"productID": 3003,
			"productDept": "TV",
			"productName":"LG Hospitality Display LCD TV 55 inch",
			"productDescription": "LG Hospitality Display LCD TV 55 inch, Full HD 1080p, 1920 x 1080,Dolby Sound Technology, Ethernet port, Wall mount and stand",
			"productPrice": 939.28,
			"productImgURL": "../Images/BasketImages/lg_tv_1.jpg",
			"productPageURL": "prod3_2.html",
		},
		{
			"productID": 4001,
			"productDept": "Drone",
			"productName":"DBPOWER Predator Drone ",
			"productDescription": "720p HD camera, Wifi with real time video play-back, Extra battery to DOUBLE your flying time!, Designed for aspiring drone pilots, One key for take off and landing, Low power and out of range alarm",
			"productPrice": 95.99,
			"productImgURL": "../Images/BasketImages/wifiDroneCheap1.jpg",
			"productPageURL": "prod4.html",
		},
		{
			"productID": 4002,
			"productDept": "Drone",
			"productName":"Parrot BeBop 2 Drone w/ Cockpit FPV Glasses ",
			"productDescription": "Compact and lightweight drone at less than 500g, Live video stream from phone or tablet, Immersive First Person View with included Cockpit Glasses, Skycontroller 2 provides precise piloting and a max range of 2km, 25 minute flying time with a 270mAg battery, Low power and out of range alarm",
			"productPrice": 491.80,
			"productImgURL": "../Images/BasketImages/parrot_1.jpg",
			"productPageURL": "prod4_1.html",
		},
		{
			"productID": 4003,
			"productDept": "Drone",
			"productName":"DJI Mavic Pro Drone Combo Kit ",
			"productDescription": "Fly further from your pocket, The Mavic uses Sky Autonomy technology to sense obstacles up to 15m away, Precision Hover, Satellite positioning can help the drone hover in outdoor areas, Stay flying longer wit hup to 27 minute flying time, Intelligent Flight Battery, Quick release folding propellars, Charging Hub, Controller, Limited Addition extras pack",
			"productPrice": 985.90,
			"productImgURL": "../Images/BasketImages/dji_1.jpg",
			"productPageURL": "prod4_2.html"
		}
	]
	
//send account arrays to local storage
localStorage["productsArr"] = JSON.stringify(productsArr);
//get account info from storage
var newAcc = localStorage.getItem("newAccount");
//if no new account is present send 10 origional accounts to local
if (newAcc != 1)
{
	//send account arrays to local storage
	localStorage["accountsArr"] = JSON.stringify(accountsArr);
}

// set random starting index for the slideshow on page load
var slideIndex = Math.floor((Math.random() * 4) + 0);
//var slideIndex = 0; 
showSlides();
// slideshow script
function showSlides() {
    var i;
	
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++)
	{
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4600); // Change image every 4.6 seconds
}

var found = sessionStorage.getItem("loginActive");

if (found == 1)
{
	var name = sessionStorage.getItem("accountName");
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