'use strict';

const EventEmitter = require('events').EventEmitter;
const Hoek = require('hoek');

module.exports = {
    pkg: require('../package'),
    register: (server, options) => {

        Hoek.assert(options.name, 'Invalid name settings provided.');

        const emitter = new EventEmitter();
        server.decorate('server', options.name, emitter);
    }
};
