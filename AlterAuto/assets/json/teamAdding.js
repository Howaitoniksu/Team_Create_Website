window.onload = function() {
  var popup = document.getElementById("myPopup");
  var span = document.getElementsByClassName("close")[0];

  var lastShown = localStorage.getItem("popupLastShown");
  if (lastShown === null || new Date().getTime() - parseInt(lastShown) > 60000) {
    // If not, show the popup
    window.setTimeout(function() {
      popup.style.display = "block";
    }, 3000); // Появление окна через 3 секунды

    localStorage.setItem("popupLastShown", new Date().getTime());
  }

  span.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
}