import express from "express";
import {
  createTable,
  deleteTable,
  addCategory,
  getCategory,
  deletecategory,
} from "../controller/category.js";

const category = express.Router();

category.route("/").post(createTable);
category.route("/deleteTable").delete(deleteTable);
category.route("/add").post(addCategory).get(getCategory);
category.route("/add1").get(getCategory);
category.route("/delete").delete(deletecategory);
export { category };
