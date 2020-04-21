const { Todo } = require('../../engine');

const get = () => {
    return Todo.find();
}

const getById = (id) => {
    return Todo.findById(id)
}

const create = (name) => {
    return Todo.create({ name });
}

const update = (id, name) => {
    return Todo.findOneAndUpdate({ _id: id },
        { $set: { name: name } },
        { new: true }
    );
}

const remove = (id) => {
    return Todo.deleteOne({ _id: id });
}

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}