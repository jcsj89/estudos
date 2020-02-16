/* uma maneira de criar um objeto
var hotel = {
	name : 'Quay',
	rooms : 40,
	booked : 25,
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};
*/
var hotel = new Object();
hotel.name = 'Santana';
hotel.rooms = 55;
hotel.booked = 23;
hotel.checkAvailability = function () {
	return this.rooms - this.booked;
} 
hotel['name'] = 'Santa';
// delete hotel.name;

function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;

	this.checkAvailability = function () {
		return this.rooms - this.booked;
	}
}

var SantaHotel = new Hotel('Santana', 200, 120);


var elName = document.getElementById('hotelName');
elName.textContent = SantaHotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = SantaHotel.checkAvailability();