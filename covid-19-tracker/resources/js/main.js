$(document).ready(function() {
	$.getJSON("https://api.covid19api.com/summary", function(data){
	//console.log(data);
	const formatter = new Intl.NumberFormat('en');
	var globalConfirmed = data.Global.TotalConfirmed;
	var globalNewConfirmed = data.Global.NewConfirmed;
	var globalRecovered = data.Global.TotalRecovered;
	var globalNewRecovered = data.Global.NewRecovered;
	var globalDeaths = data.Global.TotalDeaths;
	var globalNewDeaths = data.Global.NewDeaths;

 		
 		
 	

 		document.getElementById('world-value-1').innerHTML = formatter.format(globalConfirmed);
 		document.getElementById('world-value-2').innerHTML = "+" + formatter.format(globalNewConfirmed);
 		document.getElementById('world-value-3').innerHTML = formatter.format(globalRecovered);
 		document.getElementById('world-value-4').innerHTML = "+" + formatter.format(globalNewRecovered);
 		document.getElementById('world-value-5').innerHTML = formatter.format(globalDeaths);
 		document.getElementById('world-value-6').innerHTML = "+" + formatter.format(globalNewDeaths);

 		// Kosovë

 		var kosovoConfirmed = data.Countries[136].TotalConfirmed;
 		var kosovoNewConfirmed = data.Countries[136].NewConfirmed;
 		var kosovoDeaths = data.Countries[136].TotalDeaths;
 		var kosovoNewDeaths = data.Countries[136].NewDeaths;
 		var kosovoRecovered = data.Countries[136].TotalRecovered;
 		var kosovoNewRecovered = data.Countries[136].NewRecovered;


 		document.getElementById('kosovo-value-1').innerHTML = formatter.format(kosovoConfirmed);
 		document.getElementById('kosovo-value-2').innerHTML = "+" + formatter.format(kosovoNewConfirmed);
 		document.getElementById('kosovo-value-3').innerHTML = formatter.format(kosovoRecovered);
 		document.getElementById('kosovo-value-4').innerHTML = "+" + formatter.format(kosovoNewRecovered);
 		document.getElementById('kosovo-value-5').innerHTML = formatter.format(kosovoDeaths);
 		document.getElementById('kosovo-value-6').innerHTML = "+" + formatter.format(kosovoNewDeaths);

 		// Shqipëri

 		var albaniaConfirmed = data.Countries[1].TotalConfirmed;
 		var albaniaNewConfirmed = data.Countries[1].NewConfirmed;
 		var albaniaDeaths = data.Countries[1].TotalDeaths;
 		var albaniaNewDeaths = data.Countries[1].NewDeaths;
 		var albaniaRecovered = data.Countries[1].TotalRecovered;
 		var albaniaNewRecovered = data.Countries[1].NewRecovered;


 		document.getElementById('albania-value-1').innerHTML = formatter.format(albaniaConfirmed);
 		document.getElementById('albania-value-2').innerHTML = "+" + formatter.format(albaniaNewConfirmed);
 		document.getElementById('albania-value-3').innerHTML = formatter.format(albaniaRecovered);
 		document.getElementById('albania-value-4').innerHTML = "+" + formatter.format(albaniaNewRecovered);
		document.getElementById('albania-value-5').innerHTML = formatter.format(albaniaDeaths);
 		document.getElementById('albania-value-6').innerHTML = "+" + formatter.format(albaniaNewDeaths);

/*
 		// */
});
	});

