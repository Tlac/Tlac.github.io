function zoomToBusStop(busInfo){
	var busNumber = busInfo.split(" ")[0];
	var busDirection = busInfo.split(" ")[1];
	var busStop = busInfo.split(" ").slice(3).join(" ");
	// Zooming to certain cities functionality
	var cityCenterPlat1 = L.latLng(43.59450324938348, -79.64728742837906);
	var cityCenterPlat2 = L.latLng(43.59465671124928, -79.64756369590759);
	var cityCenterPlat3 = L.latLng(43.59481211527152, -79.64782118797302);
	var cityCenterPlat4 = L.latLng(43.59500248465185, -79.64814573526382);
	var cityCenterPlat5 = L.latLng(43.595181198215926, -79.64846760034561);
	var cityCenterPlat6 = L.latLng(43.595350198598055, -79.64876532554625);
	var cityCenterPlat8 = L.latLng(43.59509572657757, -79.64857757091522);
	var cityCenterPlat9 = L.latLng(43.59491701275966, -79.64826107025145);
	var cityCenterPlat10 = L.latLng(43.594740240961116, -79.64794188737869);
	var cityCenterPlat11 = L.latLng(43.594582894198126, -79.6476736664772);
	var cityCenterPlat12 = L.latLng(43.594419719342696, -79.6474027633667);

  var uWaterlooPlat1 = L.latLng(43.473091607899036, -80.54171562194823);

	var uLaurierPlat1 = L.latLng(43.47526967144757, -80.52731484174728);

	var waterlooBusStationPlat1 = L.latLng(43.44967879547074, -80.49197673797607);

	var waterlooTrainStationPlat1 = L.latLng(43.45561754467013, -80.49282968044281);

	var richmondHillBusStationPlat9 = L.latLng(43.84031540126628, -79.42539364099503);
	var richmondHillBusStationPlat10 = L.latLng(43.84016643649306, -79.42526757717133);
	var richmondHillBusStationPlat11 = L.latLng(43.840050359788556, -79.42517101764679);

	var yorkUniversityBusStationPlat2 = L.latLng(43.77283695568777, -79.5021665096283);
	var yorkUniversityBusStationPlat3 = L.latLng(43.772933795194234, -79.5017158985138);
	var yorkUniversityBusStationPlat4 = L.latLng(43.773108105910765, -79.50102925300598);
	var yorkUniversityBusStationPlat5 = L.latLng(43.77324368056125, -79.5004016160965);
	var yorkUniversityBusStationPlat6 = L.latLng(43.77328628967364, -79.50017631053925);
	var yorkUniversityBusStationPlat7 = L.latLng(43.773352140060325, -79.49985980987549);
	var yorkUniversityBusStationPlat8 = L.latLng(43.773402496189476, -79.4996452331543);

	if ((busNumber.toLowerCase() == "40" || busNumber.toLowerCase() == "40a") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat1 , 18);
	} else if ((busNumber.toLowerCase() == "46" || busNumber.toLowerCase() == "46a" || busNumber.toLowerCase() == "47") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat2 , 18);
	} else if ((busNumber.toLowerCase() == "47b") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat3 , 18);
	} else if ((busNumber.toLowerCase() == "21" || busNumber.toLowerCase() == "21a" || busNumber.toLowerCase() == "21p" || busNumber.toLowerCase() == "45") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat4 , 18);
	} else if ((busNumber.toLowerCase() == "29" || busNumber.toLowerCase() == "29b") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat5 , 18);
	} else if ((busNumber.toLowerCase() == "25" || busNumber.toLowerCase() == "25c") && busDirection == "(Westbound)"){
		mymap.setView(cityCenterPlat6 , 18);
	} else if ((busNumber.toLowerCase() == "45" || busNumber.toLowerCase() == "45a" || busNumber.toLowerCase() == "47a") && busDirection == "(Eastbound)"){
		mymap.setView(cityCenterPlat8 , 18);
	} else if ((busNumber.toLowerCase() == "46" || busNumber.toLowerCase() == "47") && busDirection == "(Eastbound)"){
		mymap.setView(cityCenterPlat9 , 18);
	} else if ((busNumber.toLowerCase() == "40" || busNumber.toLowerCase() == "40a") && busDirection == "(Eastbound)"){
		mymap.setView(cityCenterPlat10 , 18);
	} else if ((busNumber.toLowerCase() == "19a" || busNumber.toLowerCase() == "19b" || busNumber.toLowerCase() == "19c") && busDirection == "(Eastbound)"){
		mymap.setView(cityCenterPlat11 , 18);
	} else if ((busNumber.toLowerCase() == "21" || busNumber.toLowerCase() == "21a" || busNumber.toLowerCase() == "21h" || busNumber.toLowerCase() == "21j" || busNumber.toLowerCase() == "21k" || busNumber.toLowerCase() == "21p") && busDirection == "(Eastbound)"){
		mymap.setView(cityCenterPlat12 , 18);
	} else if ((busNumber.toLowerCase() == "25" || busNumber.toLowerCase() == "25b" || busNumber.toLowerCase() == "25c" || busNumber.toLowerCase() == "25f") && busDirection == "(Eastbound)" && busStop == "University of Waterloo"){
		mymap.setView(uWaterlooPlat1 , 18);
	} else if ((busNumber.toLowerCase() == "25" || busNumber.toLowerCase() == "25c" || busNumber.toLowerCase() == "25d" || busNumber.toLowerCase() == "25f") && busDirection == "(Eastbound)" && busStop == "Laurier University"){
		mymap.setView(uLaurierPlat1 , 18);
	} else if ((busNumber.toLowerCase() == "25" || busNumber.toLowerCase() == "30") && busDirection == "(Eastbound)" && busStop == "Waterloo Bus Terminal"){
		mymap.setView(waterlooBusStationPlat1 , 18);
	} else if ((busNumber.toLowerCase() == "30") && busDirection == "(Eastbound)" && busStop == "Waterloo Train Station"){
		mymap.setView(waterlooTrainStationPlat1 , 18);
	} else if ((busNumber.toLowerCase() == "51" || busNumber.toLowerCase() == "52" || busNumber.toLowerCase() == "52b" || busNumber.toLowerCase() == "54") && busDirection == "(Westbound)" && busStop == "Richmond Hill Center"){
		mymap.setView(richmondHillBusStationPlat9 , 18);
	} else if ((busNumber.toLowerCase() == "40") && busDirection == "(Westbound)" && busStop == "Richmond Hill Center"){
		mymap.setView(richmondHillBusStationPlat10 , 18);
	} else if ((busNumber.toLowerCase() == "51" || busNumber.toLowerCase() == "51d" || busNumber.toLowerCase() == "52" || busNumber.toLowerCase() == "52b" || busNumber.toLowerCase() == "54") && busDirection == "(Eastbound)" && busStop == "Richmond Hill Center"){
		mymap.setView(richmondHillBusStationPlat11 , 18);
	} else if ((busNumber.toLowerCase() == "48a" || busNumber.toLowerCase() == "25f") && busDirection == "(Westbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat2 , 18);
	} else if ((busNumber.toLowerCase() == "48" || busNumber.toLowerCase() == "48b" || busNumber.toLowerCase() == "48f" || busNumber.toLowerCase() == "47f") && busDirection == "(Westbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat3 , 18);
	} else if ((busNumber.toLowerCase() == "46" || busNumber.toLowerCase() == "47") && busDirection == "(Westbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat4 , 18);
	} else if ((busNumber.toLowerCase() == "45" || busNumber.toLowerCase() == "45a") && busDirection == "(Westbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat5 , 18);
	} else if ((busNumber.toLowerCase() == "51" || busNumber.toLowerCase() == "51a" || busNumber.toLowerCase() == "51c") && busDirection == "(Eastbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat6 , 18);
	} else if ((busNumber.toLowerCase() == "51b" || busNumber.toLowerCase() == "54c") && busDirection == "(Eastbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat7 , 18);
	} else if ((busNumber.toLowerCase() == "52" || busNumber.toLowerCase() == "52b" || busNumber.toLowerCase() == "54") && busDirection == "(Eastbound)" && busStop == "York University"){
		mymap.setView(yorkUniversityBusStationPlat8 , 18);
	}
}
