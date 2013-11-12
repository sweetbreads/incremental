/**
 * 
 */

var town = {
		
		population : 0,
		
		init : function() {
			resources.init();
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
			events.add(1, town.update);
			resources.display();
			town.display();
		},
		
		display : function() {
			var contents = "";
			contents += "<table>";
			for(var i = 0; i < population.length; i++) {
				if(i != 0) { contents += "<tr><td colspan=\"2\"><hr></td></tr>"; }
				contents += population[i].display();
			}
			contents += "</table>";
			document.getElementById("town").innerHTML = contents;
		},
		
		update : function() {
			resources.update("food", 3.5);
			resources.update("herbs", 0.1);
			resources.update("wood", 2.0);
			resources.display();
			events.add(1, town.update);
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
		
		sellHerbs : function() {
			document.getElementById("status").innerHTML = "sellHerbs";
			town.sell("herbs", 6, 4, 20);
		},
		
		sellWood : function() {
			document.getElementById("status").innerHTML = "sellWood";
			town.sell("wood", 5, 1, 10);
		},
		
		sellFood : function() {
			document.getElementById("status").innerHTML = "sellFood";
			town.sell("food", 10, 1, 5);
		},
		
};