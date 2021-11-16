var title;
var message;
title = "Molly's Special Offers";
message = '<a href="/sale.html">25% off</a>';
var elTitle = document.getElementById(elementid: 'title');
elTitle.textContent = title;
var elNote = document.getElementById(elementid: 'note');
elNote.innerHTML = message;
