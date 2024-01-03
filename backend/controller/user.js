import { pool } from "../db.js";
import { uuid } from "uuidv4";

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
};

export const alterTable = async (req, response) => {
  try {
    const queryText = `ALTER TABLE users ADD password TEXT;`;
    await pool.query(queryText);
    response.send("Success");
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const getOneUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const queryText = `SELECT * FROM users WHERE name='${name}' AND email='${email}'`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (req, response) => {
  const { name, email, password } = req.body;
  //console.log(name, email, 'req.body');
  try {
    const queryText =
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
    const res = await pool.query(queryText, [name, email, password]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const deleteUser = async (req, response) => {
  const { id, name, email } = req.body;
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
};

export const updateUser = async (req, response) => {
  const { id, name, email } = req.body;
  try {
    const queryText = `UPDATE  users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("Updated");
  } catch (error) {
    console.log(error);
  }
};
