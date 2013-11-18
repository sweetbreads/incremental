/**
 * 
 */

var events = {
		
		queue : 0,
		currentTime : 0,
		
		/* init() - sets up the data structures. called at the beginning. duh. */
		init : function() {
			queue = new Array();
			currentTime = 0;
		},
		
		/* add(time, action, argument) - entry point into the event queue. this adds a new event that
		 * fires #time# milliseconds after the current time. this is responsible for keeping the queue
		 * ordered.
		 * WARNING: the current implementation has race conditions and problems with adding events
		 * that take place before the first item on the queue. */
		add : function(time, action, argument) {
			var newEvent = new Object();
			newEvent.time = currentTime + time;
			newEvent.action = action;
			newEvent.argument = argument;
			queue.push(newEvent);
			queue.sort(function(a,b){return a.time - b.time;});
		},
		
		/* start() -  kicks off the event queue. called at the beginning, and the current implementation
		 * requires it is called AFTER the first event is added. */
		start : function() {
			events.scheduleNext();
		},
		
		/* scheduleNext() - internal call for start(). this peeks at the first item on the queue, and sleeps
		 * until that item is supposed to trigger. it hands over to executeCurrent() when it is done. */
		scheduleNext : function() {
			var nextEvent = queue[0];
			var timeout = nextEvent.time - currentTime;
			window.setTimeout(events.executeCurrent, timeout);
			// for debugging
			events.printQueue();
		},
		
		/* executeCurrent() - internal call for start(). this grabs the first action on the queue and executes
		 * its action. this call assumes that it is time for the first action on the queue, and when it is done,
		 * calls scheduleNext() to wait for the next action. */
		executeCurrent : function() {
			var currentEvent = queue.shift();
			currentTime = currentEvent.time;
			currentEvent.action(currentEvent.argument);
			events.scheduleNext();
		},
		
		/* printQueue() - debugging call to print the current state of the queue */
		printQueue : function() {
			var contents = "";
			for(var i = 0; i < queue.length; i++) {
				var event = queue[i];
				contents += event.time + " : " + event.action.toString() + "<br>";
			}
			document.getElementById("events").innerHTML = contents;
		},

};