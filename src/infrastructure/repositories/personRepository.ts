import { Person } from '../../domain/Person';
import { getDatabase } from '../database/database';

export function savePerson(person: Person) {
  const database = getDatabase();

  return database.runAsync(
    'INSERT INTO persons (name, phone) VALUES (?, ?)',
    person.name,
    person.phone
  );
}