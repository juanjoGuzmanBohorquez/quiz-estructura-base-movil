import { Product } from '../domain/Product';
import { saveProduct } from '../infrastructure/repositories/productRepository';

export async function createProduct(product: Product) {

  if (!product.name.trim() || product.price <= 0) {
    throw new Error('Invalid product data');
  }

  return await saveProduct(product);
}