import { User } from '../../domain/User';
import { getDatabase } from '../database/database';

export function saveUser(user: User) {
  const database = getDatabase();

  return database.runAsync(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    user.name,
    user.email
  );
}
