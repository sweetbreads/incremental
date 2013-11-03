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
			contents += "<table border=\"0\" width=\"120px\">";
			contents += "<tr><td align=\"right\" width=\"90px\">" + "<b>net worth</b></td>";
			contents += "<td align=\"left\" width=\"30px\"><b>" + resources.netWorth + "</b></tr>";
			for(var i = 0; i < displayResource.length; i++) {
				var type = displayResource[i];
				var value = resources[type].toFixed(0);
				if(value > 0) {
					contents += "<tr align=\"right\" width=\"90px\"><td>" + type + "</td>";
					contents += "<td align=\"left\" width=\"30px\">" + value + "</td></tr>";						
				}
			}
			contents += "</table>";
			document.getElementById("resources").innerHTML = contents;
		},
		
}