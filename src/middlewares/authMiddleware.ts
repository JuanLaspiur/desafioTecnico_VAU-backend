import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Authorization token is required' });
    return;
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' }); 
    return; 
  }
};

export default authMiddleware;
