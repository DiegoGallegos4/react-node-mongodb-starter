const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Todo', schema);
