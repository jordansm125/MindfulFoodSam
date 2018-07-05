d3.csv("./images4.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	   	//console.log(URL[0]);
   //	var id = data.map(function(d) {return d.imageId});
   	
   	// document.getElementById("imageLocation").innerHTML = ('<iframe src="' + URL[0] + '">Loading...</iframe>');


   	document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[0] + '"width = 500 height = 500>');
	
   	document.getElementById("imageLocation").addEventListener("click", nextslide);

   	var currentpic=0;
   //	console.log(currentpic);
   	var lastpic = URL.length-1;
   	function nextslide()
   		{
   			if (currentpic == lastpic)
   			{
   				currentpic = 0;
   				document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[currentpic] + '"width = 500 height = 500>');
				console.log(URL[currentpic]);
				   	console.log(currentpic);

				}
				else
				{
				currentpic++;
				document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[currentpic] + '"width = 500 height = 500>');
				console.log(URL[currentpic]);
				}
			} 

	});

//https://stackoverflow.com/questions/30658059/changing-images-using-on-click-with-arrays-in-javascript
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener

document.getElementById("form").onload=function(){		
	if (countLoadTime=0){
			var prefilledUrl = url;
			console.log(prefilledUrl);
			document.getElementById("form").src = url[countLoadTime];
			console.log(prefilledUrl);
			countLoadTime++;
			}
	else if(loadFlag=0){
		loadFlag = 1;
	}
	else{
			var prefilledUrl = P();
			document.getElementById("form").src = url[countLoadTime];
			loadFlag = 0;
		}
	}
//var url = Parsing();
//console.log(url);
var loadFlag = 0;
var countLoadTime = 0;