import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { login, register } from "../controllers/authController.js";
import {
  getAllProducts,
  getProductQuantity,
} from "../controllers/productController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/api/users", getAllUsers);
  //login
  router.post("/api/login", login);
  //register
  router.post("/api/register", register);
  //get all products
  router.get("/api/products", getAllProducts);
  //get product quantity
  router.get("/api/products/:product_id/quantity", getProductQuantity);
  return app.use("/", router);
};

export default initWebRoutes;
