 var section = document.querySelector('section');

 var requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';
 var request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.responseType = 'json';
 request.send();
    
 request.onload = function() {
     var threeTowns = request.response;
     showTowns(threeTowns);
 }
 
 function showTowns(jsonObj) {
     var towns = jsonObj['towns'];
     
     for(var i = 0; i<towns.length; i++) {
          if(i===2){
              continue;
          }
         var myArticle = document.createElement('article');
         var cityName = document.createElement('h2');
         var cityMotto = document.createElement('p');
         var yearFounded = document.createElement('p');
         var cityPopulation = document.createElement('p');
         var annualRainfall = document.createElement('p');
         var cityEvents = document.createElement('ul')
         
         cityName.textContent = towns[i].name;
         cityMotto.textContent = 'Motto:' + towns[i].motto;
         yearFounded.textContent = 'Year Founded:' + towns[i].yearFounded;
         cityPopulation.textContent = 'Population:' + towns[i].currentPopulation;
         annualRainfall.textContent = 'Motto:' + towns[i].averageRainfall;
         cityEvents.textContent = 'City Events:';
         
         var events = towns[i].events;
         for(var j=0; j<events.length; j++){
             var listItem = document.createElement('li');
             listItem.textContent = events[j];
             cityEvents.appendChild(listItem);
         }
             
        myArticle.appendChild(cityName);
        myArticle.appendChild(cityMotto);
        myArticle.appendChild(yearFounded);
        myArticle.appendChild(cityPopulation);
        myArticle.appendChild(annualRainfall);
        myArticle.appendChild(cityEvents);
         
        section.appendChild(myArticle);
     }
 }