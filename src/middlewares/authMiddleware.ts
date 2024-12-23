import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { isTokenInRedis } from '../utils/redisUtils'; 

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Authorization token is required' });
    return;
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = { id: decoded.id };

    const tokenExistsInRedis = await isTokenInRedis(decoded.id);
    if (!tokenExistsInRedis) {
       res.status(401).json({ message: 'Token is no longer valid or not found in Redis' });
       return
    }

    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
