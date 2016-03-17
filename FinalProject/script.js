
    $(document).ready(function(){

    	
var test = document.getElementById('select');
test.onchange = function(){
var value = test.options[test.selectedIndex].value;
document.getElementById('hairmakeup').style.display = "none";
document.getElementById('fitnessnutrition').style.display = "none";
document.getElementById('apparelaccessories').style.display = "none";
document.getElementById('getahead').style.display = "none";
document.getElementById(value).style.display = "block";
}
});


//   $(document).ready(function(){

// $(".learnmore").click(function() {
// 	event.preventDefault();
// $("#learnmoretext").slideDown();
// $(".learnmore").hide();
// });

// });