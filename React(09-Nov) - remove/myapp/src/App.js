import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import AdminDashboard from './TaskManage/AdminDash';
import EditTask from './TaskManage/TaskForm';

// function App() {
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

  // return (
  //   <div className="App">
  //     <h1>Todo List</h1>
  //     <AddTodo />
  //     <TodoList />
  //     <ToastContainer /> 
      
  //   </div>
  // );


const App = () => {
   const token = localStorage.getItem("token");

   return (
    <Router>
      <Routes>
        <Route path="/" element= {<Login/>} />
        {token && (
          <>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/user/dashboard" element={<UserDashboard/>} />
          <Route path="/admin/task-form" element={<TaskForm/>} />
          <Route path="/tasks/edit/:id" element={<EditTask/>} />
          </>
        )}

        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
   );
  };


export default App;







