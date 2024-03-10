import UserService from "../services/users.service.js";
// creation of user constroller

class UserController {
  createUser = async (req, res) => {
    try {
      const user = req.body; // Assuming user data is in the request body
      const createdUser = await UserService.createUser(user);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getUserByUsername = async (req, res) => {
    try {
      const username = req.params.username; // Assuming username is in the request parameters
      const user = await UserService.getUserByUsername(username);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const {id} = req.body; // Assuming user ID is in the request parameters
      console.log(id);
      const deletedUser = await UserService.deleteUser(id);

      if (deletedUser) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const allUsers = await UserService.getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

export default new UserController();
