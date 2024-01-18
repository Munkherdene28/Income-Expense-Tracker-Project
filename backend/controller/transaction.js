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
