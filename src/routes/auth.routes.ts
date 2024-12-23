import express from 'express';
import * as authController from '../controllers/auth.controller.ts';
import validateFields from '../middlewares/validateFields.ts';

const router = express.Router();


router.post(`/register`, validateFields('register'), authController.registerUser);
router.post(`/login`,  validateFields('login'), authController.login);
router.post(`/signout`, authController.signOut);


export default router;