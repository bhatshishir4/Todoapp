const ToDoModel = require('../models/ToDomodels.js');


module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find(); 
        res.send(toDo); 
    } catch (err) {
        res.status(500).send({ error: "Error fetching ToDos" }); 
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const data = await ToDoModel.create({text:req.body.text}); 
        console.log("Added successfully...");
        console.log(data);
        res.send(data); 
    } catch (err) {
        res.status(500).send({ error: "Error saving ToDo" }); 
    }
};

module.exports.updateToDo = async(req, res) =>{
    try {
        const {_id , text} =req.body;
        ToDoModel
        .findByIdAndUpdate(_id, {text})
        .then(()=> res.set(201).send("Update Successfully"))
    }
    catch(err){
        res.status(500).send({error:"Error during updation"})
    }
}

module.exports.deleteToDo = async(req,res) => {
    try{
        const {_id}= req.body
        ToDoModel
        .findByIdAndDelete(_id)
        .then(()=> res.set(201).send("Successfully deleted"))
    }
    catch(err){
        res.status(500).send({error:"Could not delete"})
    }
}