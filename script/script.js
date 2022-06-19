$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function openNav() {
  document.getElementById("mobileExtendedNav").style.display = "block";
}
function closeNav() {
  document.getElementById("mobileExtendedNav").style.display = "none";
}