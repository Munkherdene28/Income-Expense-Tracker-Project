import express from "express";
import { createTable, deleteTable } from "../controller/transaction.js";

const transaction = express.Router();

transaction.route("/createTable").post(createTable);
transaction.route("/deleteTable").delete(deleteTable);
export { transaction };
