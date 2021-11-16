var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
/* lấy giá trị của id="cost" trong file HTML */
el.textContent = '$' + total; /* thay vào đó hiển ra dòng này*/

