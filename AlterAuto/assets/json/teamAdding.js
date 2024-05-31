window.onload = function() {
    var popup = document.getElementById("myPopup");
    var span = document.getElementsByClassName("close")[0];

    window.setTimeout(function() {
        popup.style.display = "block";
    }, 3000); // Появление окна через 3 секунды

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}