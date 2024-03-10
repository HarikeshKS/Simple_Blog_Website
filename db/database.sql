-- RELATIONS:
-- users 
-- blogs

-- DATABASE NAME: blogwebsite

-- creation of users table
CREATE TABLE IF NOT EXISTS  users (
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);

-- creation of blogs table
CREATE TABLE IF NOT EXISTS  blogs (
    blog_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(255),
    postdate DATE NOT NULL,
    FOREIGN KEY (blog_id) REFERENCES users(users_id)
);
