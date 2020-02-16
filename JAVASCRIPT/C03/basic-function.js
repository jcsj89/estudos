//function for calculate area and volume
function getSize(width, heigth, depth) {
	var area = width * heigth;
	var volume = width * heigth * depth;
	var sizes = [area, volume];
	return sizes;
}

//anonimous functions
var area = function (width, heigth) {
	return width * heigth;
}

// function IIFE
var area2 = ( function () {
	var width = 50;
	var heigth =35;
	return width * heigth;
}() );

var elA = document.getElementById('area');
elA.textContent = area2;

var elB = document.getElementById('vol');
elB.textContent = area(10,10);