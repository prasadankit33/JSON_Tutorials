var lineX = 0;
var issX = 0;
var issY = 0;
var url;

function setup()
{
 url = "http://api.open-notify.org/iss-now.json";
setInterval(askISS,1000);		//syntax-> setInterval(function_name,time(in ms));
createCanvas(600,400);
}

function askISS()
{
loadJSON(url,gotData);

}


function gotData(data)
{ var lat  = data.iss_position.latitude;
  var lon  = data.iss_position.longitude;
  issX = map(lat,-45,-50,0,width);
  issY = map(lon,25,35,0,height);

}

function draw()
{
  background(51);
  fill(255);
  ellipse(issX,issY,24,24);

  stroke(255);
  line(lineX,0,lineX,height);
  lineX += 5;
  if(lineX>width)
    lineX = 0;
}