$(document).ready(function() {
	$.getJSON("https://api.covid19api.com/summary", function(data){
	const formatter = new Intl.NumberFormat('en');

	//Gjermani

 		var germanyConfirmed = data.Countries[63].TotalConfirmed;
 		var germanyNewConfirmed = data.Countries[63].NewConfirmed;
 		var germanyDeaths = data.Countries[63].TotalDeaths;
 		var germanyNewDeaths = data.Countries[63].NewDeaths;
 		var germanyRecovered = data.Countries[63].TotalRecovered;
 		var germanyNewRecovered = data.Countries[63].NewRecovered;


 		document.getElementById('germany-value-1').innerHTML = formatter.format(germanyConfirmed);
 		document.getElementById('germany-value-2').innerHTML = "+" + formatter.format(germanyNewConfirmed);
 		document.getElementById('germany-value-3').innerHTML = formatter.format(germanyRecovered);
 		document.getElementById('germany-value-4').innerHTML = "+" + formatter.format(germanyNewRecovered);
 		document.getElementById('germany-value-5').innerHTML = formatter.format(germanyDeaths);
 		document.getElementById('germany-value-6').innerHTML = "+" + formatter.format(germanyNewDeaths);

 		//Zvicër

 		var swissConfirmed = data.Countries[162].TotalConfirmed;
 		var swissNewConfirmed = data.Countries[162].NewConfirmed;
 		var swissDeaths = data.Countries[162].TotalDeaths;
 		var swissNewDeaths = data.Countries[162].NewDeaths;
 		var swissRecovered = data.Countries[162].TotalRecovered;
 		var swissNewRecovered = data.Countries[162].NewRecovered;


 		document.getElementById('swiss-value-1').innerHTML = formatter.format(swissConfirmed);
 		document.getElementById('swiss-value-2').innerHTML = "+" + formatter.format(swissNewConfirmed);
 		document.getElementById('swiss-value-3').innerHTML = formatter.format(swissRecovered);
 		document.getElementById('swiss-value-4').innerHTML = "+" + formatter.format(swissNewRecovered);
 		document.getElementById('swiss-value-5').innerHTML = formatter.format(swissDeaths);
 		document.getElementById('swiss-value-6').innerHTML = "+" + formatter.format(swissNewDeaths);


 		//USA

 		var usaConfirmed = data.Countries[177].TotalConfirmed;
 		var usaNewConfirmed = data.Countries[177].NewConfirmed;
 		var usaDeaths = data.Countries[177].TotalDeaths;
 		var usaNewDeaths = data.Countries[177].NewDeaths;
 		var usaRecovered = data.Countries[177].TotalRecovered;
 		var usaNewRecovered = data.Countries[177].NewRecovered;


 		document.getElementById('usa-value-1').innerHTML = formatter.format(usaConfirmed);
 		document.getElementById('usa-value-2').innerHTML = "+" + formatter.format(usaNewConfirmed);
 		document.getElementById('usa-value-3').innerHTML = formatter.format(usaRecovered);
 		document.getElementById('usa-value-4').innerHTML = "+" + formatter.format(usaNewRecovered);
 		document.getElementById('usa-value-5').innerHTML = formatter.format(usaDeaths);
 		document.getElementById('usa-value-6').innerHTML = "+" + formatter.format(usaNewDeaths);

 		//Suedi

 		var swedenConfirmed = data.Countries[161].TotalConfirmed;
 		var swedenNewConfirmed = data.Countries[161].NewConfirmed;
 		var swedenDeaths = data.Countries[161].TotalDeaths;
 		var swedenNewDeaths = data.Countries[161].NewDeaths;
 		var swedenRecovered = data.Countries[161].TotalRecovered;
 		var swedenNewRecovered = data.Countries[161].NewRecovered;


 		document.getElementById('sweden-value-1').innerHTML = formatter.format(swedenConfirmed);
 		document.getElementById('sweden-value-2').innerHTML = "+" + formatter.format(swedenNewConfirmed);
 		document.getElementById('sweden-value-3').innerHTML = formatter.format(swedenRecovered);
 		document.getElementById('sweden-value-4').innerHTML = "+" + formatter.format(swedenNewRecovered);
 		document.getElementById('sweden-value-5').innerHTML = formatter.format(swedenDeaths);
 		document.getElementById('sweden-value-6').innerHTML = "+" + formatter.format(swedenNewDeaths);

 		//Austri

 		var austriaConfirmed = data.Countries[9].TotalConfirmed;
 		var austriaNewConfirmed = data.Countries[9].NewConfirmed;
 		var austriaDeaths = data.Countries[9].TotalDeaths;
 		var austriaNewDeaths = data.Countries[9].NewDeaths;
 		var austriaRecovered = data.Countries[9].TotalRecovered;
 		var austriaNewRecovered = data.Countries[9].NewRecovered;


 		document.getElementById('austria-value-1').innerHTML = formatter.format(austriaConfirmed);
 		document.getElementById('austria-value-2').innerHTML = "+" + formatter.format(austriaNewConfirmed);
 		document.getElementById('austria-value-3').innerHTML = formatter.format(austriaRecovered);
 		document.getElementById('austria-value-4').innerHTML = "+" + formatter.format(austriaNewRecovered);
 		document.getElementById('austria-value-5').innerHTML = formatter.format(austriaDeaths);
 		document.getElementById('austria-value-6').innerHTML = "+" + formatter.format(austriaNewDeaths);
	});
})