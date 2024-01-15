import dotenv from "dotenv";
import express from "express";
import { user } from "./router/user.js";
import { category } from "./router/categoryRouter.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/users", user);
app.use("/category", category);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
