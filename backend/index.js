const express = require("express");
const app = express();
import { createTodo, updateTodo } from "./type";

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
});

app.get("/todos", function(req, res){
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you send the wrong iputs",
        })
        return;
    }
});

app.put("/completed", function(req, res){

});

app.listen(3000);