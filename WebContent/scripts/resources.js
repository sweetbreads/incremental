/**
 * 
 */

var resources = {
		
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
		
		
		update : function(name, value) {
			resources[name] += value;
		},
		
		display : function() {
			var displayResource = ["food",
			                   "herbs",
			                   "wood",
			                   "stone",
			                   ];
			var contents = "";
			contents += "<table border=\"0\">";
			contents += "<tr><td><b>net worth</b></td><td><b>" + resources.netWorth + "</b></tr>";
			for(var i = 0; i < displayResource.length; i++) {
				var type = displayResource[i];
				var value = resources[type].toFixed(0);
				if(value > 0) {
					contents += "<tr><td>" + type + "</td><td>" + value + "</td></tr>";						
				}
			}
			contents += "</table>";
			document.getElementById("resources").innerHTML = contents;
		},
		
}