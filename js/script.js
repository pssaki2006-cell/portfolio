console.log("Portfolio loaded successfully!");
const form=document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;

    if (name === "") {
    alert("Please enter your name.");
} else {
    alert("Thank you " + name + "!\nYour message has been received.");
    form.reset();
}
});

