$(document).ready(function() {

});

$(".buttonblue")(function(event){
	event.preventDefault();
});

$(".readmore").click(function() {
$(".readless").slideDown();
$(".readless").show();
$(".readmore").hide();
});

$(".readless").click(function() {
$(".readless").slideUp();
$(".readmore").show();
$(".readless").hide();
});

$(".learnmore").click(function() {
$("#learnmoretext").slideDown();
$(".learnmore").hide();
});
