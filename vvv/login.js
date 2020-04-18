var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = ['aman','aditya','ashish','mughdha','satyam','amanpreet','akash','prajwal','harshit','nandita','vikas','nisha']
var password = document.getElementById("password").value;
if (username.indexOf(document.getElementById("username").value) !== -1&& password == "student123")
{
alert ("Login successfully");
window.location = "vikas.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
return false;
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}