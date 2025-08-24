import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;


const app = express();
const port = 3000

app.use(cors());
app.use(express.json());

// Postgres connection
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post("/tasks", async (req, res) => {
  try {
    const { title, description, completed, status, dueDate} = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const result = await pool.query(
      "INSERT INTO tasks (title, description, completed, status, dueDate) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, completed ?? false, status ?? 'Pending', dueDate]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error inserting task", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all tasks
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY due_date ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));