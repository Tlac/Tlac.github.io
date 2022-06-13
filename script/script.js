// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}
  
$(function () {
    $(document).scroll(function () {
        var $nav = $(".w3-bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});