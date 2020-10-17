window.onload=function(){
	  var el = document.getElementById("wordSubmit");
	  el.addEventListener("click", function(event) {
	  event.preventDefault();
	  const value = document.getElementById("wordInput").value;
	  if (value === "")
	    return;
	  console.log(value);

	  const url = "https://rapidapi.p.rapidapi.com/words/" + value + "/definitions";
	  fetch(url, {
	      "method": "GET",
	      "headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "b0c0d90426msh5005b0082a5e613p1e300ejsn688ca2b295d5"
	      }
	  })
	  .then(response => {
	    console.log(response);
	  })
	  .catch(err => {
	    console.error(err);
	  });
    
    
	  /*    let results = "";
	      results += ' <div class="currWeather"> <div class="clmn1"> <h2>Weather in ' + json.name + "</h2>";
	      for (let i=0; i < json.weather.length; i++) {
		results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png" width="100%"/>';
	      }
	      results += "<p>"
	      for (let i=0; i < json.weather.length; i++) {
		results += json.weather[i].description
		if (i !== json.weather.length - 1)
		  results += ", "
	      }
	      results += "</p>";
	      results += '<h2>' + json.main.temp + " &deg;F</h2>"
	      results += '<h3>' + "(Feels like: " + json.main.feels_like + " &deg;F)</h3> </div>"
	      results += '<div class="clmn2"> <h3>' + "Humidity: " + json.main.humidity + " %</h3>"
	      results += '<h3>' + "Wind: " + json.wind.speed + " mph</h3> </div> </div>"
	      document.getElementById("weatherResults").innerHTML = results;
	    });
		  
	  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=1c38c9a4ce98dd5b87a2027e6961cf14";
	  fetch(url2)
	    .then(function(response) {
	      return response.json();
	    }).then(function(json) {
	      let forecast = '<h2 class="forecastHdr">5 Day Forecast: ';
	      let forecastDay = json.list[0].dt_txt.substr(0,10)
	      forecast += '<h2 class="forecastDay">' 
		      + moment(json.list[0].dt_txt).format('MMMM Do YYYY') + "</h2>" 
		      + '</h2> <div class="forecastRow">'
	      for (let i=0; i < json.list.length; i++) {
		if (json.list[i].dt_txt.substr(0,10) !== forecastDay) {
		    forecastDay = json.list[i].dt_txt.substr(0,10);
		    forecast += '</div> <h2 class="forecastDay">' 
			    + moment(json.list[i].dt_txt).format('MMMM Do YYYY') 
			    + '</h2> <div class="forecastRow">';
		}
		forecast += '<div class="forecastDetails">';
		forecast += '<h3>' + moment(json.list[i].dt_txt).format('h:mm a') + '</h3>';
		forecast += "<p>Temperature: " + json.list[i].main.temp + " &deg;F</p>";
		forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
		forecast += '<p>' + json.list[i].weather[0].description + '</p>';
		forecast += '<h4>' + "Probability of " + '<br>' + "Precipitation: " + (json.list[i].pop * 100) + "%</h4> </div>";
	      }
	      forecast += "</div>";
	      document.getElementById("forecastResults").innerHTML = forecast;
	    }); 
	});  */
  
}
