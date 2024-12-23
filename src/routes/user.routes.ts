import express from 'express';
import * as userController from '../controllers/user.controller.ts';
import * as authController from '../controllers/auth.controller.ts';
import authMiddleware from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.post(`/`, authController.registerUser);
router.post(`/login`, authController.login);




router.get(`/id/:id`, userController.getUserById);
router.put(`/id/:id`, userController.updateUserByid);
router.put(`/`, authMiddleware, userController.updateUser);
router.delete(`/id/:id`, userController.deleteUserById)
router.delete(`/`, authMiddleware, userController.deleteUser);


export default router;

