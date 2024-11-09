
import Todo from "../models/schema.js";

export const addTodo = async (req, res) => {
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

export const getTodos = async (req, res) => {
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








