const express = require("express");
const app = express();
import { todo } from "./db";
import { createTodo, updateTodo } from "./type";

app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false;
    })
    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.put("/completed", async function(req, res){
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong iputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed."
    })
});

app.listen(3000);