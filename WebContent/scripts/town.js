/**
 * 
 */

var town = {
		
		population : 0,
		
		init : function() {
			resources.init();
			population = new Array();
			/*
			var p;
			p = new person();
			person.fortitude = -1;
			person.intuition = 1;
			population.push(person);
			person = new person("Roland Deschain");
			person.fortitude = 3;
			person.reflexes = 3;
			person.intuition = -1;
			population.push(person);
			person = new person("Jake Chambers");
			person.fortitude = 1;
			person.reflexes = 1;
			person.intuition = 2;
			population.push(person);
			*/
			events.add(1, town.update);
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