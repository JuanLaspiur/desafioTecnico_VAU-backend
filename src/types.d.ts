import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user: { id: string }; 
    }
  }
  namespace NodeJS {
    interface Global {
      err: Error;
    }
  }
}
