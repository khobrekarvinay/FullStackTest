import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("/api/v1/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
