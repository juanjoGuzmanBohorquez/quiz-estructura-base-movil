import { User } from '../domain/User';
import { saveUser } from '../infrastructure/repositories/userRepository';

export async function createUser(user: User) {

  if (!user.name.trim() || !user.email.trim()) {
    throw new Error('All fields are required');
  }

  return await saveUser(user);
}