var events = require('events');
var eventEmitter = new events.EventEmitter();
var listner1 = function listner1()
{
	console.log('listener1 executed.');
}
  var listner2 = function listner2()
     {
     	console.log('listener2 executed.');
      return "vani";

      }
      eventEmitter.addListener('jsfkl' , listner1 );


      eventEmitter.on('connection', listner2);
      // var eventListeners = require('events').EventEmitter.listenerCount
      // (eventEmitter, 'connection');
      // console.log(eventListeners+ "Listeners listening to connection event");
     var res= eventEmitter.emit('connection');
     console.log(listner2);
      eventEmitter.emit('jsfkl');
      // eventEmitter.removeListener('connection', listner1);
      // console.log("listner1 will not listen now");
      // eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
      // console.log(eventListeners + "Listeners listening to connection event");
      // console.log("program ended.");