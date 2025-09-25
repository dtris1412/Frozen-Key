import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/api/users", getAllUsers);
  //login
  router.post("/api/login", login);
  //register
  router.post("/api/register", register);
  //create cart

  return app.use("/", router);
};

export default initWebRoutes;
