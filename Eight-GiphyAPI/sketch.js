var api = "http://api.giphy.com/v1/gifs/search?";
var api_key = "&api_key=dc6zaTOxFJmzC";
var query = "&q=man";

function setup()
{
	noCanvas();
	var url = api+api_key+query;
	loadJSON(url,gotData);
}

function gotData(data)
{
	console.log(data.data[0].images.original.url);
}

function draw()
{

}