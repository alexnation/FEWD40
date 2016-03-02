// Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
// When the user changes the input of the drop-down, update the background image based on what they selected
// Use $.append() in your iteration on the drop-down menu
// Use the $.attr() function to update html classes
// Get the value of user input using $.val()
// Use the $.change event handler to capture user actions
// Use if/else if/else conditionals to control the flow of your application
// Display your pseudocode as Javascript comments


$(document).ready(function(){

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

var sel = document.getElementById('city-type');

for(var i = 0; i < cities.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = cities[i];
    opt.value = cities[i];
    sel.appendChild(opt);
    // console.log(cities[i] + " hello there ")
}

$('#drop-down').change(function(){
		event.preventDefault();
		
		 var input = $('#city-type').val().toLowerCase();
		 console.log("hello it's me");

		if (input == "nyc") {
			$('body').css('background-image','url(images/nyc.jpg)');
		}

	 	if (input == "sf"){
			$('body').css('background-image','url(images/sf.jpg)');
		}
		
		if (input == "la"){
			$('body').css('background-image','url(images/la.jpg)');
		}
		
		if (input == "atx"){
			$('body').css('background-image','url(images/austin.jpg)');
		}
		
		if (input == "syd"){
			$('body').css('background-image','url(images/sydney.jpg)');
		}
		
		else {
			console.log("result not found");
		}


});

// var x = $("city-type").val()
// 	console.log(cities[i] + " you can code! ")

// when someone chooses a city from the dropdown, change the image to make it that city.

});