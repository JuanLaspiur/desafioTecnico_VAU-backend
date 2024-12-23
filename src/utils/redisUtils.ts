import { redisClient } from '../config/redisConfig';

export const isTokenInRedis = async (userId: string): Promise<boolean> => {
    try {
      const reply = await redisClient.get(userId);
      return reply !== null; 
    } catch (err) {
      throw new Error('Error accessing Redis');
    }
  };

