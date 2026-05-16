// src/components/AddTodo.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchTodos from '../components/TodoList'

const AddTodo = () => {
  const [task, setTask] = useState('');

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!task) {
      toast.error('Task cannot be empty');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/addtodos', { task });
      if (response.data.success) {
        toast.success('Todo added successfully!');
        setTask(''); 
        fetchTodos();
      }
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default AddTodo;
