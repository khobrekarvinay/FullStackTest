import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditTask = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "", status: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`/api/v1/tasks/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm({ title: data.title, description: data.description, status: data.status });
      } catch (error) {
        setMessage("Failed to load task details");
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.put(`/api/v1/tasks/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
