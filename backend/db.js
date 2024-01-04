import dotenv from "dotenv";
import pg from "pg";

const { Pool } = pg;

dotenv.config();

export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});
