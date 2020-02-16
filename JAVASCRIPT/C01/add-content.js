var today = new Date();
var hourNow = today.getHours();
var greeting;


if(hourNow > 18){
	greeting = 'good evening';
}else if ( hourNow > 12 ) {
	greeting = 'good afternon';
}else if (hourNow > 0 ){
	greeting = 'good morning';
}	else {
	greeting = 'welcome';
}

document.write('<h3>'+greeting+'  '+hourNow+'</h3>');