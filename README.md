[![Build Status](https://travis-ci.org/bmullan91/evt-emitter.svg?branch=master)](https://travis-ci.org/bmullan91/evt-emitter) [![Coverage Status](https://img.shields.io/coveralls/bmullan91/evt-emitter.svg)](https://coveralls.io/r/bmullan91/evt-emitter?branch=master)

# evt-emitter

### What is it?

Node's events module with a **createListener** factory method on its prototype.

### What does it do?

It creates an instance of **EventListener** ([evt-listener](https://github.com/bmullan91/evt-listener)) without having to pass an event emitter parameter. See below for a comparison.

## Prerequisites

Install it using npm, saving it as a dependency.

    npm i evt-emitter --save

# Comparison

We're going to compare how events and evt-emitter do the following:

- Create an event emitter
- Register an event listener
- Deregister the listener

### Node's events module
```js
var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();

var eventName = 'eventName';
var eventNameListener = function(payload) {
  console.log('Event ' + eventName + ' triggered with: ' + playload);
};

events.on(eventName, eventNameListener);

//sometime later..
events.removeListener(eventName, eventNameListener);
```

### evt-emitter
```js
var EventEmitter = require('evt-emitter').EventEmitter;
var events = new EventEmitter();

var eventNamelistener = events.createListener('eventName').on(function(payload) {
  console.log('Event ' + eventNameListener.event + ' triggered with: ' + playload);
});

//sometime later..
eventNameListener.off();
```

## More information

Check out [evt-listener](https://github.com/bmullan91/evt-listener)'s documentation and tests.
