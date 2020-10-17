window.onload=function(){
	  var el = document.getElementById("wordSubmit");
	  el.addEventListener("click", function(event) {
	  event.preventDefault();
	  const value = document.getElementById("wordInput").value;
	  if (value === "")
	    return;
	  console.log(value);

	  fetch("https://rapidapi.p.rapidapi.com/words/" + value + "/definitions", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
			"x-rapidapi-key": "b0c0d90426msh5005b0082a5e613p1e300ejsn688ca2b295d5"
		}
	})
	.then(function(response) {
	      return response.json();
	}).then(function(json) {
	      let results = '<h3>Definition(s):</h3>';
	      results += '<ol>';
	      for (let i = 0; i < json.definitions.length; i++) {
		      results += '<li>(' + json.definitions[i].partOfSpeech + ')  ' + json.definitions[i].definition + '</li>';
	      }
              results += '</ol>';
	      document.getElementById("definition").innerHTML = results;    
	})
	.catch(err => {
		console.log(err);
	});
		  
	fetch("https://rapidapi.p.rapidapi.com/words/" + value + "/synonyms", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
			"x-rapidapi-key": "b0c0d90426msh5005b0082a5e613p1e300ejsn688ca2b295d5"
		}
	}).then(function(json) {
	      let results = '<h3>Synonyms:</h3>';
	      results += '<p>';
	      for (let i = 0; i < json.synonyms.length - 1; i++) {
		      results += json.synonyms[i] + ', ';
	      }
	      results += json.synonyms[json.synonyms.length - 1];
              results += '</p>';
	      document.getElementById("definition").innerHTML = results;    
	})
	.catch(err => {
		console.error(err);
	});
		  
  });
}
