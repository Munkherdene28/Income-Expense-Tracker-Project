import express from "express";
import {
  createTable,
  deleteTable,
  addCategory,
  getCategory,
} from "../controller/category.js";

const category = express.Router();

category.route("/").post(createTable);
category.route("/deleteTable").delete(deleteTable);
category.route("/add").post(addCategory).get(getCategory);
export { category };
