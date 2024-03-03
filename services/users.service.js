import {
  createUserDb,
  getAllUsersDb,
  deleteUserDb,
  getUserByUsernameDb,
} from "../db/users.models";

class UserService {
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      console.error(error);
    }
  };
  getUserByUsername = async (username) => {
    try {
      const user = await getUserByUsernameDb(username);
      return user;
    } catch (error) {
        console.error(error);
    }
  };
  deleteUser = async (id) => {
    try {
      return await deleteUserDb(id);
    } catch (error) {
        console.error(error);
    }
  };

  getAllUsers = async () => {
    try {
      return await getAllUsersDb();
    } catch (error) {
        console.error(error);
    }
  };
}

export default new UserService();