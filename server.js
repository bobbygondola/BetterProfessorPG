const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');

server.use(express.json());
server.use(morgan());
server.use(helmet());

//api test
server.get('/', (req,res) => { //to test the api.. npm run server + //localhost:8000
    res.status(200).json(process.env.GREET)
})

module.exports = server;