import express from 'express';
import * as userController from '../controllers/user.controller.ts';
import authMiddleware from "../middlewares/authMiddleware.ts";

const router = express.Router();


router.get(`/id/:id`,authMiddleware, userController.getUserById);
router.get(`/`, authMiddleware, userController.getAllUsers);
router.put(`/id/:id`, authMiddleware, userController.updateUserByid);
router.put(`/`, authMiddleware, userController.updateUser);
router.delete(`/id/:id`,  authMiddleware, userController.deleteUserById);
router.delete(`/`, authMiddleware, userController.deleteUser);


export default router;

