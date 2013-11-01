/**
 * 
 */

var town = {
		
		netWorth : 0,
		food : 0,
		herbs : 0,
		wood : 0,
		stone : 0,
		
		init : function() {
			netWorth = 0;
			food = 0;
			herbs = 0;
			wood = 0;
			stone = 0;
		},
		
		update : function() {
			town.incrementalUpdate();
			town.displayResources();
			event.add(1, town.update);
		},
		
		incrementalUpdate : function() {
			food += 4;
			herbs += 2;
			wood += 3;
			stone += 1;
		},
		
		displayResources : function() {
			contents = "";
			contents += "<table border=\"0\">";
			contents += "<tr><td>food</td><td>" + food + "</td></tr>";
			contents += "<tr><td>herbs</td><td>" + herbs + "</td></tr>";
			contents += "<tr><td>wood</td><td>" + wood + "</td></tr>";
			contents += "<tr><td>stone</td><td>" + stone + "</td></tr>";
			contents += "<tr><td>net worth</td><td>" + netWorth + "</td></tr>";
			contents += "</table>";
			document.getElementById("resources").innerHTML = contents;
		},
		
};