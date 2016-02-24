var total = 0;

$('#zero').click(zero);
$('#add5').click(add5);
$('#add10').click(add10);
$('#sub1').click(sub1);

function zero() {
  total = 0;
  $('#result').html(total);
}
//resets total value to 0 

function add5() {
  total = total + 5;
  
//adds 5 

  $('#result').html(total);
}

function add10() {
  total = total + 10;
 
  $('#result').html(total);
}
//adds 10

function sub1() {
  total = total - 1;
 
//subtracts 1 

  $('#result').html(total);
}
//displays total using jquery
