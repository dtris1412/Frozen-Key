import { getAllUsers as getAllUsersService } from "../services/userService.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService(req, res);
    res.status(200).json(users);
  } catch (err) {
    console.error("Error in getAllUsers: ", err);
    res.status(500).json({ mess: "Error fetching users" });
  }
};

export { getAllUsers };
