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

function openDropdown(id) {
  var plus_id = id + "Plus"
  var minus_id = id + "Minus"
  var answer_id = id + "Answer"
  // make plus sign disappear
  var plus_element = document.getElementById(plus_id);
  plus_element.style.display = "none"

  // make minus sign appear
  var minus_element = document.getElementById(minus_id);
  minus_element.style.display = "flex"

  // make content appear 
  var answer_element = document.getElementById(answer_id);
  answer_element.style.display = "block"
}

function closeDropdown(id) {
  var plus_id = id + "Plus"
  var minus_id = id + "Minus"
  var answer_id = id + "Answer"
  // make plus sign appear
  var plus_element = document.getElementById(plus_id);
  plus_element.style.display = "flex"

  // make minus sign disappear
  var minus_element = document.getElementById(minus_id);
  minus_element.style.display = "none"

  // make content disappear 
  var answer_element = document.getElementById(answer_id);
  answer_element.style.display = "none"
}