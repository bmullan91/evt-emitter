var expect = require('chai').expect;
//node's built in event's
var EventEmitter = require('events').EventEmitter;
var defaultEmitter = new EventEmitter();

//our emitter, the decorated version
var ourEventEmitter = require('../');
var ourEmitter = new ourEventEmitter();

describe('validation checks', function() {

  it('should expose the same interface as the built in events module', function() {
    var sameProperties = Object.keys(defaultEmitter).every(function(property) {
      return (ourEmitter[property] !== undefined);
    });

    expect(sameProperties).to.be.true;

    var sameMethods = Object.keys(Object.getPrototypeOf(defaultEmitter)).every(function(method) {
      return ((ourEmitter[method].toString()) === (defaultEmitter[method].toString()));
    });

    expect(sameMethods).to.be.true;
  });

  it('should have the createListener factory which returns an EventListener', function() {
    expect(typeof ourEmitter.createListener).to.equal('function');

    var EventListener = require('evt-listener').EventListener;
    var listener = ourEmitter.createListener('eventName');

    expect(listener).to.be.an.instanceof(EventListener);
    expect(listener.emitter).to.equal(ourEmitter);
    //check out evt-listener's tests - https://github.com/bmullan91/evt-listener/tree/master/test
  });

  it('should have expose the Class as a property - revealing module pattern', function() {
    expect(ourEventEmitter.EventEmitter).to.equal(ourEventEmitter);
  });

});

