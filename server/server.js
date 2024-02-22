import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

import pg from "pg";
// const dbConnectionString = process.env.Database_URL;
const db = new pg.Pool({ connectionString: process.env.Database_URL });

let PORT = 1212;
app.listen(PORT, () => {
  console.log(`Server running on port, ${PORT}`);
});
