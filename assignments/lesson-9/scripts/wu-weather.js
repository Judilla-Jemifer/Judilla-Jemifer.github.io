var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/165cc85ef4b7a66b/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
     document.getElementById('currentTemp').innerHTML
    
} //end of onload