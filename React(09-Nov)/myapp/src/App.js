import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';

function App() {
  // useEffect(() => {
  //   const checkBackendConnection = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/test'); 
        
  //       if (response.data.success) {
  //         toast.success(response.data.message);
  //       } else {
  //         toast.error('Backend connection failed!');
  //       }
  //     } catch (error) {
  //       toast.error('Failed to connect to the backend');
  //     }
  //   };

  //   checkBackendConnection(); 
  // }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <ToastContainer /> 
    </div>
  );
}

export default App;







