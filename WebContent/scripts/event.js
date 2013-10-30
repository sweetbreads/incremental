/**
 * 
 */

var event = {
		
		queue : 0,
		currentTime : 0,
		
		init : function() {
			queue = new Array();
			currentTime = 0;
			document.getElementById("status").innerHTML = "initialized event queue";
		},
		
		add : function(time, action) {
			//document.getElementById("status").innerHTML = "trying to add an event";
			newEvent = new Object();
			newEvent.time = currentTime + time;
			newEvent.action = action;
			queue.push(newEvent);
			//document.getElementById("status").innerHTML = "added an event";
		},
		
		next : function() {
			currentEvent = queue.shift();
			currentTime = currentEvent.time;
			document.getElementById("status").innerHTML = "next event: time = " + currentEvent.time;
			currentEvent.action();
		},

};