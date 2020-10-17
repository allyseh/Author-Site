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
	      let results = "";
	      results += '<ol>';
	      for (let i = 0; i < json.definitions.length; i++) {
		      results += '<li>' + json.definitions[i].definition + '<br>    (' + json.definitions[i].partOfSpeech + ')</li>';
	      }
              results += '</ol>';
	      document.getElementById("definition").innerHTML = results;    
	})
	.catch(err => {
		console.log(err);
	});
		  
  });
}
