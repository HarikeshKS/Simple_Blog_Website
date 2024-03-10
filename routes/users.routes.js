// routes/userRoutes.js

import express from "express";
import userController from "../controllers/users.controller.js";

const router = express.Router();

// Create a new user
router.post("/", userController.createUser);  // WORKING

// Get user by username
router.get("/:username", userController.getUserByUsername);  // WORKING

// Delete user by ID
router.delete("/", userController.deleteUser);

// Get all users
router.get("/", userController.getAllUsers);

export default router;
