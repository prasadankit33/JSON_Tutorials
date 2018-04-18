//asynchronous - data arrives continously
var spaceData;
function setup() 
{createCanvas(200,200);
  data = loadJSON("http://api.open-notify.org/astros.json",gotData,"jsonp");		//jsonp for JSON padding security purposes
}

function gotData(data)
{spaceData = data;
}

function draw()
{var x;
background(0);
	if(spaceData)		//wait until data is loaded and then execute 
	{randomSeed(4);
	console.log(spaceData);
	for(var i=0;i<spaceData.number;i++)
		ellipse(random(width),random(height),16,16);
 	}
 	strokeWeight(2);
 	line(x,0,x,height);
	x = x+1;
	stroke(2);
		if(x>width)
		{
			x=0;
		}
	 
}