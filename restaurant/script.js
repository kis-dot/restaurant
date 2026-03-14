document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let date = document.getElementById("date").value;

if(name === "" || email === "" || date === ""){
document.getElementById("message").innerText = "Please fill all fields";
return;
}

document.getElementById("message").innerText = "Table booked successfully!";
});