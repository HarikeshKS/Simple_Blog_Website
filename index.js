import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/users.routes.js";
import blogRoutes from "./routes/blogs.routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using the routes.
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
