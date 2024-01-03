import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;
dotenv.config();

//console.log(process.env.DB_URL);

export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});

//console.log(pool);
