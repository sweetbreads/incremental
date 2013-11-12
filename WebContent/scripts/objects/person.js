/**
 * 
 */

function Person(name) {
		
		this.name = name;
		this.title = "";
		this.level = 0;
		this.abilities = 0;
		this.intuition = 0;
		this.reflexes = 0;
		this.fortitude = 0;
		
		this.display = display;
		function display() {
			var contents = "";
			contents += "<tr><td width=\"150px\"><b>" + this.name + "</b></td><td>" + this.title + "</td></tr>";
			contents += "<tr><td colspan=\"2\">";
			contents += this.displayAttribute("fortitude") + ", ";
			contents += this.displayAttribute("reflexes") + ", ";
			contents += this.displayAttribute("intuition") + "</td></tr>";
			return contents;
		}
		
		this.displayAttribute = displayAttribute;
		function displayAttribute(attr) {
			var display = "";
			var descriptor = ["below average",
			                  "average",
			                  "above average",
			                  "exceptional",
			                  "superhuman",
			                  ];
			var i = this[attr] + 1;
			document.getElementById("status").innerHTML = "PERSON DISPLAYATTR(" + attr + ") { i = " + i + "; }";
			display += descriptor[i] + " " + attr + " (" + this[attr] + ")";
			return(display);
		}
		
};