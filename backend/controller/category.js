import { pool } from "../db.js";

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
      CREATE TABLE IF NOT EXISTS category (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100),
        description TEXT,
        createAt TIMESTAMP,
        updateAt TIMESTAMP,
        category_image text
      )`;
    await pool.query(tableQueryText);
    res.send(" Category table created");
  } catch (error) {
    console.error(error);
  }
};

export const deleteTable = async (req, res) => {
  try {
    const queryText = `DROP TABLE IF EXISTS category;`;
    await pool.query(queryText);
    res.send("deleted category table");
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (req, response) => {
  const { name, description } = req.body;
  try {
    const queryText =
      "INSERT INTO category (name, description) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};

export const getCategory = async (req, res) => {
  try {
    const queryText = `SELECT * FROM category`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};
export const deletecategory = async (req, response) => {
  const { name } = req.body;
  try {
    const queryText = `DELETE FROM category WHERE name = '${name}'`;

    await pool.query(queryText);
    response.send("Success");
  } catch (error) {
    console.log(error);
  }
};
