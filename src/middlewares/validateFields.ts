import { Request, Response, NextFunction } from 'express';
import { validateEmail, validatePassword, validateRequiredFields } from '../utils/validation';

const getValidationFields = (method: string) => {
  switch (method) {
    case 'register':
      return {
        fields: ['username', 'email', 'password'],
        passwordValidation: true
      };
    case 'login':
      return {
        fields: ['email', 'password'],
        passwordValidation: false
      };
    default:
      return { fields: [], passwordValidation: false };
  }
};

const validateFields = (method: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { fields, passwordValidation } = getValidationFields(method);

    const missingField = validateRequiredFields(fields, req.body);
    if (missingField) {
     res.status(400).json({ message: missingField });
     return
    }

    if (req.body.email && !validateEmail(req.body.email)) {
       res.status(400).json({ message: 'Invalid email format.' });
      return
    }

    if (passwordValidation && req.body.password && !validatePassword(req.body.password)) {
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
