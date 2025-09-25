import {
  login as loginService,
  register as registerService,
} from "../services/authService.js";
import { createCart as createCartService } from "../services/cartService.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    if (!result) {
      return res.status(400).json({ mess: "Invalid email or password" });
    }
    res.status(200).json(result);
  } catch (err) {
    console.error("Login error: ", err);
    res.status(500).json({ mess: "Internal server error" });
  }
};

const register = async (req, res) => {
  try {
    const result = await registerService(
      req.body.name,
      req.body.email,
      req.body.password
    );
    //create cart for new user
    await createCartService(result.user.user_id); //get the latest user_id

    res.status(201).json(result);
  } catch (err) {
    console.error("Register error: ", err);
    res.status(500).json({ mess: "Internal server error" });
  }
};
export { login, register };
