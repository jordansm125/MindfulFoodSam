var url;

d3.csv("./images4.csv",function (data) {
	var ID = data.map(function(d) {return d.imageId});
	//console.log(url)
	var fullUrl = [];
	for (i =0; i < ID.length; i++){
		var prefilledForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeJvrnlwHIr7Oqjuh7B2EA6NDFiSJ5uytflof1LydrF9DxSaw/viewform?usp=pp_url&entry.886282136=&entry.1677717347=' + ID[i];
		fullUrl.push(prefilledForm);
		}
	//console.log(fullUrl);
	url = fullUrl;
	//Parsing();
	//console.log(typeof url);
	//console.log(Object.values(url));
	//console.log(Object.values(url));
});
console.log(url);




	
			
	///console.log(ID.length);
	

	//console.log(fullUrl);