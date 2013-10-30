/**
 * 
 */

var town = {
		update : function() {
			document.getElementById("resources").innerHTML = "town test";
			event.add(10, town.update);
		},
};