import express from "express";
import {
  createTable,
  addCategory,
  getCategory,
} from "../controller/category.js";

const category = express.Router();

category.route("/").post(createTable);
category.route("/addData").post(addCategory);
category.route("/getData").get(getCategory);
export { category };