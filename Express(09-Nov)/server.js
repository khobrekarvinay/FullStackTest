import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import Todo from "./models/schema.js";


const app= express();
app.use(cors());
dotenv.config();
app.use(express.json());

const roleAuth = (requiredRole) => (req, res, next) => {
  if (req.user.role !== requiredRole) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};


////////////// CONTROLLERS ////////////////////



const addTodo = async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.json({ success: false, message: 'Task name is required' });
    }
    try {
      const newTodo = new Todo({ task }); //toschemaform
      const todoresponse= await newTodo.save();
      if(!todoresponse){
          return res.status(500).json({ success: false, message: 'Failed to save task' });
      }
      
      res.json({ success: true, message: 'Todo added successfully', todo: newTodo });
    } catch (error) {
      console.error("TodoAdderror",error);
      res.json({ success: false, message: 'Failed to add todo', error: error.message });
    }
  };
  
  /////////////////////// GET TODO ////////////////////
  
   const getTodos = async (req, res) => {
    try {
      const todos = await Todo.find();//getallfromTodocollection
      if (!todos || todos.length === 0) {
          return res.json({ success: false, message: 'No tasks found' });
        } 
    
      res.json({ success: true, message: 'Tasks retreived', todos });
    } catch (error) {
      res.json({ success: false, message: 'Failed to retrieve todos', error: error.message });
    }
  };
  




app.post('/api/addtodos',addTodo);
app.get('/api/gettodos',getTodos);
app.get("/test", (req, res)=> {
    res.json({success: true, message: "Backend is connected!"})
})


mongoose
.connect(process.env.MONGODBURL)
.then(()=> console.log("DB connected"));





app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT} `);
}); 



































