$(document).ready(function() {

var options = ["Hair & Makeup", "Apparel & Accessories", "Fitness & Nutrition", "Getting Ahead"];

var sel = document.getElementById('i-have');

for(var i = 0; i < options.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = options[i];
    opt.value = options[i];
    sel.appendChild(opt);
    // console.log(options[i] + " hello there ")
}

$('#drop-down').change(function(){
		event.preventDefault();
		
		 var input = $('#i-have').val().toLowerCase();
		 console.log("hello it's me");

		if (input == "Hair & Makeup") {
			$('body').css('background-image','url(images/nyc.jpg)');
		}

	 	if (input == "Apparel & Accessories"){
			$('body').css('background-image','url(images/sf.jpg)');
		}
		
		if (input == "Fitness & Nutrition"){
			$('body').css('background-image','url(images/la.jpg)');
		}
		
		if (input == "Getting Ahead"){
			$('body').css('background-image','url(images/austin.jpg)');
		}
		
		else {
			console.log("result not found");
		}


});


// $(".hair").click(function(event){
// 	event.preventDefault();
// });

// console.log("Hello it's me")

// $(".readmore").click(function(event) {
// 	event.preventDefault();
// $(".readless").slideDown();
// $(".readless").show();
// $(".readmore").hide();
// });

// $(".readless").click(function() {
// 	event.preventDefault();
// $(".readless").slideUp();
// $(".readmore").show();
// $(".readless").hide();
// });

// $(".learnmore").click(function() {
// 	event.preventDefault();
// $("#learnmoretext").slideDown();
// $(".learnmore").hide();
// });

});