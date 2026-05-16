import express from "express";
import { auth, roleAuth } from "../middlewares/taskmanage.js";
import { registerUser, loginUser } from "../controllers/task.js";
import { createTask, viewTasks } from "../controllers/task.js";

const router = express.Router();

// Auth Routes
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);

// Task Routes
router.post("/tasks", auth, roleAuth("admin"), createTask);
router.get("/tasks", auth, viewTasks);

export default router;
