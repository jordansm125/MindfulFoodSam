//document.getElementById("form").onload=function(){
document.addEventListener("DOMContentLoaded", function(){
	var URL = Object.values(url);
	console.log(URL[0]);
	if (countLoadTime=0){
			console.log(url);
			//gets array of prefilled url's
			var prefilledUrl = Object.values(url);
			console.log(prefilledUrl);
			//gets url based on currentLoadTime index
			document.getElementById("DOMContentLoaded").src = prefilled[countLoadTime];
			console.log(prefilled[countLoadTime]);
			//increment countLoadTime
			countLoadTime++;
			}
	else if(loadFlag=0){
		loadFlag = 1;
	}
	else{		
			//get array of prefilled url's
			var prefilledUrl = Object.values(url);
			//get url based on new countLoadTime?
			document.getElementById("DOMContentLoaded").src = prefilledUrl[countLoadTime];
			//resets the loadFlag?
			loadFlag = 0;
		}
	});
var loadFlag = 0;
var countLoadTime = 0;


	//console.log(URL);
	//document.getElementById("form").src = URL[0];




//document.getElementById("form").addEventListener("load",function(){
