var price;
var quantity;
var total;

price = 20;
quantity = 34;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;