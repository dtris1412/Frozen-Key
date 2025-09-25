import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

const login = async (email, password) => {
  const user = await db.User.findOne({ where: { email } });
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  // const isMatch = password === user.password;
  if (!isMatch) return null;
  //Tạo jwt

  const token = jwt.sign(
    { user_id: user.user_id, roles: user.roles },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  //chỉ trả về các thoogn tin cần thiết
  const userData = {
    user_id: user.user_id,
    email: user.email,
    roles: user.roles,
    name: user.name,
  };
  return { user: userData, token };
};

const register = async (name, email, password, phone) => {
  const existingUser = await db.User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create new User

  const newUser = await db.User.create({
    name,
    email,
    password: hashedPassword,
  });

  //create cart for new user

  const token = jwt.sign(
    { user_id: newUser.user_id, roles: newUser.roles },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { user: newUser, token };
};

export { login, register };
