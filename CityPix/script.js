// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg


$(document).ready(function(){

	$('#submit-btn').click(function(){
		event.preventDefault();
		
		 var x= $('#city-type').val().toLowerCase();
		 console.log(x);
		if (x == "nyc" || x =="new york" || x =="new york city") {
			$('body').css('background-image','url(images/nyc.jpg)');
		}
		
	 	if (x=="san francisco" || x=="sf" || x=="bay area"){
			$('body').css('background-image','url(images/sf.jpg)');
		}
		
		if (x=="los angeles" || x=="la" || x=="lax"){
			$('body').css('background-image','url(images/la.jpg)');
		}
		
		if (x=="austin" || x=="atx"){
			$('body').css('background-image','url(images/austin.jpg)');
		}
		
		if (x=="sydney" || x=="syd"){
			$('body').css('background-image','url(images/sydney.jpg)');
		}
		
		else {
			console.log("result not found");
		}


	});

});
