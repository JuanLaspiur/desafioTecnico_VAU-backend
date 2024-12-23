import User from '../models/User';


export const getUser = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err) {
    throw new Error('Error retrieving user: ' + (err instanceof Error && err.message));
  }
};

export const updateUser = async (userId: string, userData: any) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (err) {
    throw new Error('Error updating user: ' + (err instanceof Error && err.message));
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find(); 
    return users;
  } catch (err) {
    throw new Error('Error getting users');
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  } catch (err) {
    throw new Error('Error deleting user: ' + (err instanceof Error && err.message));
  }
};
