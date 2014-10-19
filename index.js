var events = require('events');
var util = require('util');
var EventListener = require('evt-listener').EventListener;

function EventEmitter() {
  events.EventEmitter.call(this);
}

util.inherits(EventEmitter, events.EventEmitter);

EventEmitter.prototype.createListener = function(event) {
  return new EventListener(this, event);
};

module.exports = EventEmitter;
module.exports.EventEmitter = EventEmitter;
