var inStock;
var shipping;

inStock = true;
shipping = false;

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elship = document.getElementById('shipping');
elship.className = shipping;