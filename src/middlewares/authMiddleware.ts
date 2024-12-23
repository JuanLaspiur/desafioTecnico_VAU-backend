import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IRequest extends Request {
  user?: any;  
}

const authMiddleware = (req: IRequest, res: Response, next: NextFunction) => { 
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  try {
    const decoded: any = jwt.verify(token, 'your_jwt_secret');
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
