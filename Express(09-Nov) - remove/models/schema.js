import mongoose from "mongoose";


const UserModel = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo",UserModel);


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  });
  const User = mongoose.model("User",UserSchema);


  const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["incomplete", "complete"], default: "incomplete" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
  
  const Task = mongoose.model("Task",TaskSchema);

  export default Todo; User; Task;

