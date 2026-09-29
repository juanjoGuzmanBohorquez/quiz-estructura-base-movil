import { Person } from '../domain/Person';
import { savePerson } from '../infrastructure/repositories/personRepository';

export async function createPerson(person: Person) {

  if (!person.name.trim() || !person.phone.trim()) {
    throw new Error('All fields are required');
  }

  return await savePerson(person);
}