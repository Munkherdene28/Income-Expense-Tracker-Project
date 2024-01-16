import { pool } from "../db.js";

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password TEXT,
      avatar_img bytea,
      createAt TIMESTAMP,
      updateAt TIMESTAMP,
      currency_type  TEXT DEFAULT 'MNT'
    )`;
    await pool.query(tableQueryText);
    res.send("Table Created");
  } catch (error) {
    console.error(error);
  }
};

export const deletetable = async (req, response) => {
  try {
    const queryText = `DROP TABLE IF EXISTS users;`;
    await pool.query(queryText);
    response.send("deleted users table");
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, response) => {
  const { name, email, password, currency_type } = req.body;
  console.log(req.body);
  try {
    const queryText =
      "INSERT INTO users (name, email, password, currency_type) VALUES ($1, $2, $3, $4) RETURNING *";
    const res = await pool.query(queryText, [
      name,
      email,
      password,
      currency_type,
    ]);
    console.log("success");
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query eee");
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
  const { email, password } = req.body;

  try {
    const queryText = `SELECT * FROM users WHERE email='${email}' AND password = '${password}'`;
    const response = await pool.query(queryText);
    console.log(response);
    if (response.rows.length !== 0) {
      res.send("success");
    } else {
      throw error;
    }
  } catch (error) {
    res.status(400).send("Wrong username and password");
  }
};

export const deleteUser = async (req, response) => {
  const { name, email } = req.body;
  try {
    const queryText = `DELETE FROM users WHERE name = '${name}' AND email = '${email}'`;

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
    response.send("updated");
  } catch (error) {
    console.log(error);
  }
};
