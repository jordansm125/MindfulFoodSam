//Original link: https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=001&entry.1677717347=AGj1epXuO8gRtXUT8nA3niJR4tns3vS0bNqU3iHr59T1FL3FfFREjrvIognsUiqqylW9QOiNilZldeI&entry.508960362=Fats+%3D+40g,+Carbohydrates+%3D+30g,+Proteins+%3D+30g&entry.633250211=Noodles%0ATomato&entry.1002918663=Chopped&entry.1731606717=Boiled%0AStir+Fried

d3.csv("./images4.csv",function (data) {
  // 	var URL = data.map(function(d) {return d.imageUrl});
   	   	//console.log(URL[0]);
   	var id = data.map(function(d) {return d.imageId});
   	 //document.getElementById("form").innerHTML = ('<iframe src=https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347="' + id[0] + '" </frame>');

	//starting with form
   //	document.getElementById("form").innerHTML = ('Submit')
   	document.getElementById("form").addEventListener("load", getPreFilledUrl());

   	document.getElementById("form").addEventListener("click", getPreFilledUrl);

   	//document.getElementById("form").innerHTML = ('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347=" width=1260 height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');



	var currentImage= 0;
	console.log(currentImage);
	var lastImage = id.length-1;
	console.log(lastImage);

	
function getPreFilledUrl(n)
		{
		var i;
			if (currentImage==lastImage)
				{
					currentImage = 0;
					var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347="' + id[currentImage] + '"';
					document.getElementById("form").innerHTML = ('<iframe src=' + prefilledForm +'width="1260" height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');
					document.getElementById("form").load = ('<iframe src=' + prefilledForm +'width="1260" height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');
					console.log(id[currentImage]);

					}
			else
				{
					currentImage++;
					var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347="' + id[currentImage] + '"';
					document.getElementById("form").innerHTML = ('<iframe src=' + prefilledForm +'width="1260" height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');
					document.getElementById("form").load = ('<iframe src=' + prefilledForm +'width="1260" height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');

					console.log(id[currentImage]);

				}
			}

					
	//var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347="' + id[0] + '"';
	//document.getElementById("form").innerHTML = ('<iframe src=' + prefilledForm +'width="1260" height="3300" align="left" frameborder="0" marginheight="0" marginwidth="150" style="background: #FFFFFF;">Loading...</iframe>');

	
});



	


	
			
