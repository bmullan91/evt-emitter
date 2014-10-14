var expect = require('chai').expect;
var EventEmitter = require('events').EventEmitter;
var EventListener = require('evt-listener').EventListener;
var ourEventEmitter = require('../');
var defaultEmitter = new EventEmitter();
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

  it('should have the createListener factory which returns EventListeners' function() {
    //TODO
  });

});

