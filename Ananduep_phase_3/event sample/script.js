document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("clickText").innerText = "Button was clicked!";
});


document.getElementById("liveInput").addEventListener("keyup", function() {
    var value = document.getElementById("liveInput").value;
    document.getElementById("preview").innerText = value;
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("nameInput").value;

    if (name == "") {
        document.getElementById("formMsg").innerText = "Please enter your name!";
    } else {
        document.getElementById("formMsg").innerText = "Form submitted! Hello, " + name;
    }
});

                                                    



