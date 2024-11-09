// src/components/TodoList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/gettodos');
      if (response.data.success) {
        setTodos(response.data.todos);
      }
    } catch (error) {
      toast.error('Failed to fetch todos');
      console.error('Error fetching todos',error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo._id}>
            <span>{todo.task}</span> - <span>{todo.completed ? 'Completed' : 'Pending'}</span>
          </li>
        ))
    ): (
        <p>No todos available</p>)}
      </ul>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default TodoList;
