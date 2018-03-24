var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/165cc85ef4b7a66b/conditions/forecast/q/MN/Springfield.json', true);


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
      document.getElementById('high').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('low').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;
    
    document.getElementById('dayone').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    document.getElementById('daytwo').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    document.getElementById('daythree').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    document.getElementById('dayfour').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    document.getElementById('dayfive').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    document.getElementById('daysix').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    document.getElementById('dayseven').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    document.getElementById('dayeight').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    document.getElementById('daynine').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
    document.getElementById('dayten').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["10"].high.fahrenheit;
    
} //end of onload

