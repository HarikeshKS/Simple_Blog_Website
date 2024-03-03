import { pool } from "../config/db.config";
pool.connect();

// create a new blog entry
const createBlog = async ({ username, email, password }) => {
  // date:
  let datetime = new Date();
  let blogdate = datetime.toISOString().slice(0, 10);
  console.log(blogdate);
  const { rows: user } = await pool.query(
    `INSERT INTO users(username, email, password) 
      VALUES($1, $2, $3, $4) 
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
const getUserByUsername = async (username) => {
  const { rows: user } = await pool.query(
    `SELECT * FROM users WHERE username = $1`,
    [username]
  );
  return user[0];
};

// pool.end();

export { createUserDb, getAllUsersDb, deleteUserDb, getUserByUsername };
