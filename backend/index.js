import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js";
import { user } from "./router/user.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            email VARCHAR(50) UNIQUE NOT NULL,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            avatar_img BYTEA,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            currency_type TEXT DEFAULT 'MNT'
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
