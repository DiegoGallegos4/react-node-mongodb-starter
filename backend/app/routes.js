const express = require('express');
const v1 = express.Router();

v1.use('/todo', require('./handlers/todo/routes'));

module.exports = v1