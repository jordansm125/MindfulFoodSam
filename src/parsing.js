d3.csv("./images4.csv",function (data) {
   	var URL = data.map(function(d) {return d.imageUrl});
   	   	console.log(URL[0]);
   	var id = data.map(function(d) {return d.imageId});
  	/** var i;
   	for (i = 0; i < URL.length; i++){
		 var images = ('<img src="' + URL[i] + '"/>');
		}
		return images; */
	document.getElementById("imageLocation").innerHTML = ('<img src="' + URL[4] + '"width = 500 height = 500>');
	
	
	//document.getElementById("imageLocation").innerHTML = ('<p>"' + URL[0] + '"</p>');
	//document.getElementById("imageLocation").innerHTML = (images);
	return id;
	});
