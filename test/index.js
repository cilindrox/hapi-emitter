'use strict';

// Load modules

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const EventEmitter = require('events').EventEmitter;

const Emitter = require('../');

// Test shortcuts

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const it = lab.it;


it('good', (done) => {

    const plugin = {
        register: Emitter,
        options: {
            name: 'events'
        }
    };

    const server = new Hapi.Server();
    server.register(plugin, (err) => {

        expect(err).to.not.exist();
        expect(server.events).to.exist();
        expect(server.events).to.be.an.instanceof(EventEmitter);
        done();
    });
});
