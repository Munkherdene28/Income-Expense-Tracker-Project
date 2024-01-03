import { nanoid } from "nanoid";
import bp from "body-parser";
import dotenv from "dotenv";
import postgres from "postgres";
import express, { response } from "express";
import { pool } from "../db.js";
import { user } from "./router/userRouter.js";
import { category } from "./router/categoryRouter.js";
import { uuid } from "uuidv4";

//const id = uuid();
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use("/users", user);
app.use("/category", category);
/*

app.get("/users", async (req, res) => {
    try {
        const queryText =
        `SELECT * FROM users`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
});
*/
/*
app.get("/customuser", async (req, res) => {
    const { name, email } = req.body;
    try {
        const queryText =
     `SELECT * FROM users WHERE name='${name}' AND email='${email}'`;
        const response = await pool.query(queryText);
        res.send(response.rows);
      } catch (error) {
        console.error(error);
    }
});
*/

/*
app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
*/
/*
app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS product (
      id SERIAL PRIMARY KEY,
      productname VARCHAR(255) NOT NULL,
      productPrice SMALLINT NOT NULL,
      productCount SMALLINT NOT NULL
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
*/

/*
app.post("/createUser", async (req, response) => {
  const { name, email } = req.body;
  //console.log(name, email, 'req.body');
  try {
    const queryText =
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [ name, email ]);
    response.send(res.rows[0])
  } catch (error) {
    console.error(error);
    response.send('error query')
  }
});
*/
/*
app.delete ("/deleteuser", async (req,response)=> {
  const { id,name, email } = req.body;
 // console.log(req.body);
  try {
    const queryText =
   // `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`;
   `DELETE FROM users WHERE (name = $1 AND email = $2 OR id = $3`;
      await pool.query(queryText);
      response.send("Success");
  } catch (error) {
    console.log(error);
  }
});
*/
/*
app.put ("/updateuser", async (req,response)=>{
  const { id,name, email } = req.body;
  try {
    const queryText = `UPDATE  users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("Updated");
  } catch (error) {
    console.log(error);
  }
});
*/

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
