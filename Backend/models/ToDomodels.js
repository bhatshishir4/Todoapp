const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// Capitalized 'Todo' for the model name
const ToDoModel = mongoose.model('todos', todoSchema);

module.exports = ToDoModel;
