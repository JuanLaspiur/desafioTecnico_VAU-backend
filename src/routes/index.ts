import express from 'express';
import userRoutes from './user.routes.ts';

const router = express.Router();

router.use(`/users`, userRoutes);


export default router;


