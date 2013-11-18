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
		function display(index) {
			var contents = "";
			contents += "<tr><td><b>" + this.name + "</b></td><td>" + this.title + "</td></tr>";
			contents += "<tr><td colspan=\"2\">";
			contents += this.displayAttribute("fortitude") + ", ";
			contents += this.displayAttribute("reflexes") + ", ";
			contents += this.displayAttribute("intuition") + "</td></tr>";
			contents += "<tr><td colspan=\"2\"Abilities</td></tr>";
			return contents;
		}
		
		this.collect = collect;
		function collect() {
			
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
			display += descriptor[i] + " " + attr + " (" + this[attr] + ")";
			return(display);
		}
		
};