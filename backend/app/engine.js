const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017/app", { useNewUrlParser: true });
mongoose.Promise = global.Promise

module.exports = {
    Todo: require('./models/todo')
}
