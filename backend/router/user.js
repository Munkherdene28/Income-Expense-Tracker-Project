import express from "express";
import {
  createTable,
  deletetable,
  createUser,
  deleteUser,
  getUsers,
  getOneUser,
  updateUser,
} from "../controller/user.js";

const user = express.Router();
user.route("/createTable").post(createTable);
user.route("/deleteTable").delete(deletetable);
user.route("/").post(createUser).get(getUsers);
user.route("/LogIn").post(getOneUser);
user.route("/deleteUser").delete(deleteUser);
user.route("/updateUser").put(updateUser);

export { user };
