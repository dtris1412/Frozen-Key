import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

const createCart = async (user_id) => {
  return await db.Cart.create({ user_id });
};

export { createCart };
