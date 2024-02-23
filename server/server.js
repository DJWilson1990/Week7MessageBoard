import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

import pg from "pg";

const db = new pg.Pool({ connectionString: process.env.Database_URL });

let PORT = 1212;
app.listen(PORT, () => {
  console.log(`Server running on port, ${PORT}`);
});

// set up root route
app.get("/", (request, response) => {
  response.send("Root Route: Live");
});

// users
app.get("/users", async (request, response) => {
  try {
    const result = await db.query(`SELECT * FROM users`);
    response.json(result.rows);
  } catch (err) {
    response.json({ error: err.message });
  }
});

app.post("/users", async (request, response) => {
  try {
    const result = await db.query(
      `INSERT INTO users (user_name) VALUES ($1) RETURNING *`,
      [request.body.user_name]
    );
    response.json(result);
  } catch (err) {
    response.json({ error: err.message });
  }
});

// categories
app.get("/categories", async (request, response) => {
  try {
    const result = await db.query(`SELECT * FROM categories`);
    response.json(result.rows);
  } catch (err) {
    response.json({ error: err.message });
  }
});

app.post("/categories", async (request, response) => {
  try {
    const result = await db.query(
      `INSERT INTO categories (category_name) VALUES ($1) RETURNING *`,
      [request.body.category_name]
    );
    response.json(result);
  } catch (err) {
    response.json({ error: err.message });
  }
});

// messages
app.get("/messages", async (request, response) => {
  try {
    const result = await db.query(`SELECT * FROM messages`);
    response.json(result.rows);
  } catch (err) {
    response.json({ error: err.message });
  }
});

app.post("/messages", async (request, response) => {
  try {
    const result = await db.query(
      `INSERT INTO messages (message, time, user_id, category_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      [
        request.body.message,
        request.body.time,
        request.body.user_id,
        request.body.category_id,
      ]
    );
    response.json(result);
  } catch (err) {
    response.json({ error: err.message });
  }
});
