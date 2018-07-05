//Original link: https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=001&entry.1677717347=AGj1epXuO8gRtXUT8nA3niJR4tns3vS0bNqU3iHr59T1FL3FfFREjrvIognsUiqqylW9QOiNilZldeI&entry.508960362=Fats+%3D+40g,+Carbohydrates+%3D+30g,+Proteins+%3D+30g&entry.633250211=Noodles%0ATomato&entry.1002918663=Chopped&entry.1731606717=Boiled%0AStir+Fried
/*function Parsing(){
	console.log(url);
	var array = Object.values(url);
	var currentImage = 0;
	var lastImage = array.length-1;
	//console.log(url[0]);
	if (currentImage==lastImage)
		{
			currentImage = 0;
			var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347=' + array[currentImage];
			//var prefilledForm = url[currentImage]
			console.log(prefilledForm);
			}
	else{
		currentImage++;
		var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347=' + array[currentImage];
		//	var prefilledForm = url[currentImage]
			//console.log(prefilledForm);
			}
}*/
var url;
d3.csv("./images4.csv",function (data) {
	var ID = data.map(function(d) {return d.imageId});
	console.log(ID);
	fullUrl = [];
	for (i =0; i < ID.length; i++){
		var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347="' + ID[i]+'"';
		fullUrl.push(prefilledForm);
		}
	//console.log(fullUrl);
	url = fullUrl;
	//Parsing();
	//console.log(typeof url);
	//console.log(Object.values(url));
	//console.log(Object.values(url));
});
//console.log(url);




	
			
	///console.log(ID.length);
	

	//console.log(fullUrl);