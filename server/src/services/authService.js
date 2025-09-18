import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

const login = async (email, password) => {
  const user = await db.User.findOne({ where: { email } });
  if (!user) return null;
  // const isMatch = await bcrypt.compare(password, user.password);
  const isMatch = password === user.password;
  if (!isMatch) return null;
  //Tạo jwt

  const token = jwt.sign(
    { user_id: user.user_id, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { user, token };
};
export { login };
