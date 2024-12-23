import express from 'express';
import userRoutes from './user.routes.ts';
import authRoutes from './auth.routes.ts';

const router = express.Router();

router.use(`/auth`, authRoutes);
router.use(`/users`, userRoutes);



export default router;



