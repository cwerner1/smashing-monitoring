/*global document */

/*

document.addEventListener("DOMContentLoaded", function() {
	'use strict';
	var test = document.querySelector('table');
	test.addEventListener("mouseover", function( event ) {
		if(event.target.hasAttribute('data-screenshot')){
			var img = document.querySelector('img').src = event.target.getAttribute('data-screenshot');
		}


	}, false);
});*/



document.addEventListener("DOMContentLoaded", function() {
    var span = document.querySelectorAll('.date'),i;
    for (i = 0; i < span.length; ++i) {
        console.log();
        span[i].innerHTML = moment(parseInt(span[i].innerHTML)).fromNow();
    }
});