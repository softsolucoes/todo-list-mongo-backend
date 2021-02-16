const Todo = require('../models/todoModel');

const create = async (req, res) => {

    let todo = new Todo(req.body);
    todo.save().then(doc => {res.json(doc)}).catch(error => res.json(error));

}

const all = async (req, res) => {
    let todos = await Todo.find({});
    res.json(todos);
}

const buscar = async (req, res) => {
    let id = req.params.id;
    try{
        let doc = await Todo.findOne({_id:id});
        res.json(doc);

    }catch(error){
        res.json(error);

    }
}

const deletar = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await Todo.findByIdAndDelete(id);
        res.json(doc);
        
    } catch (error) {
        res.json(error);
        
    }
}

module.exports = { create, buscar, deletar, all };