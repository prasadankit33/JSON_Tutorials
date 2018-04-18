var bird;

function preload() 
{
  bird = loadJSON("birds.json",showData,"jsonp");
}

function showData(data)
{
  console.log(data);
}

function setup()
{
  //createCanvas(400, 400);
  // var bird = data.birds[1].members[2];
  //createP[bird];

  var birds = bird.birds;	//bird.birds is path which is birds.json->birds

  for (var i = 0; i < birds.length; i++) 
  {
    createElement('h1', birds[i].family);
    var members = birds[i].members;		//array of birds
    for (var j = 0; j < members.length; j++) 
    {
      createDiv(members[j]);	//create division
    }
  }
}