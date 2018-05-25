'use strict';
/*****************************************************
 ** weather-widgets.js
 ** 
 ** Javascript for Weather Widgets.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
/******************
 * Weather Widgets
 ******************/
$(document).ready(function() {
	var weatherIcons = new Skycons({"color": "white"});

	weatherIcons.set("clear-day", Skycons.CLEAR_DAY);
	weatherIcons.set("clear-night", Skycons.CLEAR_NIGHT);
	weatherIcons.set("sleet", Skycons.SLEET);
	weatherIcons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
	weatherIcons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
	weatherIcons.set("cloudy", Skycons.CLOUDY);
	weatherIcons.set("rain", Skycons.RAIN);
	weatherIcons.set("snow", Skycons.SNOW);
	weatherIcons.play();
});