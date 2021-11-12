const express = require('express');
const server = express();
const corvettesRouter = require('./api/corvettesRouter.js');

server.use(express.json());
server.use('/corvettes', corvettesRouter);

module.exports = server;
