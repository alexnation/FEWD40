<!DOCTYPE html>
<html>
<head>
<script>
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else	{
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}
</script>
</head>

<body>
<p>Insert a number into one of the input fields below:</p>
<input id="c" onkeyup="convert('C')"> degrees Celsius<br>
equals<br> 
<input id="f" onkeyup="convert('F')"> degrees Fahrenheit 

<p>Note that the <b>Math.round()</b> method is used, so that the result will be returned as an integer.</p>
</body>

</html>