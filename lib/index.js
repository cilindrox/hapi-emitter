'use strict';

const EventEmitter = require('events').EventEmitter;
const Hoek = require('hoek');


exports.register = (server, options, next) => {

    Hoek.assert(options.name, 'Invalid name settings provided.');

    const emitter = new EventEmitter();
    server.decorate('server', options.name, emitter);
    return next();
};


exports.register.attributes = {
    pkg: require('../package'),
    multiple: true
};
