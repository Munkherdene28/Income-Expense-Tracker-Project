import { pool } from "./db.js";

export const getUsers = async (_, res) => {
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
  const { name, email } = req.body;

  try {
    const queryText =
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, email]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const deleteUser = async (req, response) => {
  const { name, email, id } = req.body;

  try {
    const queryText = `DELETE FROM users WHERE (name = '${name}' AND email = '${email}') OR id = '${id}'`;
    await pool.query(queryText);
    response.send("ok");
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }
};

export const updateUser = async (req, response) => {
  const { name, email, id } = req.body;

  try {
    const queryText = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = '${id}'`;
    await pool.query(queryText);
    response.send("updated");
  } catch (error) {
    response.send("error").end();
    console.error(error);
  }   
};
