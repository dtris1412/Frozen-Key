import { login as loginService } from "../services/authService.js";

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

export { login };
