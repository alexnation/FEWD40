$(document).ready(function() {



$(".buttonblue").click(function(event){
	event.preventDefault();
});

$(".readmore").click(function(event) {
	event.preventDefault();
$(".readless").slideDown();
$(".readless").show();
$(".readmore").hide();
});

$(".readless").click(function() {
	event.preventDefault();
$(".readless").slideUp();
$(".readmore").show();
$(".readless").hide();
});

$(".learnmore").click(function() {
	event.preventDefault();
$("#learnmoretext").slideDown();
$(".learnmore").hide();
});

});