import { Product } from '../../domain/Product';
import { getDatabase } from '../database/database';

export function saveProduct(product: Product) {
  const database = getDatabase();

  return database.runAsync(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    product.name,
    product.price
  );
}