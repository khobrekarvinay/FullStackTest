import { User, Task } from '../models/schema.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, role });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error });
    }
  };
  
  
  export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
      res.json({ token, role: user.role });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  };

  export const createTask = async (req, res) => {
    const { title, description, assigneeEmail } = req.body;
    try {
      const assignee = await User.findOne({ email: assigneeEmail });
      if (!assignee || assignee.role !== "user") {
        return res.status(404).json({ message: "Assignee not found or not a user" });
      }
  
      const task = new Task({
        title,
        description,
        createdBy: req.user.id,
        assignee: assignee._id,
      });
  
      await task.save();
      res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
      res.status(500).json({ message: "Error creating task", error });
    }
  };
  
  export const viewTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ assignee: req.user.id }).populate("createdBy", "name email");
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks", error });
    }
  };

  
  export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
  
    try {
      const task = await Task.findById(id);
  
      if (!task) return res.status(404).json({ message: "Task not found" });
  
      // Only allow updating fields that are provided
      if (title) task.title = title;
      if (description) task.description = description;
      if (status) task.status = status;
  
      await task.save();
      res.json({ message: "Task updated successfully", task });
    } catch (error) {
      res.status(500).json({ message: "Error updating task", error });
    }
  };
  