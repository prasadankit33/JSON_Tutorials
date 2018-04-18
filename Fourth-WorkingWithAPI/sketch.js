//API- Application Programming Interface
//openweather.org/?   Here '?' indicates it would accept some parameters
//openweather.org/?city=Delhi	Here 'city = Delhi' is name-value pair
 
var weather;

function setup()
{loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=7a8a20b048ba0bfad5d3913707de0b37&units=metric",gotData,"jsonp");
createCanvas(500,500);
}

function gotData(data)
{
	weather =data;
	console.log(data);
}

function draw()
{background(0);
	if(weather)
	{stroke(255);
	ellipse(100,100,weather.main.temp,weather.main.temp);	
	ellipse(300,100,weather.main.humidity,weather.main.humidity);	
	}
}