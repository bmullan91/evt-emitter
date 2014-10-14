var EventEmitter = require('events').EventEmitter;
var EventListener = require('evt-listener').EventListener;

EventEmitter.prototype.createListener = function(event) {
  return new EventListener(this, event);
};

module.exports = EventEmitter;
module.exports.EventEmitter = EventEmitter;
