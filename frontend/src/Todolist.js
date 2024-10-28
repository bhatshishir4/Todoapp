import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todolist.css';

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [updateText, setUpdateText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  // Add new ToDo
  const addTodo = () => {
    if (newTodo.trim() === '') return;

    axios.post('http://localhost:4000/api/todos/save', { text: newTodo })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  // Update ToDo
  const updateTodo = (id) => {
    if (updateText.trim() === '') return;

    axios.put('http://localhost:4000/api/todos/update', { _id: id, text: updateText })
      .then(() => {
        setTodos(todos.map(todo => (todo._id === id ? { ...todo, text: updateText } : todo)));
        setUpdateText('');
      })
      .catch((error) => {
        console.error('Error updating todo:', error);
      });
  };

  // Delete ToDo
  const deleteTodo = (id) => {
    axios.delete('http://localhost:4000/api/todos/delete', { data: { _id: id } })
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item">
            <input
              type="text"
              defaultValue={todo.text}
              onChange={(e) => setUpdateText(e.target.value)}
            />
            <button onClick={() => updateTodo(todo._id)}>Update</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
