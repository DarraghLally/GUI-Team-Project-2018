//A. Moore, D. Lally, N. Melia 
//index.js - 1st yr final project

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
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