/**
 * 
 */

var town = {
		
		population : 0,
		updatesPerSecond : 20,
		
		init : function() {
			resources.init();
			town.debugPopulation();
			events.add(100, town.update);
			resources.display();
			town.display();
		},
		
		display : function() {
			var contents = "";
			contents += "<table>";
			for(var i = 0; i < population.length; i++) {
				if(i != 0) { contents += "<tr><td colspan=\"2\"><hr></td></tr>"; }
				contents += population[i].display(i);
			}
			contents += "</table>";
			document.getElementById("town").innerHTML = contents;
		},
		
		update : function() {
			resources.update("food", 0.35);
			resources.update("herbs", 0.01);
			resources.update("wood", 0.2);
			resources.display();
			events.add(100, town.update);
		},
		
		/* DEBUGGING STUFF BELOW */
		
		debugPopulation : function() {
			population = new Array();
			var person;
			person = new Person("Shost Frock");
			person.title = "Shopkeeper";
			person.fortitude = -1;
			person.intuition = 1;
			population.push(person);
			person = new Person("Roland Deschain");
			person.title = "Gunslinger of Eld";
			person.fortitude = 3;
			person.reflexes = 3;
			person.intuition = -1;
			population.push(person);
			person = new Person("Jake Chambers");
			person.title = "Gunslinger of New York";
			person.fortitude = 1;
			person.reflexes = 1;
			person.intuition = 2;
			population.push(person);
		},
		
		sellAction : function(transaction) {
			resources.update(transaction.resource, -1 * transaction.amount);
			resources.update("netWorth", transaction.value);
			resources.display();
		},
		
		sell : function(resource, amount, value, time) {
			var transaction = new Object();
			transaction.resource = resource;
			transaction.amount = amount;
			transaction.value = value;
			events.add(time, town.sellAction, transaction);
		},
		
		sellHerbs : function(id) {
			document.getElementById("status").innerHTML = "sellHerbs " + id;
			town.sell("herbs", 6, 4, 20000);
		},
		
		sellWood : function(id) {
			document.getElementById("status").innerHTML = "sellWood " + id;
			town.sell("wood", 5, 1, 10000);
		},
		
		sellFood : function(id) {
			document.getElementById("status").innerHTML = "sellFood " + id;
			town.sell("food", 10, 1, 5000);
		},
		
};