import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const db = new pg.Pool({ connectionString: process.env.Database_URL });

await db.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL
)`);

await db.query(`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
)`);

await db.query(`CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT,
    time TIMESTAMP,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
)`);

// await db.query(`INSERT INTO users (user_name) VALUES ('dan')`);
// await db.query(`INSERT INTO users (user_name) VALUES ('bob')`);
// await db.query(`INSERT INTO users (user_name) VALUES ('rob')`);

// await db.query(`INSERT INTO categories (category_name) VALUES ('wind sports')`);
// await db.query(
//   `INSERT INTO categories (category_name) VALUES ('water sports')`
// );
// await db.query(`INSERT INTO categories (category_name) VALUES ('athletics')`);
// await db.query(
//   `INSERT INTO categories (category_name) VALUES ('winter sports')`
// );

// await db.query(
//   `INSERT INTO messages (title, message, time, user_id, category_id) VALUES ('messageTitle', 'test0', '2020-02-20 20:20:20', 1, 1)`
// );
// await db.query(
//   `INSERT INTO messages (title, message, time, user_id, category_id) VALUES ('messageTitle', 'test1', '2021-03-02 09:30:30', 2, 1)`
// );
// await db.query(
//   `INSERT INTO messages (title, message, time, user_id, category_id) VALUES ('messageTitle', 'test2', '2024-06-18 22:10:00', 3, 1)`
// );
// await db.query(
//   `INSERT INTO messages (title, message, time, user_id, category_id) VALUES ('messageTitle', 'test3', '2021-08-10 10:20:45', 1, 3)`
// );
// await db.query(
//   `INSERT INTO messages (title, message, time, user_id, category_id) VALUES ('messageTitle', 'test4', '2023-12-25 12:20:20', 2, 3)`
// );
