import mongoose from "mongoose";


const UserModel = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo",UserModel);
export default Todo;

