import express from "express";
import {
  createTable,
  deleteTable,
  addTransaction,
  getTransaction,
} from "../controller/transaction.js";

const transaction = express.Router();

transaction.route("/createTable").post(createTable);
transaction.route("/deleteTable").delete(deleteTable);
transaction.route("/post").post(addTransaction);
transaction.route("/get").get(getTransaction);
export { transaction };
