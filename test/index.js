'use strict';

// Load modules

const Code = require('@hapi/code');
const Hapi = require('@hapi/hapi');
const Lab = require('@hapi/lab');
const EventEmitter = require('events').EventEmitter;

const Emitter = require('../');

// Test shortcuts

const lab = exports.lab = Lab.script();
const { expect } = Code;
const { it } = lab;


it('should register as a plugin', async () => {

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
