/**
 * 
 */

var events = {
		
		queue : 0,
		currentTime : 0,
		
		init : function() {
			queue = new Array();
			currentTime = 0;
		},
		
		start : function() {
			events.scheduleNext();
		},
		
		add : function(time, action, argument) {
			var newEvent = new Object();
			newEvent.time = currentTime + time;
			newEvent.action = action;
			newEvent.argument = argument;
			queue.push(newEvent);
			queue.sort(function(a,b){return a.time - b.time;});
		},
		
		scheduleNext : function() {
			var nextEvent = queue[0];
			var timeout = (nextEvent.time - currentTime) * 1000;
			window.setTimeout(events.executeCurrent, timeout);
			events.printQueue();
		},
		
		executeCurrent : function() {
			var currentEvent = queue.shift();
			currentTime = currentEvent.time;
			currentEvent.action(currentEvent.argument);
			events.scheduleNext();
		},
		
		printQueue : function() {
			var contents = "";
			for(var i = 0; i < queue.length; i++) {
				var event = queue[i];
				contents += event.time + " : " + event.action.toString() + "<br>";
			}
			document.getElementById("events").innerHTML = contents;
		},

};