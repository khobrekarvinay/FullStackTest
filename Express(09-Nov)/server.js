import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { addTodo, getTodos } from "./controllers/todocontroller.js";

const app= express();

app.use(cors);
dotenv.config();
app.use(express.json());

app.post('/api/addtodos',addTodo);
app.get('/api/gettodos',getTodos);


mongoose
.connect(process.env.MONGODBURL)
.then(()=> console.log("DB connected"));

app.get("/test", (req, res)=> {
    res.json({success: true, message: "Backend is connected!"})
})




app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT} `);
}); 























