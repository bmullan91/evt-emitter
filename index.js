var defaultEventEmitter = require('events').EventEmitter;
var EventListener = require('evt-listener').EventListener;

function EventEmitter() {
  defaultEventEmitter.call(this);
}

EventEmitter.prototype = Object.create(defaultEventEmitter.prototype);

EventEmitter.prototype.createListener = function(event) {
  return new EventListener(this, event);
};

module.exports = EventEmitter;
module.exports.EventEmitter = EventEmitter;
