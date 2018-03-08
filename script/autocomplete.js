// Autocomplete for search function
$(function() {
	var availableTags = [
		"40 (Westbound) from Mississauga City Center",
		"40A (Westbound) from Mississauga City Center",
		"46 (Westbound) from Mississauga City Center",
		"46A (Westbound) from Mississauga City Center",
		"47 (Westbound) from Mississauga City Center",
		"47B (Westbound) from Mississauga City Center",
		"21 (Westbound) from Mississauga City Center",
		"21A (Westbound) from Mississauga City Center",
		"21P (Westbound) from Mississauga City Center",
		"45 (Westbound) from Mississauga City Center",
		"29 (Westbound) from Mississauga City Center",
		"29B (Westbound from Mississauga City Center",
		"25 (Westbound) from Mississauga City Center",
		"25C (Westbound) from Mississauga City Center",
		"45 (Eastbound) from Mississauga City Center",
		"45A (Eastbound) from Mississauga City Center",
		"47A (Eastbound) from Mississauga City Center",
		"46 (Eastbound) from Mississauga City Center",
		"47 (Eastbound) from Mississauga City Center",
		"40 (Eastbound) from Mississauga City Center",
		"40A (Eastbound) from Mississauga City Center",
		"19A (Eastbound) from Mississauga City Center",
		"19B (Eastbound) from Mississauga City Center",
		"19C (Eastbound) from Mississauga City Center",
		"21 (Eastbound) from Mississauga City Center",
		"21A (Eastbound) from Mississauga City Center",
		"21H (Eastbound) from Mississauga City Center",
		"21J (Eastbound) from Mississauga City Center",
		"21K (Eastbound) from Mississauga City Center",
		"21P (Eastbound) from Mississauga City Center",
		"25 (Eastbound) from University of Waterloo",
		"25B (Eastbound) from University of Waterloo",
		"25C (Eastbound) from University of Waterloo",
		"25D (Eastbound) from University of Waterloo",
		"25 (Eastbound) from Laurier University",
		"25C (Eastbound) from Laurier University",
		"25D (Eastbound) from Laurier University",
		"25F (Eastbound) from Laurier University",
		"25 (Eastbound) from Waterloo Bus Terminal",
		"30 (Eastbound) from Waterloo Bus Terminal",
		"30 (Eastbound) from Waterloo Train Station",
		"51 (Westbound) from Richmond Hill Center",
		"52 (Westbound) from Richmond Hill Center",
		"52B (Westbound) from Richmond Hill Center",
		"54 (Westbound) from Richmond Hill Center",
		"40 (Westbound) from Richmond Hill Center",
		"51 (Eastbound) from Richmond Hill Center",
		"51D (Eastbound) from Richmond Hill Center",
		"52 (Eastbound) from Richmond Hill Center",
		"52B (Eastbound) from Richmond Hill Center",
		"54 (Eastbound) from Richmond Hill Center",
		"48A (Westbound) from York University",
		"25F (Westbound) from York University",
		"48 (Westbound) from York University",
		"48B (Westbound) from York University",
		"48F (Westbound) from York University",
		"47F (Westbound) from York University",
		"46 (Westbound) from York University",
		"47 (Westbound) from York University",
		"45 (Westbound) from York University",
		"45A (Westbound) from York University",
		"51 (Eastbound) from York University",
		"51A (Eastbound) from York University",
		"51C (Eastbound) from York University",
		"51B (Eastbound) from York University",
		"54C (Eastbound) from York University",
		"52 (Eastbound) from York University",
		"52B (Eastbound) from York University",
		"54 (Eastbound) from York University",
	];
	$("#bus-input").autocomplete({
		source: availableTags
	});
});

// Activates the zoom to bus stop function based on what's in the serach box
$(document).ready(function() {
  $('#search-button').click(function() {
    zoomToBusStop($('#bus-input').val());
  });
});

// Allows the user to search by pressing the enter key
$("#bus-input").keyup(function(event){
  if(event.keyCode == 13){
    $("#search-button").click();
  }
});
