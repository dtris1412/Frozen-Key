import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { login } from "../controllers/authController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/api/users", getAllUsers);
  //login
  router.post("/api/login", login);
  return app.use("/", router);
};

export default initWebRoutes;
