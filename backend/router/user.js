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
user.route("/createtable").post(createTable);
user.route("/deletetable").delete(deletetable);
user.route("/").post(createUser).get(getUsers);
user.route("/login").post(getOneUser);
user.route("deleteuser").delete(deleteUser);
user.route("updateuser").put(updateUser);

export { user };
