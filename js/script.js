console.log("Portfolio loaded successfully!");
const form=document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});