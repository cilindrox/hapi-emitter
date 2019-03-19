'use strict';

// Load modules

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const EventEmitter = require('events').EventEmitter;

const Emitter = require('../');

// Test shortcuts

const lab = exports.lab = Lab.script();
const { expect } = Code;
const { it } = lab;


it('good', async () => {

    const plugin = {
        plugin: Emitter,
        options: {
            name: 'events'
        }
    };

    const server = new Hapi.Server();
    await expect(server.register(plugin)).to.not.reject();

    expect(server.events).to.exist();
    expect(server.events).to.be.an.instanceof(EventEmitter);
});
