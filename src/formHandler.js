document.getElementById("form").onload=function() {
//document.addEventListener("DOMContentLoaded", function(){
	//console.log(url)
	//var URL = Object.values(url);
	//document.getElementById("form").src = URL[0];

	if (countLoadTime == 0) {
			console.log(url);
			//gets array of prefilled url's
			var prefilledUrl = Object.values(url);
			//console.log(prefilledUrl);
			//gets url based on currentLoadTime index
			document.getElementById("form").src = prefilledUrl[countLoadTime];
			console.log(prefilledUrl[0]);
			//console.log(prefilled[countLoadTime]);
			//increment countLoadTime
			countLoadTime++;
			console.log('HEY HEY HEY HEY HEY HEY HEY HEY ' + countLoadTime);
			}
	else if (loadFlag == 0) {
		loadFlag = 1;
	}
	else {		
			//get array of prefilled url's
			var prefilledUrl = Object.values(url);
			//get url based on new countLoadTime?
			document.getElementById("form").src = prefilledUrl[countLoadTime];
			//resets the loadFlag?
			loadFlag = 0;
			console.log('HEY HEY HEY HEY HEY HEY HEY HEY ');

		}
	};
	
	//console.log(URL);
	//document.getElementById("form").src = URL[0];

var loadFlag = 0;
var countLoadTime = 0;


//document.getElementById("form").addEventListener("load",function(){
