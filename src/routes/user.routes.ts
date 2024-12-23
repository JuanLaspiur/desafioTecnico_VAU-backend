import express from 'express';
 import * as userController from '../controllers/user.controller.ts';
//import * as authController from "../controllers/AuthController.js";
//import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authController.registerUser);
// router.post("/login", authController.loginUser);
// router.get("/authToken", authMiddleware, userController.getUserByToken);

export default router;
