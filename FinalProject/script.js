
    $(document).ready(function(){
    $('#styleme').click('change',function(){
    	event.preventDefault();
    var sel_opt = $(this).val();
    alert(sel_opt);
    if(sel_opt=='hairmakeup')
    {
      HELLO THERE;
    }
     else if(sel_opt=='apparelaccessories')
     {
       is this working;
     }
      else if(sel_opt==3)
      {
       your code;
      }

    });

 });




// $(document).ready(function() {

// // $(".learnmore").click(function() {
// // 	event.preventDefault();
// // $("#learnmoretext").slideDown();
// // $(".learnmore").hide();
// // });

// // var options = ["Hair & Makeup", "Apparel & Accessories", "Fitness & Nutrition", "Getting Ahead"];

// var sel = document.getElementById('i-have');


// // for(var i = 0; i < options.length; i++) {
// //     var opt = document.createElement('option');
// //     opt.innerHTML = options[i];
// //     opt.value = options[i];
// //     // sel.appendChild(opt);
// //     // console.log(options[i] + " hello there ")
// // }

// // $('#drop-down').click(function(){
// // 		event.preventDefault();
// // 		console.log("hello how are you");

// // 		function SubmitFrm(){
// //         var Searchtxt = document.getElementById('i-have').value;
// //         window.location = "www.google.com" + i-have;
// //     }

// });

// });


// 		// if (input == "Hair & Makeup") {
// 		// 	$('body').css('background-image','url(images/louboutins.jpg)');
// 		// }

// 	 // 	if (input == "Apparel & Accessories"){
// 		// 	$('body').css('background-image','url(images/sf.jpg)');
// 		// }
		
// 		// if (input == "Fitness & Nutrition"){
// 		// 	$('body').css('background-image','url(images/la.jpg)');
// 		// }
		
// 		// if (input == "Getting Ahead"){
// 		// 	$('body').css('background-image','url(images/austin.jpg)');
// 		// }
		
// 		// else {
// 		// 	console.log("result not found");
// 		// }