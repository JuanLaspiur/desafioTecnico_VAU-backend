import { Request, Response, NextFunction } from 'express';

const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/

const getValidationFields = (method: string) => {
  switch (method) {
    case 'register':
      return {
        fields: ['username', 'email', 'password'],
        passwordRegex: passwordRegex
      };
    case 'login':
      return {
        fields: ['email', 'password'],
        passwordRegex: undefined
      };
    default:
      return { fields: [], passwordRegex: undefined };
  }
};

const validateFields = (method: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { fields, passwordRegex } = getValidationFields(method);

    for (const field of fields) {
      if (!req.body[field]) {
         res.status(400).json({ message: `${field} is required.` });
         return;
      }
    }

    if (req.body.email && !emailRegex.test(req.body.email)) {
       res.status(400).json({ message: 'Invalid email format.' });
       return
    }

    if (passwordRegex && req.body.password && !passwordRegex.test(req.body.password)) {
      res.status(400).json({
        message:
        'Password must be at least 7 characters long, contain one uppercase letter, one lowercase letter, one special character, and no spaces.',
      });
      return
    }

    next(); 
  };
};

export default validateFields;
