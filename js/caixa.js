// Get the modal
var caixa = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    window.alert("thaboralb@gmail.com & leonardoteixeira174@gmail.com");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    caixa.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == caixa) {
        caixa.style.display = "none";
    }
}