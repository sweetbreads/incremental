/**
 * 
 */

var person = {
		
		name : "",
		level : 0,
		abilities : 0,
		intuition : 0,
		reflexes: 0,
		fortitude : 0,
		
		display : function() {
			var contents = "";
			contents += "<table width=\"100%\">";
			contents += "<tr><td width=\"100px\"><b>" + name + "</b></td><td>";
			contents += person.displayAttribute("fortitude") + ", ";
			contents += person.displayAttribute("reflexes") + ", ";
			contents += person.displayAttribute("intuition") + ", ";
		},
		
		displayAttribute : function(attr) {
			var display = "";
			var descriptor = ["below average",
			                  "average",
			                  "above average",
			                  "exceptional",
			                  "superhuman",
			                  ];
			display += descriptor[this[attr] + 1] + " " + attr + " (" + this[attr] + ")";
			retrun(display);
		},
		
};