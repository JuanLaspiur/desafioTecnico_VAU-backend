import { Request, Response } from 'express';
import * as userService from '../services/user.services.ts';


export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.id; 
  try {
    const user = await userService.getUser(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message:  err instanceof Error && err.message }); 
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.user.id; 
  try {
    const updatedUser = await userService.updateUser(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err instanceof Error && err.message });
  }
};

export const updateUserByid = async(req:Request, res: Response) =>{
    const userId = req.params.id;
    try {
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(400).json({ message: err instanceof Error && err.message });
      }
} 

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err instanceof Error && err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.user.id;  
  try {
    const deletedUser = await userService.deleteUser(userId);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(400).json({ message: err instanceof Error && err.message });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
    const userId = req.params.id;  
    try {
      const deletedUser = await userService.deleteUser(userId);
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(400).json({ message: err instanceof Error && err.message });
    }
  };
