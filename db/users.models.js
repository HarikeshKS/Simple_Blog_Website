import { pool } from "../config/db.config.js";
pool.connect();

// create a new user
const createUserDb = async ({ username, email, password }) => {
  const { rows: user } = await pool.query(
    `INSERT INTO users(username, email, password) 
      VALUES($1, $2, $3) 
      returning *`,
    [username, email, password]
  );
  return user[0];
};

// getting all users
const getAllUsersDb = async () => {
  const { rows: users } = await pool.query("select * from users");
  return users;
};

// deleting a user
const deleteUserDb = async (id) => {
  const { rows: user } = await pool.query(
    "DELETE FROM users where user_id = $1 returning *",
    [id]
  );
  return user[0];
};

// getting user by username
const getUserByUsernameDb = async (username) => {
  const { rows: user } = await pool.query(
    `SELECT * FROM users WHERE username = $1`,
    [username]
  );
  return user[0];
};

// pool.end();

export { createUserDb, getAllUsersDb, deleteUserDb, getUserByUsernameDb };
