var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/165cc85ef4b7a66b/conditions/forecast/q/MN/Franklin.json', true);


weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
     document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('currentSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
     document.getElementById('textForecast').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    
} //end of onload


