import { Request, Response } from 'express';
import * as authService from '../services/auth.sercives.ts';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(400).json({ message: err instanceof Error && err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await authService.loginUser(email, password);
    res.status(200).json({ username: user.username, email: user.email, token });
  } catch (err) {
    res.status(400).json({ message: err instanceof Error && err.message });
  }
};
