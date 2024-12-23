import express from 'express';
 import * as userController from '../controllers/user.controller.ts';
import authMiddleware from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.post(`/`, userController.registerUser);
router.post(`/login`, userController.login);
router.get(`/usrId/:id`, userController.getUserById);
// router.put(`/`, authMiddleware, userController.updateUser);
router.put(`/userId/:id`, userController.updateUserByid);
// router.get("/authToken", authMiddleware, userController.getUserByToken);

export default router;
