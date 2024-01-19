import { pool } from "../db.js";

export const createTable = async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS transaction (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id uuid references users(id),
        name TEXT,
        amount REAL NOT NULL,
        transaction_type VARCHAR(3) CHECK (transaction_type IN ('INC', 'EXP')),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id uuid references category(id)
      )`;
    await pool.query(tableQueryText);
    res.send("Transaction table created");
  } catch (error) {
    console.error(error);
  }
};
export const deleteTable = async (req, res) => {
  try {
    const queryText = `DROP TABLE IF EXISTS transaction;`;
    await pool.query(queryText);
    res.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
};
export const addTransaction = async (req, res) => {
  const { amount, payeeUser, desc, value, userid } = req.body;
  try {
    const queryText =
      "INSERT INTO transactions (amount, name, description, category_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const res = await pool.query(queryText, [
      amount,
      payeeUser,
      desc,
      value,
      userid,
    ]);
    res.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    res.send("error query");
  }
};

export const getTransaction = async (req, response) => {
  const { name, description, createAt, updateAt, category_image } = req.body;
  try {
    const queryText =
      "INSERT INTO category (name, description, createAt, updateAt, category_image) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const res = await pool.query(queryText, [
      name,
      description,
      createAt,
      updateAt,
      category_image,
    ]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
