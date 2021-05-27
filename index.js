
var element = document.getElementById("popup");

var t = setTimeout(openPopUp, 5000);
function openPopUp() {
    element = document.getElementById("popup");
    element.style.visibility = "visible";
    element.style.opacity = "1";
}