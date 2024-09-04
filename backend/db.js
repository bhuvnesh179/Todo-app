    const mongoose = require("mongoose");
    mongoose.connect("mongodb+srv://bhuvneshbansal179:LIArPqtjrn91kHhg@cluster0.0f0kq.mongodb.net/todos");

    const todoSchema = mongoose.Schema({
        title: String,
        description: String,
        completed: Boolean  
    })

    const todo = mongoose.model('todos', todoSchema);

    module.exports = {
        todo
    }