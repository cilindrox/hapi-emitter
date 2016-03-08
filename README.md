# hapi-emitter
A hapi EventEmitter plugin

[![Build Status](https://travis-ci.org/cilindrox/hapi-emitter.svg)](https://travis-ci.org/cilindrox/hapi-emitter)

## Installation

```
npm install --save hapi-ioredis
```


## Quick start

This pretty much works as a regular node-redis/ioredis client, with the addition of providing an easily accessible instance via the [`server.app`](http://hapijs.com/api#serverapp) common namespace.


## Example

```js
'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ host: 'localhost' });

// Register the plugin
server.register({
    register: require('hapi-ioredis'),
    options: {
        name: 'events'
    }
}, (err) => {

    if (err) {
        console.error(err);
    } 
    else {
        server.start(() => {

            console.info(`Server started at ${server.info.uri}`);
        });
    }
});

// Declare a route that uses it

server.route({
    method: 'POST',
    path: '/events',
    handler: myHandler
});


// Access the EventEmitter instance

const myHandler = (request, reply) => {
  
    const events = request.server.events;
    events.emit('hello', request.payload.world);

    return reply().code(202);
};

server.start(function() {
    console.log(`Server started at ${server.info.uri}`);
});
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```
