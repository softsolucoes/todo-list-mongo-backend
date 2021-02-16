const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const todoRouter = require('./routes/todoRouter');

function Server() {
    app.use(cors());
    app.use(express.json());
    app.use('/', todoRouter);

    app.listen(process.env.PORT, () => {
        console.log(`server running on port ${process.env.PORT}`);

    });

}

module.exports = Server;