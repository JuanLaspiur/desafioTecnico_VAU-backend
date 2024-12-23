import express from 'express';
import * as authController from '../controllers/auth.controller.ts';
import validateFields from '../middlewares/validateFields.ts';
import authMiddleware from "../middlewares/authMiddleware.ts";

const router = express.Router();


router.post(`/register`, validateFields('register'), authController.registerUser);
router.post(`/login`,  validateFields('login'), authController.login);
router.post(`/signout`,authMiddleware, authController.signOut);


export default router;